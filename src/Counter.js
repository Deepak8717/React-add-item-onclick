import React from "react";
const { useState } = React;

const Counter = () => {
  let [count, changeCount] = useState(0);
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={() => changeCount(count - 1)}>
        <span>-1</span>
      </button>
      <button onClick={() => changeCount(count + 1)}>
        <span>+1</span>
      </button>
      <button onClick={() => changeCount((count = 0))}>
        <span>Reset</span>
      </button>
    </div>
  );
};

export default Counter;
