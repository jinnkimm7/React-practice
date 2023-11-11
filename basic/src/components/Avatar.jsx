import React from 'react';
import '../App.css';

export default function Avatar({ src, isNew }) {
  return (
    <div>
      {
        isNew &&
        <span>New</span>
      }
      <img
        className='photo'
        src={src}
        alt='avatar'
      />
    </div>
  );
}

