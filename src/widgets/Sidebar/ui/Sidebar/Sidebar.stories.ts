import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { defaultDark, ThemeDecorator, StoryDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {},
  args: {style: {minHeight: 400,},},
  decorators: [StoryDecorator({ user: { authData: {} } })],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};

export const NoAuth: Story = {decorators: [StoryDecorator({ user: {} })],};
