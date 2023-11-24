import type { Meta, StoryObj } from '@storybook/react';

import Select, { SelectProps } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    block: { control: 'boolean' },
    requried: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disable: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: SelectProps) => (
  <Select
    {...args}
  />
);

Default.args = {
  data: ['item1', 'item2', 'item3', 'item4', 'item5'],
}