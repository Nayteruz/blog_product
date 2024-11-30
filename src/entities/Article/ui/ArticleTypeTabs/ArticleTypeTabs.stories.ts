import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
  title: 'Emtities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
  argTypes: {},
  args: { type: ArticleBlockType.ALL, onChangeType: fn() },
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
