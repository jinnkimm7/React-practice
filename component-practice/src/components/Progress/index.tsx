export interface ProgressProps {
  value: number;
}

export default function Progress({
  value = 50,
  ...props
}: ProgressProps) {

  return (
    <div className='relative w-[100%] h-4' {...props}>
      <div className='absolute top-2 left-0 w-[100%] h-1 rounded-sm bg-gray-200'></div>
      <div
        style={{ width: `${value}%` }}
        className='animate-pulse absolute top-2 left-0 h-1 rounded-sm bg-blue-500'></div>
    </div>
  );
}