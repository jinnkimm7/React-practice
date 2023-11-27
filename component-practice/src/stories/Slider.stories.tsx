import type { Meta, StoryObj } from '@storybook/react';
import Slider from '../components/Slider';
import Icon from '../components/Icon';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    defaultValue: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    onChange: { control: 'action' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
  <Slider {...args} />
);

Default.args = {
  defaultValue: 1,
  min: 1,
  max: 100,
  step: 0.1
}

export const VolumeController: Story = (args) => (
  <div className='w-[200px] flex items-center justify-between'>
    <Icon name='volume' size='w-8' />
    <Slider {...args} />
    <div className='w-3'></div>
    <Icon name='volume-2' size='w-8' />
  </div>
)

VolumeController.args = {
  defaultValue: 1,
  min: 1,
  max: 100,
  step: 0.1
}