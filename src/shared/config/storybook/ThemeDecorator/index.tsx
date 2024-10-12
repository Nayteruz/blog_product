import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { TTheme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: TTheme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
