import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/shared/ui/Text';
import { Card } from './Card';
import { defaultDark, defaultPurple, ThemeDecorator } from '@/shared/config/storybook';

type CardPropsAndCustomArgs = React.ComponentProps<typeof Card> & { title?: string; text?: string };

const meta = {
  title: 'Shared/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Test title',
    text: 'Test text',
  },
  render: ({ title, text, ...args }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Card {...args}>
      <Text title={title} text={text} />
    </Card>
  ),
} satisfies Meta<CardPropsAndCustomArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: { title: 'Light theme title' } };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const Purple: Story = {
  ...defaultPurple,
  args: {},
  decorators: [ThemeDecorator('purple')],
};
