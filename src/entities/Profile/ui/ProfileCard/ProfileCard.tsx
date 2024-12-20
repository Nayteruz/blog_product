import { ChangeEvent, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import {
  Text, Avatar, Loader, VStack, HStack 
} from '@/shared/ui';
import { Input } from '@/shared/ui/Input/ui/Input';
import { IProfile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';

interface IChangeData {
  name: string;
  value: string;
  type: string;
}
interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  isReadOnly?: boolean;
  onChangeData?: (props: IChangeData) => void;
}

export const ProfileCard: FC<IProfileCardProps> = ({
  className, data, isLoading, error, isReadOnly, onChangeData 
}) => {
  const { t } = useTranslation();

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(e: ChangeEvent<T>) => {
      const {
        name, value, type 
      } = e.target;
      onChangeData?.({
        name,
        value,
        type,
      });
    },
    [onChangeData],
  );

  if (isLoading) {
    return (
      <VStack align="center" justify="center" className={cn(s.loading, className)}>
        <Loader size="small" />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack align="center" justify="center" className={cn(s.error, className)}>
        <Text title={t('Profile error')} text={t('Profile error message')} theme="error" align="center" />
        {error}
      </VStack>
    );
  }

  return (
    <VStack gap="16" align="stretch" className={cn(s.profileCard, { [s.editing]: !isReadOnly }, className)}>
      {data?.avatar && (
        <HStack justify="center">
          <Avatar src={data?.avatar} size={100} />
        </HStack>
      )}
      <Input
        readOnly={isReadOnly}
        value={data?.first}
        placeholder={t('Your name')}
        className={s.input}
        name="first"
        onChange={onChange}
      />
      <Input
        readOnly={isReadOnly}
        value={data?.lastname}
        placeholder={t('Your lastname')}
        className={s.input}
        name="lastname"
        onChange={onChange}
      />
      <Input
        readOnly={isReadOnly}
        type="number"
        pattern="\d*"
        min={1}
        max={120}
        value={data?.age}
        placeholder={t('Your age')}
        className={s.input}
        name="age"
        onChange={onChange}
      />
      <Input
        readOnly={isReadOnly}
        value={data?.city}
        placeholder={t('Your city')}
        className={s.input}
        name="city"
        onChange={onChange}
      />
      <Input
        readOnly={isReadOnly}
        value={data?.username}
        placeholder={t('Your username')}
        className={s.input}
        name="username"
        onChange={onChange}
      />
      <Input
        readOnly={isReadOnly}
        value={data?.avatar}
        placeholder={t('Your avatar')}
        className={s.input}
        name="avatar"
        onChange={onChange}
      />
      <CountrySelect value={data?.country} readOnly={isReadOnly} name="country" onChange={onChange} />
      <CurrencySelect value={data?.currency} readOnly={isReadOnly} name="currency" onChange={onChange} />
    </VStack>
  );
};
