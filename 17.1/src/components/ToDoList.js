import React from "react";

const ToDoList = ({ toDoList, setToDoList }) => {
  const handleDelete = (item) => {
    if (!item) {
      return;
    }
    const newToDos = toDoList.filter((toDoItem) => toDoItem.id !== item.id);
    setToDoList(newToDos);
  };

  const changeChecked = (item) => {
    if (!item) {
      return;
    }
    const newToDos = toDoList.map((toDoItem) => {
      if (toDoItem.id === item.id) {
        toDoItem.isDone = !item.isDone;
      }
      return toDoItem;
    });
    setToDoList(newToDos);
  };

  return (
    <div className="todo-container">
      {toDoList.map((todo) => {
        return (
          <div key={todo.id} className="todo-line">
            <div onClick={() => changeChecked(todo)} className="change-btn">
              <span>{todo.isDone ? "V" : "X"}</span>
              <span>{todo.toDo}</span>
            </div>
            <button
              onClick={() => {
                handleDelete(todo);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
