export interface DividerProps {
  type: 'horizontal' | 'vertical';
  marginSize?: number;
}

export default function Divider({
  type = 'horizontal',
  marginSize = 0,
  ...props
}: DividerProps) {

  const horizontalClass = `block w-[100%] h-[1px] my-${marginSize}`;
  const verticalClass = `relative top-[-1px] inline-block w-[1px] h-3 align-middle mx-${marginSize}`;

  return (
    <hr
      className={`bg-gray-500 ${type === 'horizontal' ? horizontalClass : verticalClass}`}
      {...props}
    />
  );
}