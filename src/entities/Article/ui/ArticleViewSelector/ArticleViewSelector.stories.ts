import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleViewSelector } from './ArticleViewSelector';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import { ArticleListView } from '../../model/types/article';

const meta = {
  title: 'Entities/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    view: ArticleListView.LIST,
    onViewClick: fn(),
  },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
