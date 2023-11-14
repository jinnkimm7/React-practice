import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onAdd }) {
  const [text, setText] = useState('');

  const handleChangeInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), text: text, checked: false };
    if (text.length === 0) return;
    onAdd(newTodo);
    setText('');
  }

  return (
    <form onSubmit={handleSubmitBtn}>
      <input placeholder='Add To do' value={text} onChange={handleChangeInput} />
      <button>Add</button>
    </form>
  );
}

