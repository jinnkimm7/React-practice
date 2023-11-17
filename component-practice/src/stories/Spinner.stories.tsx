import { Meta, StoryObj } from '@storybook/react';
import Spinner, { SpinnerProps } from '../components/\bSpinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    loading: { control: 'boolean' },
    size: { control: { type: 'range', min: 4, max: 12, step: 4 } },
    color: {
      control: 'select',
      options: ['fill-blue-600', 'fill-gray-600', 'fill-green-500', 'fill-red-600', 'fill-yellow-400']
    },
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: SpinnerProps) => (
  <Spinner {...args} />
)

Default.args = {
}