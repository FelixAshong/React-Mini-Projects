import { useEffect, useState } from "react";
import "./styles/App.css";
import FavColor from './components/FavColor'

function App() {
  const [favColor, setFavColor] = useState("#fe3c3c");

  useEffect(() => {
   const timeOut= setTimeout(() => {
      setFavColor("black");
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <div className="App">
    <FavColor color={favColor}/>
  </div>;
}

export default App;
