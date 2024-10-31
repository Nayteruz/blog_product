import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import { Country } from '../../model/types';

const meta = {
  title: 'Entities/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CountrySelect>;

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
    value: Country.Russia,
  },
};
