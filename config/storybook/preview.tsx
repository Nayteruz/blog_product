import type { Preview } from '@storybook/react';
import {
  RouterDecorator, StyleDecorator, ThemeDecorator, themes,
} from '../../src/shared/config/storybook';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    ...themes,
  },
  decorators: [StyleDecorator, ThemeDecorator('normal'), RouterDecorator],
};

export default preview;
