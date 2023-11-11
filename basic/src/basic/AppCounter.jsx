import React, { useState } from 'react';
import Counter from '../components/Counter';

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const handleClickBtn = () => {
    setTotalCount((prev) => prev + 1);
  }

  return (
    <div>
      <span>total count: {totalCount} | {totalCount < 10 ? `❄️` : `🔥`}</span>
      <Counter totalCount={totalCount} handleClickBtn={handleClickBtn} />
      <Counter totalCount={totalCount} handleClickBtn={handleClickBtn} />
      <Counter totalCount={totalCount} handleClickBtn={handleClickBtn} />
    </div>
  );
}

