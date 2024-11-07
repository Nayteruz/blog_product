import {
  CSSProperties, MouseEvent, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { cn } from '@/shared/lib';
import { Portal } from '@/shared/ui/Portal/Portal';
import s from './Modal.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  container?: HTMLElement | null;
  modalKey?: string;
  style?: CSSProperties;
  lazy?: boolean;
}

export const Modal = ({
  className, children, isOpen, onClose, container, modalKey, style, lazy,
}: IModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const onCloseHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const clickStop = (e: MouseEvent) => e.stopPropagation();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onKeyDownEsc);
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('keydown', onKeyDownEsc);
      }
    };
  }, [isOpen, onClose]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal container={container} modalKey={modalKey}>
      <div className={cn(s.modal, { [s.opened]: isOpen }, className)} style={style}>
        <div className={s.overlay} onClick={onCloseHandler} role="presentation">
          <div role="presentation" className={s.content} onClick={clickStop}>
            <span role="presentation" className={s.close} onClick={onCloseHandler}>
              <Icon name="close" />
            </span>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
