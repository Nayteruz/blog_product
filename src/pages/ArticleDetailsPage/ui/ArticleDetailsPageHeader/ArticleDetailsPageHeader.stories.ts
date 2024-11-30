import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'nonGroup/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
