import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const imgSrc = 'data:image/jpeg;base64,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';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
  args: { src: imgSrc },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Normal200: Story = {
  args: {
    size: 200,
  },
};

export const Normal500: Story = {
  args: {
    size: 500,
  },
};

export const Square500: Story = {
  args: {
    size: 500,
    style: {
      borderRadius: 0,
    },
  },
};