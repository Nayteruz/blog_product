import {
  FC, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const isReadOnly = useSelector(getProfileReadOnly);

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
