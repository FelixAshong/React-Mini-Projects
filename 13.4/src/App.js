import { useEffect, useState } from "react";
import "./styles/App.css";
import Box from "./components/Box";

function App() {
  const [isSpinner, setIsSpinner] = useState(false);
  const [countDown, setCountDown] = useState(20);
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    let deg = degree;
    let count = countDown;
    setTimeout(() => {
      setIsSpinner(true);
      setInterval(() => {
        deg += 90;
        setDegree(deg);
      }, 500);
    }, 1000);
    setInterval(() => {
      if (count < 0) {
        setIsSpinner(false);
        return;
      }
      setCountDown(count);
      count--;
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h2>{countDown}</h2>
      {isSpinner && <Box className={"circle"} degree={degree} />}
    </div>
  );
}

export default App;
