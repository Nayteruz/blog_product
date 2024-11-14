import {
  FC, HTMLAttributes, memo, ReactNode,
} from 'react';
import { cn } from '@/shared/lib';
import s from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const Card: FC<ICardProps> = memo((props) => {
  const { className, children, ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cn(s.card, className)} {...otherProps}>
      {children}
    </div>
  );
});
