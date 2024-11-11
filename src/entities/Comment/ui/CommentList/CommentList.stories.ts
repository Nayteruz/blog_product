import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'nonGroup/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
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
