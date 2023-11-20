import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    size: { control: 'select' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
  <>
    <Text {...args} >
      텍스트
    </Text>
    <Text {...args} >
      텍스트
    </Text>
  </>
)

Default.args = {
}