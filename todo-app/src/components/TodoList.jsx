import React, { useState } from 'react';
import ListItem from './ListItem';
import Form from './Form';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: '강의보기', checked: 'false' },
    { id: 2, text: '장보기', checked: 'false' },
    { id: 3, text: '티비보기', checked: 'false' },
  ]);

  const handleAdd = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDelete = (deletedTodo) => {
    setTodos(todos.filter(todo => todo.id !== deletedTodo.id));
  };
  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id) ? updatedTodo : todo));
  };

  const filteredItem = getFilteredItem(todos, filter);

  return (
    <>
      <ul>
        {
          filteredItem.map(todo => (
            <ListItem
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        }
      </ul>
      <Form onAdd={handleAdd} />
    </>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === 'ALL') {
    return todos;
  } else if (filter === 'DONE') {
    return todos.filter(todo => todo.checked === 'true');
  } else if (filter === 'LEFT') {
    return todos.filter(todo => todo.checked === 'false');
  }
}