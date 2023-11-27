import { useCallback, useEffect, useRef, useState } from 'react'

export interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

export default function Slider({
  min = 0,
  max = 100,
  step = 0.1,
  defaultValue = 1,
  onChange,
  ...props
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null!);
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  const handleMouseDown = useCallback(() => {
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      const handleOffset = (e as MouseEvent).pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;

      const track = handleOffset / sliderWidth;
      let newValue;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(max, Math.max(min, newValue));
      }
      setValue(newValue);
      onChange && onChange(newValue);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [value, min, max, dragging, sliderRef, handleMouseUp, onChange, step]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div ref={sliderRef} className='relative w-[100%] h-4'>
      <div className='absolute top-2 left-0 w-[100%] h-1 rounded-sm bg-gray-200'></div>
      <div
        style={{ width: `${percentage}%` }}
        className='absolute top-2 left-0 h-1 rounded-sm bg-blue-500'></div>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ left: `${percentage}%` }}
        className='absolute top-[10px] w-3 h-3 rounded-[50%] border-2 border-blue-500 bg-white cursor-pointer -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  );
}