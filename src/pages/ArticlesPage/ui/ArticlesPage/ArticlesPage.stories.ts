import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ArticlesPage>;

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
