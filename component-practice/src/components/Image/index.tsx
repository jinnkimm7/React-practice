export interface ImageProps {
  src: string;
  alt: string | undefined;
  width: number;
  height: number;
  mode?: 'cover' | 'fill' | 'contain';
  block?: boolean;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
}

export default function Image({
  src,
  alt,
  width = 200,
  height = 200,
  mode = 'cover',
  block = false,
  lazy = false,
  threshold = 0.5,
  placeholder,
  ...props
}: ImageProps) {
  const imgSize = `w-[${width}px] h-[${height}px]`;
  const imgMode = mode;
  return (
    <img
      src={src}
      alt={alt}
      className={`${imgSize} ${imgMode} ${block ? 'block' : 'inline-block'}`}
      {...props}
    />
  );
}

