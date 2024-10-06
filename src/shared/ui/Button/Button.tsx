import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/lib';
import s from './Button.module.scss';

const ThemeButton = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  CLEAR: 'clear',
} as const;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: typeof ThemeButton[keyof typeof ThemeButton];
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className, children, theme = ThemeButton.PRIMARY, ...other
  } = props;
  return (
    <button type="button" className={cn(s.button, s[theme], className)} {...other}>
      {children}
    </button>
  );
};
