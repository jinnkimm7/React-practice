import { useCallback, useEffect, useRef, useState } from 'react'

export const useHover = () => {
  const [state, setState] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseOver = useCallback(() => setState(true), []);
  const hanldeMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', hanldeMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', hanldeMouseOut);
    }
  }, [ref, handleMouseOver, hanldeMouseOut]);

  return [ref, state];
}