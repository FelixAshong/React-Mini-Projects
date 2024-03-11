import React from "react";
import { useCounter } from "../hooks/use-counter";

const Counter = () => {
  const { counter, add, sub, multiply, divide } = useCounter(0);
  return (
    <div>
      <h2>{counter}</h2>
      <div className="actions">
        <button onClick={() => add()}>+</button>
        <button onClick={() => sub()}>-</button>
        <button onClick={() => multiply()}>Multiply X2</button>
        <button onClick={() => divide()}>Divide /2</button>
      </div>
    </div>
  );
};

export default Counter;
