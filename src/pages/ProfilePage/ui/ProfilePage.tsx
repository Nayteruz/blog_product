import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { profileReducer } from '@/entities/Profile';
import s from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  useDynamicReducer(reducers);

  return (
    <div className={cn('s.profilePage', className)}>
      ProfilePage
    </div>
  );
};

export default ProfilePage;
