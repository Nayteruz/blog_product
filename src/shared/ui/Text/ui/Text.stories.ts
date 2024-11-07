import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    title: 'Test title',
    text: 'Test text',
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Test title',
    text: '',
  },
};

export const OnlyText: Story = {
  args: {
    title: '',
    text: 'Test title',
  },
};

export const ThemePrimary: Story = {
  args: {
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

export const SizeS: Story = {
  args: {
    size: 12,
  },
};

export const SizeM: Story = {
  args: {
    size: 16,
  },
};

export const SizeL: Story = {
  args: {
    size: 24,
  },
};

export const SizeXL: Story = {
  args: {
    size: 36,
  },
};
