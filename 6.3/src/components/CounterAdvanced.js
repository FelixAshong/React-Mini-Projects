import { useState } from "react";
import "./style.css";

const CounterAdvanced = () => {
  const [count, setCount] = useState(0);
  const [colorClass, setColorClass] = useState("");

  const handleCounter = (direction) => {
    let currentCount = count;

    currentCount += direction === "up" ? 1 : -1;

    if (currentCount > 10 || currentCount < -10) return;

    setCount(currentCount);

    setColorClass(() => {
      if (currentCount === 0) return "black-font";
      return currentCount < 0 ? "red-font" : "green-font";
    });
  };

  return (
    <div className="game-place">
      <button
        onClick={() => {
          handleCounter("down");
        }}
      >
        Decrease
      </button>
      <h3 className={colorClass}>{count}</h3>
      <button
        onClick={() => {
          handleCounter("up");
        }}
      >
        Increase
      </button>
    </div>
  );
};
export default CounterAdvanced;
