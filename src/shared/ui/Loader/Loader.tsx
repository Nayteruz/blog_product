import { FC } from 'react';
import { cn } from '@/shared/lib';
import s from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => (
  <div className={cn(s.loader, className)} />
);
