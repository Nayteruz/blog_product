import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AddCommentForm from './AddCommentForm';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {onSendComment: fn(),},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
