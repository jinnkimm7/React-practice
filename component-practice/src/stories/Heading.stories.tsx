import type { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from '../components/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: { control: 'select' },
    strong: { control: 'boolean' },
    color: { control: 'select' },
    size: { control: 'select' },
    underline: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: HeadingProps) => (
  <Heading {...args}>
    Heading
  </Heading>
);

Default.args = {
}