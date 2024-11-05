import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { defaultDark, ThemeDecorator } from '@/shared/config/storybook';
import TestAvatarIcon from '@/shared/assets/test/test-avatar.jpg';

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    data: {
      first: 'John',
      lastname: 'Doe',
      age: 22,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'admin',
      avatar: TestAvatarIcon,
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {

  },
};

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const Readonly: Story = {
  args: {
    isReadOnly: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'Error',
  },
};
