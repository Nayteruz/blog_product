import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import s from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/ui/Input';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.loginForm, className)}>
      <Input placeholder={t('Username')} title={t('Username')} autofocus />
      <Input type="password" placeholder={t('Password')} title={t('Password')} />
      <Button theme="outline" className={s.loginBtn}>{t('Enter')}</Button>
    </div>
  );
};
