import { useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import ToppingData from "./components/ToppingData";
import OrderedItem from "./components/OrderedItem";
function App() {
  const [message, setMessage] = useState("");
  const [toppingsAdded, setToppingsAdded] = useState([]);

  const turtlesData = Data;
  const toppingData = ToppingData;

  const getTopping = (name) =>
    toppingData.filter((topping) => topping.name === name)[0];

  const handlePressedTopping = (toppingName) => {
    let flag = false;

    if (toppingsAdded.length >= 5) {
      setMessage("reached max topping amount");
      return;
    }

    toppingsAdded.forEach((topping) => {
      if (topping.name === toppingName) {
        flag = true;
        return;
      }
    });

    if (flag) {
      setMessage("Already ordered " + toppingName);
      return;
    }

    setToppingsAdded([...toppingsAdded, getTopping(toppingName)]);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Ninja Turtles</h1>
      <h2>Order pizza with the turtles</h2>

      <div className="cards-container">
        {turtlesData.map((turtle, index) => {
          return (
            <Card
              key={turtle.id}
              toppingClicked={handlePressedTopping}
              turtle={turtle}
            />
          );
        })}
      </div>

      <section className="order-container">
        <h2>My Order:</h2>
        <OrderedItem toppings={toppingsAdded} />
      </section>
      
      <h3 className="error-message">{message}</h3>
    </div>
  );
}

export default App;
