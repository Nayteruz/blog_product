import { CSSProperties, FC, memo } from 'react';
import { cn } from '../../lib';
import s from './Loader.module.scss';

const loaderSize = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
} as const;

interface ILoaderProps {
  className?: string;
  style?: CSSProperties;
  size?: (typeof loaderSize)[keyof typeof loaderSize];
}

export const Loader: FC<ILoaderProps> = memo(({ className, style, size = loaderSize.NORMAL }) => (
  <div className={cn(s.loader, s[size], className)} style={style} />
));
