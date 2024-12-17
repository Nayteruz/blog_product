import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { defaultDark, ThemeDecorator } from '../../config/storybook';

const meta = {
  title: 'Shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text: `const meta = {
  title: 'Shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    codeText: const meta = {
  title: 'Shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Code>;,
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;`,
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
