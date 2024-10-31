import { ButtonHTMLAttributes, FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './Button.module.scss';

const ButtonTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
  CLEAR: 'clear',
  CLEAR_INVERTED: 'clearInverted',
  OUTLINE: 'outline',
  OUTLINE_RED: 'outlineRed',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

const ButtonSize = {
  M: 'sizeM',
  L: 'sizeL',
  XL: 'sizeXl',
} as const;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: (typeof ButtonTheme)[keyof typeof ButtonTheme];
  square?: boolean;
  size?: keyof typeof ButtonSize;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo((props) => {
  const {
    className, children, theme = ButtonTheme.OUTLINE, square, size = 'M', disabled, ...other
  } = props;

  const mods = [
    { [s[theme]]: theme },
    { [s.square]: square },
    { [s[ButtonSize[size]]]: size },
    { [s.disabled]: disabled },
  ];

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(s.button, ...mods, className)}
      {...other}
    >
      {children}
    </button>
  );
});
