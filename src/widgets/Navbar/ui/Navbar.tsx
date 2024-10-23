import { CSSProperties, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './Navbar.module.scss';
import { Button } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

interface INavbarProps {
  className?: string;
  style?: CSSProperties;
}

export const Navbar = ({ className, style }: INavbarProps) => {
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
      <nav className={cn(s.navbar, className)}>
        <Button
          className={s.links}
          theme="clearInverted"
          style={style}
          onClick={onLogout}
        >
          {t('Sign out')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={cn(s.navbar, className)}>
      <Button
        className={s.links}
        theme="clearInverted"
        style={style}
        onClick={onOpen}
      >
        {t('Sign in')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </nav>
  );
};
