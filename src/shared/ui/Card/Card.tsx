import {
  FC, HTMLAttributes, memo, ReactNode 
} from 'react';
import { cn } from '@/shared/lib';
import s from './Card.module.scss';

const cardTheme = {
  NORMAL: 'normal',
  OUTLINED: 'outlined',
} as const;

const cardSize = {
  S: 'small',
  M: 'normal',
  L: 'large',
} as const;

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: (typeof cardTheme)[keyof typeof cardTheme];
  size?: (typeof cardSize)[keyof typeof cardSize];
}

export const Card: FC<ICardProps> = memo((props) => {
  const { className, children, theme = cardTheme.NORMAL, size = cardSize.S, ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cn(s.card, s[theme], s[`${size}Size`], s[size], className)} {...otherProps}>
      {children}
    </div>
  );
});
