import { useState } from "react";
import CustomButton from "./components/CustomButton";

function App() {
  const colors = ["blue", "red", "yellow"];
  const [colorName, setColorName] = useState("");
  return (
    <div className="App">
      {colors.map((color, index) => {
        return (
          <CustomButton setColorName={setColorName} color={colors[index]} />
        );
      })}
      <h1>The Button Color Was: {colorName}</h1>
    </div>
  );
}

export default App;
