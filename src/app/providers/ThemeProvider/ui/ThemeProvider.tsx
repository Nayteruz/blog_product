import {
  ReactNode, useMemo, useState, FC,
} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, TTheme, Theme, ThemeContext,
} from '../lib/ThemeContext';

export const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || Theme.LIGHT;

interface IThemeProps {
  children: ReactNode;
  initialTheme?: TTheme;
}

const ThemeProvider: FC<IThemeProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<TTheme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
