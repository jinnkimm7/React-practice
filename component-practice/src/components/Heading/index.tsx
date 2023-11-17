import { PropsWithChildren } from 'react';

export interface HeadingProps extends PropsWithChildren {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  strong?: boolean;
  color?: 'text-black' | 'text-red-500' | 'text-blue-500';
  size?: 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
  underline?: boolean;
}

export default function Heading({
  children,
  level = 'h1',
  strong = false,
  color = 'text-black',
  size = 'text-base',
  underline = false,
  ...props
}: HeadingProps) {
  const HeadingLevel = level;
  const fontBold = strong ? 'font-bold' : '';
  const fontColor = color;
  const fontSize = size;
  const fontUnderline = underline ? 'underline' : '';
  return (
    <HeadingLevel
      className={`${fontBold} ${fontColor} ${fontSize} ${fontUnderline}`}
      {...props}
    >
      {children}
    </HeadingLevel>
  );
}