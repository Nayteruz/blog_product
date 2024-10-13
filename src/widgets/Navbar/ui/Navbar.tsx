import { CSSProperties } from 'react';
import { cn } from '@/shared/lib';
import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
  style?: CSSProperties;
}

export const Navbar = ({ className, style }: INavbarProps) => (
  <nav className={cn(s.navbar, className)}>

    <div className={s.links} style={style} />
  </nav>
);
