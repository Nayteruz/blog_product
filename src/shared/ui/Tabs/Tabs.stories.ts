import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tabs } from './Tabs';
import { defaultDark, ThemeDecorator } from '../../config/storybook';

const meta = {
  title: 'Shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onTabClick: {
      tab: {
        value: '2',
        content: 'tab 1',
      },
    },
  },
  args: {
    tabs: [
      {
        value: '1',
        content: 'Tab 1',
      },
      {
        value: '2',
        content: 'Tab 2',
      },
      {
        value: '3',
        content: 'Tab 3',
      },
    ],
    value: '1',
    onTabClick: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
