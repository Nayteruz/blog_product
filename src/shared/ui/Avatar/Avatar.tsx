import { CSSProperties, FC, useMemo } from 'react';
import { cn } from '../../lib';
import s from './Avatar.module.scss';

interface IAvatarProps {
  src: string;
  className?: string;
  alt?: string;
  title?: string;
  size?: number;
  style?: CSSProperties;
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const {
    className, src, alt = '', title = '', style, size = 100 
  } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
      ...style,
    }),
    [size, style],
  );

  return <img src={src} className={cn(s.avatar, className)} title={title} alt={alt} style={styles} />;
};
