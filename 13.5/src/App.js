import { useEffect, useState, useRef } from "react";
import "./styles/App.css";

function App() {
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus()
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="App">
      <h2>This is focused</h2>
      <input ref={inputElement} type="text" />
    </div>
  );
}

export default App;
