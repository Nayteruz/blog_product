import type { Meta, StoryObj } from '@storybook/react';
import { [FTName] } from './[FTName]';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'nonGroup/[FTName]',
  component: [FTName],
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof [FTName]>;

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
