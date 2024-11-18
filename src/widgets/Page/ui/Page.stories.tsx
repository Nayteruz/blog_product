import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Widgets/Page',
  component: Page,
  tags: ['autodocs'],
  argTypes: {},
  args: { children: <div>Page children in div element</div>, style: { height: 250 } },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
