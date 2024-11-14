import { CSSProperties, FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  border?: CSSProperties['borderRadius'];
}

export const Skeleton: FC<ISkeletonProps> = memo((props) => {
  const {className, width, height, border,} = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={cn(s.skeleton, className)} style={styles} />
  );
});
