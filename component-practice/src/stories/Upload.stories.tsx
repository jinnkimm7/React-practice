import type { Meta, StoryObj } from '@storybook/react';
import Upload, { UploadProps } from '../components/Upload';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  argTypes: {
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: UploadProps) => (
  <Upload {...args} />
);

Default.args = {
}