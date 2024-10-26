import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};
