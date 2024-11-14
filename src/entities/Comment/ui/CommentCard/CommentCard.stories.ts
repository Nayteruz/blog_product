import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comment: {
      id: '1',
      text: 'Comment text',
      user: {
        id: '1',
        username: 'username',
      },
    },
  },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const IsLoading: Story = {args: {isLoading: true,},};
