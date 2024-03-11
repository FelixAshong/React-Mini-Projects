import { useState } from "react";
import "./style.css";

const BoxGame = () => {
  const [hidingClass, setHidingClass] = useState("");
  const handleBoxClass = () => {
    if (hidingClass === "") {
      setHidingClass("hideBox");
    } else setHidingClass("");
  };

  return (
    <div className="game-place">
      <button onClick={handleBoxClass}>Show/Hide</button>
      <div className={"box " + hidingClass}></div>
    </div>
  );
};
export default BoxGame;
