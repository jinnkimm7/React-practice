export interface IconProps {
  name: string;
  size: 'w-4' | 'w-8' | 'w-12';
  strokeWidth: 1 | 2 | 3;
  color: string;
}

export default function Icon({
  name,
  size = 'w-4',
  strokeWidth = 2,
  color = '#000000',
  ...props
}: IconProps) {
  const iconClass = `${size}`;
  const icon = require('feather-icons').icons[name];
  const svg = icon ? icon.toSvg({
    'stroke-width': strokeWidth,
    'color': color,
  }) : '';
  const base64 = btoa(svg);
  return (
    <i
      className='inline-block'
      {...props}
    >
      <img
        className={iconClass}
        src={`data:image/svg+xml;base64,${base64}`}
        alt={name}
      />
    </i>
  );
}