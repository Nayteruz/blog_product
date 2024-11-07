import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, Icon, TIcon } from '@/shared/ui';
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
    [Theme.LIGHT]: 'sun',
    [Theme.DARK]: 'moon',
    [Theme.PURPLE]: 'moon-purple',
  };

  const settedTheme = themeDefault || theme || Theme.LIGHT;
  const iconTheme = themeIcon[settedTheme] as TIcon;
  toggleBodyTheme(settedTheme);

  return (
    <Button
      theme="clear"
      className={cn(s.themeSwitcher, className, s[Theme.LIGHT])}
      onClick={() => toggleTheme()}
    >
      {__PROJECT__ === 'storybook'
        ? <Icon name="moon-purple" />
        : <Icon name={iconTheme} />}
    </Button>
  );
});
