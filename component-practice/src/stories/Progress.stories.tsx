import type { Meta, StoryObj } from '@storybook/react';
import Progress from '../components/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
  <Progress {...args} />
);

Default.args = {
  value: 50,
}