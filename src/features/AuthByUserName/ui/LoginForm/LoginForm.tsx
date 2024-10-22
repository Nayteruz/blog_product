import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/ui/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import s from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(() => {
    // console.log('login', username, password);
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={cn(s.loginForm, className)}>
      <Text title={t('Login title')} />
      {error && <Text text={t(error)} theme="error" />}
      <Input
        placeholder={t('Username')}
        title={t('Username')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="password"
        placeholder={t('Password')}
        title={t('Password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        onClick={onLogin}
        theme="outline"
        className={s.loginBtn}
      >
        {t('Enter')}
      </Button>
    </div>
  );
});
