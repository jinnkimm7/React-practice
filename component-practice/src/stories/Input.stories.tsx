import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    block: { control: 'boolean' },
    invalid: { control: 'boolean' },
    requried: { control: 'boolean' },
    disable: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: InputProps) => (
  <Input {...args} />
);

Default.args = {
}