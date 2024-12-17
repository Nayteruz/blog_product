import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { defaultDark, ThemeDecorator } from '../../config/storybook';

const meta = {
  title: 'Shared/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    name: 'calendar',
    size: 'sizeXl',
    style: { color: '#2C2E4A' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: { style: { color: '#d8e1ff' } },
  decorators: [ThemeDecorator('dark')],
};
