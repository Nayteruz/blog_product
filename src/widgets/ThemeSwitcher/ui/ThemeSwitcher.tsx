import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { Button } from '@/shared/ui';
import s from './ThemeSwitcher.module.scss';
import { TTheme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface IThemeSwitcherProps {
  className?: string;
  themeDefault?: TTheme;
}

const toggleBodyTheme = (theme: TTheme) => {
  const documentBody = document.body;
  const removeTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  const addTheme = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;

  documentBody.classList.add(addTheme);
  documentBody.classList.remove(removeTheme);
};

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(({ className, themeDefault }) => {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = themeDefault || theme === Theme.LIGHT ? SunIcon : MoonIcon;
  toggleBodyTheme(themeDefault || theme || Theme.LIGHT);

  return (
    <Button
      theme="clear"
      className={cn(s.themeSwitcher, className, s[theme || Theme.LIGHT])}
      onClick={() => toggleTheme()}
    >
      <ThemeIcon />
    </Button>
  );
});
