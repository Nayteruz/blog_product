import {
  CSSProperties,
  memo, MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';
import { cn } from '@/shared/lib';
import { Portal } from '@/shared/ui/Portal/Portal';
import s from './Modal.module.scss';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  container?: HTMLElement | null;
  modalKey?: string;
  style?: CSSProperties;
}

export const Modal = memo(({
  className, children, isOpen, onClose, container, modalKey, style,
}: IModalProps) => {
  const onCloseHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const clickStop = (e: MouseEvent) => e.stopPropagation();

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

  return (
    <Portal container={container} modalKey={modalKey}>
      <div className={cn(s.modal, { [s.opened]: isOpen }, className)} style={style}>
        <div
          className={s.overlay}
          onClick={onCloseHandler}
          role="presentation"
        >
          <div
            role="presentation"
            className={s.content}
            onClick={clickStop}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});
