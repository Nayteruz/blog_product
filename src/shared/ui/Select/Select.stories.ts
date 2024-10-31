import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const list = [
  { value: '1', label: 'label 1' },
  { value: '2', label: 'label 2' },
  { value: '3', label: 'label 3' },
  { value: '4', label: 'label 4' },
  { value: '5', label: 'label 5' },
];

const meta = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    options: list,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const WithLabel: Story = {
  args: {
    label: 'label',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'label placeholder',
  },
};

export const WithSelectedValue: Story = {
  args: {
    value: list[2].value,
  },
};
