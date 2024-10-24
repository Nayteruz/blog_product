import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    // title: { control: 'text', defaultValue: '' },
    // text: { control: 'text', defaultValue: '' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: 'Test title',
    text: 'Test text',
  },
};

export const Dark: Story = {
  ...defaultDark,
  args: {
    title: 'Test value',
    text: 'Test value',
  },
  decorators: [ThemeDecorator('dark')],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Test title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Test title',
  },
};

export const ThemePrimary: Story = {
  args: {
    title: 'Test title',
    text: 'Test text',
    theme: 'primary',
  },
};

export const ThemeError: Story = {
  args: {
    title: 'Test title error',
    text: 'Test text error',
    theme: 'error',
  },
};
