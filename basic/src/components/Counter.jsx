import React, { useState } from 'react';

export default function Counter({ totalCount, handleClickBtn }) {
  const [count, setCount] = useState(0);

  const handleIncreaseBtn = () => {
    // 클로저: 기존에 스냅샷된 count의 값을 가져오기 때문에 8번째줄 코드를 여러번 실행해도 count+1만 실행된다.
    // setCount(count + 1);

    // 콜백함수로 set하는 것이 더욱 안전하다!
    setCount((prev) => prev + 1);
    handleClickBtn();
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  }

  return (
    <div>
      <span>{count} / {totalCount}</span>
      <button onClick={handleIncreaseBtn}>+</button>
    </div>
  );
}

