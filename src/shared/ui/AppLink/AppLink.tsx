import { FC, ReactNode } from "react";
import { cn } from '@/shared/lib';
import s from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom";

const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: typeof AppLinkTheme[keyof typeof AppLinkTheme];
  children?: ReactNode
}

export const AppLink: FC<IAppLinkProps> = (props: IAppLinkProps) => {
  const {to, className, children, theme = AppLinkTheme.PRIMARY, ...other} = props;
  return (
    <Link  to={to} className={cn(s.appLink, className, s[theme])} {...other}>
      {children}
    </Link>
  );
};