import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'nonGroup/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CommentCard>;

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