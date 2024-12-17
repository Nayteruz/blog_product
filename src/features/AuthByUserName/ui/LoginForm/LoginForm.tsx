import {
  ChangeEvent, FC, memo, useCallback 
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { Button, Text } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/ui/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import s from './LoginForm.module.scss';

export interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm: FC<ILoginFormProps> = memo(({
  className, onSuccess 
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    username, password, error, isLoading 
  } = useSelector(getLoginState);

  useDynamicReducer(initialReducers);

  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(e.target.value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setPassword(e.target.value));
    },
    [dispatch],
  );

  const onLogin = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({
        username,
        password,
      }),
    );

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, password, username, onSuccess]);

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
      <Button disabled={isLoading} onClick={onLogin} theme="outline" className={s.loginBtn}>
        {t('Sign in')}
      </Button>
    </div>
  );
});

export default LoginForm;
