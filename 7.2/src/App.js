import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const checkboxesTexts = [
    "I read the terms of the app",
    "I accept the terms of the app",
    "I want to get weekly news letter",
    "I want to get sales and offers",
  ];
  return (
    <div className="App">
      <h2>Checkboxes:</h2>
      {checkboxesTexts.map((text, index) => {
        return <Checkbox key={index} index={index+1} text={text} checked={index > 1}/>;
      })}
    </div>
  );
}

export default App;
