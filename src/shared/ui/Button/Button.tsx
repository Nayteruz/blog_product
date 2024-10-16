import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/lib';
import s from './Button.module.scss';

const ButtonTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
  CLEAR: 'clear',
  CLEAR_INVERTED: 'clearInverted',
  OUTLINE: 'outline',
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
  theme?: typeof ButtonTheme[keyof typeof ButtonTheme];
  square?: boolean;
  size?: keyof typeof ButtonSize;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className, children, theme = ButtonTheme.PRIMARY, square, size, ...other
  } = props;

  const mods = [
    { [s[theme]]: theme },
    { [s.square]: square },
    { [s[ButtonSize[size]]]: size },
  ];

  return (
    <button
      type="button"
      className={cn(s.button, ...mods, className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {children}
    </button>
  );
};
