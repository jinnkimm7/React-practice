import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className='flex justify-between w-[300px]'>
      <ul>
        {
          filters.map((filter, index) => (
            <li
              key={index}
            ><button onClick={() => onFilterChange(filter)}>{filter}</button></li>
          ))
        }
      </ul>
    </header>
  );
}