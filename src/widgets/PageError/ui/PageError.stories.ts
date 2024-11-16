import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {},
  args: { errorText: 'Error text' },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};
