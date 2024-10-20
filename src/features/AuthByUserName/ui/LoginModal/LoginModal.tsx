import { FC } from 'react';
import { cn } from '@/shared/lib';
import { Modal } from '@/shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss';

interface ILoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal lazy isOpen={isOpen} onClose={onClose} className={cn(s.loginModal, className)}>
    <LoginForm />
  </Modal>
);
