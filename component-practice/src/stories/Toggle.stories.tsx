import type { Meta, StoryObj } from '@storybook/react';
import Toggle, { ToggleProps } from '../components/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ToggleProps) => (
  <Toggle {...args} />
)

Default.args = {
}