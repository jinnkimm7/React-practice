import type { Meta, StoryObj } from '@storybook/react';
import Image, { ImageProps } from '../components/Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'string' },
    width: { control: { type: 'range', min: 100, max: 800 } },
    height: { control: { type: 'range', min: 100, max: 800 } },
    mode: { control: 'inline-radio' },
    block: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ImageProps) => (
  <>
    <Image {...args} />
    <Image {...args} />
  </>
)

Default.args = {
  src: 'https://picsum.photos/200',
}