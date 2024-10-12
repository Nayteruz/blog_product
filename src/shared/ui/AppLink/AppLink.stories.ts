import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    children: { control: 'text', defaultValue: 'Link' },
  },
  args: {
    children: 'Link',
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalPrimary: Story = {
  args: {
    theme: 'primary',
  },
};

export const DarkPrimary: Story = {
  ...defaultDark,
  args: {
    theme: 'primary',
  },
  decorators: [ThemeDecorator('dark')],
};

export const NormalSecondary: Story = {
  args: {
    theme: 'secondary',
  },
};

export const DarkSecondary: Story = {
  ...defaultDark,
  args: {
    theme: 'secondary',
  },
  decorators: [ThemeDecorator('dark')],
};