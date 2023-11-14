import React from 'react';

export default function ListItem({ todo, onDelete, onUpdate }) {
  const { text, checked } = todo;

  const handleDelete = () => {
    onDelete(todo);
  }

  const handleUpdate = (e) => {
    const checked = e.target.checked ? 'true' : 'false';
    onUpdate({ ...todo, checked });
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked === 'true'}
        onChange={handleUpdate}
      />
      <span>{text}</span>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
}

