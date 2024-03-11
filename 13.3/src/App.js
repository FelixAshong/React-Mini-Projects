import { useEffect, useState } from "react";
import "./styles/App.css";
import Box from "./components/Box";

const colorsArray = ["red", "blue", "yellow", "green", "pink"];
function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(colorsArray[0]);
  const [shape, setShape] = useState("");

  useEffect(() => {
    let counts = counter;
    const interval = setInterval(() => {
      if (counts === 5) {
        counts = 0;
        setCounter(counts);
        setShape("circle");
      }
      setColor(colorsArray[counts]);
      setCounter(counts + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [counter, color]);

  return (
    <div className="App">
      <Box className={shape} color={color} />
    </div>
  );
}

export default App;
