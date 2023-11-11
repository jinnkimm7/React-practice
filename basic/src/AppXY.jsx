import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  return (
    <div className='container'
      onMouseMove={(e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        setPosition((prev) => ({ ...prev, y: e.clientY }))
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px` }}
      ></div>
    </div >
  );
}

