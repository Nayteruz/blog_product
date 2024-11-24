import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import { ArticleSortField } from '../../model/types/article';

const meta = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
