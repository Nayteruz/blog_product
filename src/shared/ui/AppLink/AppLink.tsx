import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '../../lib';
import s from './AppLink.module.scss';

const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: (typeof AppLinkTheme)[keyof typeof AppLinkTheme];
}

export const AppLink: FC<IAppLinkProps> = memo((props: IAppLinkProps) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY, ...other 
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} className={cn(s.appLink, className, s[theme])} {...other}>
      {children}
    </Link>
  );
});
