import { useState, useEffect } from "react";
import Box from "./components/Box";
import "./styles/App.css";

function App() {
  const [isDisappear, setIsDisappear] = useState(false);
  const [left, setLeft] = useState(-100);
  useEffect(() => {
    setLeft(0);
    setTimeout(()=>{
      setIsDisappear(true);
    },5000)
  }, []);

  return (
    <div className="App">
      {!isDisappear && (
        <>
          <Box size={2} left={left} />
          <Box size={3} left={left} />
          <Box size={1} left={left} />
        </>
      )}
    </div>
  );
}

export default App;
