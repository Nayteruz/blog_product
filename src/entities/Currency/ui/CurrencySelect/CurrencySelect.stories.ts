import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import { Currency } from '../../model/types';

const meta = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CurrencySelect>;

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
    label: 'label currency',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'select currency',
    value: 'placeholder',
  },
};

export const WithSelectedValue: Story = {
  args: {
    value: Currency.USD,
  },
};
