import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, TTheme,
} from './ThemeContext';

export const useTheme = () => {
  const {
    theme, setTheme 
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: TTheme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.PURPLE;
      break;
    case Theme.PURPLE:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
