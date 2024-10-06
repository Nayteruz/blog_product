import { FC } from 'react';
import { cn } from '@/shared/lib';
import s from './PageLoader.module.scss';
import { Loader } from '@/shared/ui';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => (
  <div className={cn(s.pageLoader)}>
    <Loader />
  </div>
);
