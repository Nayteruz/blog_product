import type { Meta, StoryObj } from '@storybook/react';
import { ArticlePageFilters } from './ArticlePageFilters';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Pages/ArticlesPage/ArticlePageFilters',
  component: ArticlePageFilters,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ArticlePageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
