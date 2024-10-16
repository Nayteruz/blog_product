import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  container?: HTMLElement | null;
  modalKey?: string;
}

export const Portal: FC<IPortalProps> = (
  {
    children,
    container,
    modalKey,
  },
) => {
  const target = container instanceof HTMLElement ? container : document.body;

  if (container === null) {
    return children;
  }

  return createPortal(children, target, modalKey);
};
