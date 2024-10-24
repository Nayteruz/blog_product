import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { defaultDark, StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoryDecorator({})],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};

export const WithData: Story = {
  args: {},
  decorators: [
    StoryDecorator({
      loginForm: {
        username: '123',
        password: '123',
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoryDecorator({
      loginForm: {
        error: 'Incorrect username or password',
      },
    }),
  ],
};

export const WithLoading: Story = {
  args: {},
  decorators: [
    StoryDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
