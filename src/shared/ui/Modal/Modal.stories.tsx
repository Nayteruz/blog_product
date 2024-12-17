import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { defaultDark, ThemeDecorator } from '../../config/storybook';

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    container: {
      control: 'text',
      description: 'HTML or null Container for modal',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in vel eos assumenda architecto deserunt illum nam culpa nihil eligendi, molestias voluptas ipsum consequuntur unde tenetur repudiandae beatae consectetur veniam?',
    // @ts-ignore
    container: null,
    isOpen: true,
    style: {
      position: 'static',
      minHeight: '500px',
      display: 'grid',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalPrimary: Story = { args: {} };

export const DarkPrimary: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};
