import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {},
  args: {style: {minHeight: 200,},},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};
