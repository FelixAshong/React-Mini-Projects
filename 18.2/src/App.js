import { useEffect, useReducer, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./styles/App.css";
const UPDATE_TODO = "UPDATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TASK = "CHANGE_TASK";

function reducer(state, action) {
  let newToDoList = [];
  switch (action.type) {
    case UPDATE_TODO: {
      newToDoList = [...state, action.payload];
      break;
    }
    case REMOVE_TODO: {
      newToDoList = state.filter((item) => item.id !== action.payload);
      break;
    }
    case CHANGE_TASK: {
      newToDoList = action.payload;
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("toDoList", JSON.stringify(newToDoList));
  return newToDoList;
}

function App() {
  const [toDoList, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("toDoList") || "[]")
  );

  useEffect(() => {
    if (toDoList) return;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="App">
      <h1>ToDo list App:</h1>
      <Form dispatch={dispatch} />
      <ToDoList dispatch={dispatch} toDoList={toDoList} />
    </div>
  );
}

export default App;
