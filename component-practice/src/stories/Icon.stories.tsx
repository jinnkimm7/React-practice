import type { Meta, StoryObj } from '@storybook/react';
import Icon, { IconProps } from '../components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'text' },
    size: { control: 'inline-radio' },
    strokeWidth: { control: 'inline-radio' },
    color: { control: 'color' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IconProps) => (
  <Icon {...args} />
);

Default.args = {
}