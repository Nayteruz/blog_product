import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'Comment text 1',
        user: {
          id: '1',
          username: 'username',
        },
      },
      {
        id: '2',
        text: 'Comment text 2',
        user: {
          id: '1',
          username: 'username 2',
        },
      },
    ],
  },
} satisfies Meta<typeof CommentList>;

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

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const NoComments: Story = {
  args: {
    comments: [],
  },
};
