import {
  ReactNode, useMemo, useState, FC,
} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  TTheme,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

export const defaultTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as TTheme || Theme.LIGHT;

interface IThemeProps {
  children: ReactNode
}

const ThemeProvider: FC<IThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
