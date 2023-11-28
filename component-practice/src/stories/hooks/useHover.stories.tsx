import type { Meta, StoryObj } from '@storybook/react';
import { useHover } from '../../hooks/useHover';

const meta: Meta<typeof useHover> = {
  title: 'Hooks/useHover',
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => {
  const [ref, hover] = useHover();
  return (
    <>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className='w-[100px] h-[100px] bg-black'></div>
      {hover ? 'true' : 'false'}
    </>
  )
};

Default.args = {
}