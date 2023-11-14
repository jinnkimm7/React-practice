import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

const filters = ['ALL', 'DONE', 'LEFT'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className='mx-auto my-0'>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
