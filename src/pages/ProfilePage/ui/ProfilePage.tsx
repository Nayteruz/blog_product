import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducer(reducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={cn(className)}>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
