import type { Meta, StoryObj } from '@storybook/react';
import Progress, { ProgressProps } from '../components/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ProgressProps) => (
  <Progress {...args} />
);

Default.args = {
  value: 50,
}