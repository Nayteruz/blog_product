import { CSSProperties, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './Navbar.module.scss';
import { Button, Modal } from '@/shared/ui';

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
      <Modal isOpen={isAuthModal} onClose={onClose}>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in vel eos assumenda architecto deserunt illum nam culpa nihil eligendi, molestias voluptas ipsum consequuntur unde tenetur repudiandae beatae consectetur veniam?
      </Modal>
    </nav>
  );
};
