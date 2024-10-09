import { FC } from 'react';
import { cn } from '@/shared/lib';
import s from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => (
  <div className={cn(s.footer, className)}>
    Copyright 2024
  </div>
);
