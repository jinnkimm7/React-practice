import type { Meta, StoryObj } from '@storybook/react';
import Divider, { DividerProps } from '../components/Divider';
import Text from '../components/Text';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    type: { control: 'inline-radio' },
    marginSize: { control: { type: 'range', min: 0, max: 10 } }
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = (args: DividerProps) => (
  <>
    <Text>Upper</Text>
    <Divider {...args} />
    <Text>Lower</Text>
  </>
);

Horizontal.args = {
  type: 'horizontal',
}

export const Vertical: Story = (args: DividerProps) => (
  <>
    <Text>Left</Text>
    <Divider {...args} />
    <Text>Right</Text>
  </>
)

Vertical.args = {
  type: 'vertical',
}