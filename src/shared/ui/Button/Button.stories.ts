import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { defaultDark, ThemeDecorator } from '../../config/storybook';

const meta = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'link',
        'clear',
        'clearInverted',
        'outline',
        'background',
        'backgroundInverted',
      ],
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['M', 'L', 'XL'],
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
  args: { children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NormalPrimary: Story = { args: { theme: 'primary' } };

export const DarkPrimary: Story = {
  ...defaultDark,
  args: { theme: 'primary' },
  decorators: [ThemeDecorator('dark')],
};

export const NormalSecondary: Story = { args: { theme: 'primary' } };

export const DarkSecondary: Story = {
  ...defaultDark,
  args: { theme: 'primary' },
  decorators: [ThemeDecorator('dark')],
};

export const NormalLink: Story = { args: { theme: 'link' } };

export const DarkLink: Story = {
  ...defaultDark,
  args: { theme: 'link' },
  decorators: [ThemeDecorator('dark')],
};

export const NormalClear: Story = { args: { theme: 'clear' } };

export const DarkClear: Story = {
  ...defaultDark,
  args: { theme: 'clear' },
  decorators: [ThemeDecorator('dark')],
};

export const ClearInverted: Story = { args: { theme: 'clearInverted' } };

export const NormalOutline: Story = { args: { theme: 'outline' } };

export const DarkOutline: Story = {
  ...defaultDark,
  args: { theme: 'outline' },
  decorators: [ThemeDecorator('dark')],
};

export const OutlineSizeL: Story = {
  args: {
    theme: 'outline',
    size: 'L',
  },
};

export const OutlineSizeXL: Story = {
  args: {
    theme: 'outline',
    size: 'XL',
  },
};

export const SquareSizeM: Story = {
  args: {
    square: true,
    children: '>',
    size: 'M',
  },
};

export const SquareSizeL: Story = {
  args: {
    square: true,
    children: 'L',
    size: 'L',
  },
};

export const SquareSizeXL: Story = {
  args: {
    square: true,
    children: 'XL',
    size: 'XL',
  },
};

export const Background: Story = {
  ...defaultDark,
  args: { theme: 'background' },
};

export const BackgroundInverted: Story = { args: { theme: 'backgroundInverted' } };

export const Disabled: Story = { args: { disabled: true } };
