import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { defaultDark, StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import TestAvatarIcon from '@/shared/assets/test/test-avatar.jpg';
import { IProfile } from '@/entities/Profile';

const defaultForm: IProfile = {
  first: 'Alex',
  lastname: 'Nayter',
  age: 32,
  currency: 'USD',
  country: 'Russia',
  city: 'Moscow',
  username: 'AlexNayter',
  avatar: TestAvatarIcon,
};

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  decorators: [StoryDecorator({
    profile: {
      readonly: true,
      isLoading: false,
      error: undefined,
      form: defaultForm,
    },
  })],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {},};

export const Dark: Story = {
  ...defaultDark,
  decorators: [ThemeDecorator('dark')],
};

export const Edit: Story = {
  decorators: [
    StoryDecorator({
      profile: {
        readonly: false,
        form: defaultForm,
      },
    })],
};

export const Loading: Story = {
  decorators: [
    StoryDecorator({
      profile: {
        readonly: true,
        isLoading: true,
      },
    })],
};

export const Error: Story = {
  decorators: [
    StoryDecorator({
      profile: {
        readonly: true,
        error: 'Some error',
      },
    })],
};
