import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { defaultDark, ThemeDecorator, defaultPurple } from '@/shared/config/storybook';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    width: '100%',
    height: 200,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const Purple: Story = {
  ...defaultPurple,
  args: {},
  decorators: [ThemeDecorator('purple')],
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

export const CircleDark: Story = {
  ...defaultDark,
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator('dark')],
};

export const CirclePurple: Story = {
  ...defaultPurple,
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator('purple')],
};
