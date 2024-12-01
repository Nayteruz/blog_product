import {
  CSSProperties, FC, memo, useCallback, useState 
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './Navbar.module.scss';
import { AppLink, Button, Text } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface INavbarProps {
  className?: string;
  style?: CSSProperties;
}

export const Navbar: FC<INavbarProps> = memo(({ className, style }) => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onClose = () => {
    setIsAuthModal(false);
  };

  const onOpen = () => {
    setIsAuthModal(true);
  };

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    onClose();
  }, [dispatch]);

  if (authData) {
    return (
      <header className={cn(s.navbar, className)}>
        <Text className={s.appName} title="My blog app" theme="inverted" />
        <AppLink to={RoutePath.article_create} theme="secondary">
          {t('Create article')}
        </AppLink>
        <Button className={s.links} theme="clearInverted" style={style} onClick={onLogout}>
          {t('Sign out')}
        </Button>
      </header>
    );
  }

  return (
    <header className={cn(s.navbar, className)}>
      <Text className={s.appName} title="My blog app" theme="inverted" />
      <Button className={s.links} theme="clearInverted" style={style} onClick={onOpen}>
        {t('Sign in')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </header>
  );
});
