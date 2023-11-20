import React, { PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
  block?: boolean;
  paragraph?: boolean;
  size?: 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl';
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: 'text-black' | 'text-red-500' | 'text-blue-500';
}

export default function Text({
  children,
  block = false,
  paragraph = false,
  size = 'text-base',
  strong = false,
  underline = false,
  delete: del = false,
  color = 'text-black',
  ...props
}: TextProps) {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';

  const textClass = `
  ${size} 
  ${strong ? 'font-bold' : ''} 
  ${underline ? 'underline' : ''}
  ${color}
  `;

  if (del) {
    children = <del>{children}</del>
  }
  return (
    <Tag
      className={textClass}
      {...props}
    >
      {children}
    </Tag >
  );
}

