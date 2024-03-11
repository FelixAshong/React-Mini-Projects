import { useEffect, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./styles/App.css";

function App() {

  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem("toDoList") || []));

  useEffect(() => {
    if (toDoList === null) return;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="App">
      <h1>ToDo list App:</h1>
      <Form setToDoList={setToDoList} toDoList={toDoList} />
      <ToDoList setToDoList={setToDoList} toDoList={toDoList} />
    </div>
  );
}

export default App;
