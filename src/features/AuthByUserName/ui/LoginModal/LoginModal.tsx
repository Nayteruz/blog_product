import { FC, Suspense } from 'react';
import { cn } from '@/shared/lib';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import s from './LoginModal.module.scss';

interface ILoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal lazy isOpen={isOpen} onClose={onClose} className={cn(s.loginModal, className)}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
