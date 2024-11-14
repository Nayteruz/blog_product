import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {children: { control: 'text', defaultValue: '' },},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const NormalValue: Story = {args: {value: 'Test value',},};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const Placeholder: Story = {args: {placeholder: 'Placeholder',},};

export const Title: Story = {args: {title: 'Title',},};

export const PlaceholderTitle: Story = {
  args: {
    title: 'Title',
    placeholder: 'Placeholder',
  },
};

export const TitleValue: Story = {
  args: {
    title: 'Title',
    value: 'Test value',
  },
};

export const DarkPlaceholderTitle: Story = {
  ...defaultDark,
  args: {
    title: 'Title',
    placeholder: 'Placeholder',
  },
  decorators: [ThemeDecorator('dark')],
};

export const DarkTitleValue: Story = {
  ...defaultDark,
  args: {
    title: 'Title',
    value: 'Test value',
  },
  decorators: [ThemeDecorator('dark')],
};
