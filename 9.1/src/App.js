import { useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Names from "./components/Names";

const MAX_YEAR_OF_BIRTH = 1990;
function App() {
  // 1. Export the data array to the relevant component.
  // 2. Create utility functions that will massage the data.
  // - Create a function that returns an array of all the
  // names from the object.
  // - Create a function that returns all the objects that are
  // born before 1990.
  // 3. Save the modified data to the state.
  // 4. Create a Name component that you will pass via props the
  // names and print them on the screen.
  // 5. Create a Card component that you will pass via props the
  // objects before 1990 and print them on the screen.
  // - which includes their name, birthday, favorite meats,
  // and favorite fish foods.
  const getNames = (data) => data.map((person) => person.name);
  const getOlderPeople = (data) => {
    const peopleArray = data.filter((person) => {
      const birthdayArray = person.birthday.split("-");
      return birthdayArray[birthdayArray.length - 1] < MAX_YEAR_OF_BIRTH;
    });
    return peopleArray;
  };

  const [names, setNames] = useState(getNames(Data));
  const [olderPeople, setOlderPeople] = useState(getOlderPeople(Data));

  return (
    <div className="App">
      <Names names={names} />
      <div className="cards-container">
        {olderPeople.map((person, index) => {
          return <Card key={1000 + index} person={person} />;
        })}
      </div>
    </div>
  );
}

export default App;
