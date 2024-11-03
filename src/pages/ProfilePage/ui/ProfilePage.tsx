import {
  FC, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
import { Text } from '@/shared/ui/Text';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const isReadOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateError);

  // INCORRECT_DATA: 'INCORRECT_DATA',
  //   INCORRECT_USERNAME: 'INCORRECT_USERNAME',
  //   INCORRECT_AGE: 'INCORRECT_AGE',
  //   INCORRECT_CURRENCY: 'INCORRECT_CURRENCY',
  //   INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  //   NO_DATA: 'NO_DATA',
  //   SERVER_ERROR: 'SERVER_ERROR',

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

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  interface IChangeData {
    name: string;
    value: string;
    type: string;
  }

  const onChangeData = useCallback(({ name, value, type }: IChangeData) => {
    dispatch(profileActions.updateProfile({
      [name]: type === 'number' ? Number(value) : value,
    }));
  }, [dispatch]);

  return (
    <>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map((err) => (
        <Text key={err} text={validateTranslates[err]} theme="error" />
      ))}
      <ProfileCard
        onChangeData={onChangeData}
        data={formData}
        isLoading={isLoading}
        error={error}
        isReadOnly={isReadOnly}
      />
    </>
  );
};

export default ProfilePage;
