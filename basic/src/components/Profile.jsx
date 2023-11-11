import React from 'react';
import '../App.css';
import Avatar from './Avatar';

export default function Profile({ name, src, position, isNew }) {
  return (
    <div className='profile'>
      <Avatar src={src} isNew={isNew} />
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}

