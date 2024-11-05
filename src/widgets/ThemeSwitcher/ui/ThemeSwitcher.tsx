import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import MoonPurpleIcon from '@/shared/assets/icons/moonPurple.svg';
import { Button } from '@/shared/ui';
import s from './ThemeSwitcher.module.scss';
import { TTheme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface IThemeSwitcherProps {
  className?: string;
  themeDefault?: TTheme;
}

const toggleBodyTheme = (theme: TTheme) => {
  const documentBody = document.body;

  documentBody.classList.remove(...Object.values(Theme));
  documentBody.classList.add(theme || Theme.LIGHT);
};

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(({ className, themeDefault }) => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = {
    [Theme.LIGHT]: SunIcon,
    [Theme.DARK]: MoonIcon,
    [Theme.PURPLE]: MoonPurpleIcon,
  };

  const settedTheme = themeDefault || theme || Theme.LIGHT;
  const ThemeIcon = themeIcon[settedTheme];
  toggleBodyTheme(settedTheme);

  return (
    <Button
      theme="clear"
      className={cn(s.themeSwitcher, className, s[Theme.LIGHT])}
      onClick={() => toggleTheme()}
    >
      {__PROJECT__ === 'storybook' ? <MoonPurpleIcon /> : <ThemeIcon />}
    </Button>
  );
});
