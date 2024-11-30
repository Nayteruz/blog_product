import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadOnly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader';
import { Text } from '@/shared/ui';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

const reducers: ReducersList = { profile: profileReducer };

interface IChangeData {
  name: string;
  value: string;
  type: string;
}

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const isReadOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateError);

  const validateTranslates = {
    [ValidateProfileError.INCORRECT_DATA]: t('Incorrect data'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('Incorrect username'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('Incorrect currency'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.NO_DATA]: t('No data'),
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
  };

  useDynamicReducer(reducers);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [id, dispatch]);

  const onChangeData = useCallback(
    ({ name, value, type }: IChangeData) => {
      dispatch(profileActions.updateProfile({ [name]: type === 'number' ? Number(value) : value }));
    },
    [dispatch],
  );

  return (
    <Page>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map(err => <Text key={err} text={validateTranslates[err]} theme="error" />)}
      <ProfileCard
        onChangeData={onChangeData}
        data={formData}
        isLoading={isLoading}
        error={error}
        isReadOnly={isReadOnly}
      />
    </Page>
  );
};

export default ProfilePage;
