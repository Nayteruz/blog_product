import { CSSProperties, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './Navbar.module.scss';
import { Button } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';

interface INavbarProps {
  className?: string;
  style?: CSSProperties;
}

export const Navbar = ({ className, style }: INavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onClose = () => {
    setIsAuthModal(false);
  };

  const onOpen = () => {
    setIsAuthModal(true);
  };

  return (
    <nav className={cn(s.navbar, className)}>
      <Button
        className={s.links}
        theme="clearInverted"
        style={style}
        onClick={onOpen}
      >
        {t('Enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </nav>
  );
};
