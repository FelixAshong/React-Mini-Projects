import { useState } from "react";

export const useCounter = (initValue) => {
  const [counter, setCounter] = useState(initValue);

  const add = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };
  const multiply = () => {
    setCounter(counter * 2);
  };
  const divide = () => {
    if (counter < 0.11 && counter > -0.11) {
      setCounter(0);
      return;
    }
    setCounter(counter % 2 ? (counter / 2).toFixed(1) : counter / 2);
  };

  return { counter, add, sub, multiply, divide };
};
