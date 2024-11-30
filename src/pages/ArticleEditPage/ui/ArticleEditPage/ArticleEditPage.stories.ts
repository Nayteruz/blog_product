import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
