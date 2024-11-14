import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { defaultDark, StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
  args: {style: {minWidth: 500,},},
  decorators: [StoryDecorator({})],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};

export const AuthNavbar: Story = {
  args: {},
  decorators: [
    StoryDecorator({user: {authData: {id: '1',},},}),
  ],
};
