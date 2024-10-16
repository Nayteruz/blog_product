import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { TTheme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: TTheme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`theme ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);
