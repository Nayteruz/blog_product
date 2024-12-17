import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { defaultDark, ThemeDecorator } from '../../../config/storybook';

const genetateChildren = (count: number) => {
  const children = [];
  for (let i = 0; i < count; i += 1) {
    children.push(
      <div
        key={i}
        style={{
          color: 'white',
          background: 'indigo',
          padding: 10,
        }}
      >
        Children {i + 1}
      </div>,
    );
  }
  return children;
};

const meta = {
  title: 'Shared/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    gap: '16',
    style: { minHeight: 100 },
    children: genetateChildren(5),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const JustifyStart: Story = { args: { justify: 'start' } };
export const JustifyCenter: Story = { args: { justify: 'center' } };
export const JustifyEnd: Story = { args: { justify: 'end' } };
export const JustifyBetween: Story = { args: { justify: 'space-between' } };
export const JustifyAround: Story = { args: { justify: 'around' } };
export const JustifyEvenly: Story = { args: { justify: 'evenly' } };

export const AlignStretch: Story = { args: { align: 'stretch' } };
export const AlignCenter: Story = { args: { align: 'center' } };
export const AlignStart: Story = { args: { align: 'start' } };
export const AlignEnd: Story = { args: { align: 'end' } };

export const DirectionRow: Story = { args: { direction: 'row' } };
export const DirectionColumn: Story = { args: { direction: 'column' } };

export const Gap0: Story = { args: { gap: '0' } };
export const Gap4: Story = { args: { gap: '4' } };
export const Gap8: Story = { args: { gap: '8' } };
export const Gap16: Story = { args: { gap: '16' } };
export const Gap32: Story = { args: { gap: '32' } };
