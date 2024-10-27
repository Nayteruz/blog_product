import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/ui/Input';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={cn(s.profileCard, className)}>
      <div className={s.header}>
        <Text title={t('Profile title')} />
        <Button theme="outline" className={s.editBtn}>
          {t('Edit profile')}
        </Button>
      </div>
      <div className={s.data}>
        <Input value={data?.first} placeholder={t('Your name')} className={s.input} />
        <Input value={data?.lastname} placeholder={t('Your lastname')} className={s.input} />
      </div>
    </div>
  );
};
