import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrementBtn = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrementBtn}>Increment</button>
      <label>: {count}</label>
    </div>
  );
};

export default Counter;
