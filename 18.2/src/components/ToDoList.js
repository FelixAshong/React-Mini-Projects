import React from "react";
const UPDATE_TODO = "UPDATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TASK = "CHANGE_TASK";


const ToDoList = ({ toDoList, dispatch }) => {

  const handleDelete = (item) => {
    if (!item) {
      return;
    }
     dispatch({ type: REMOVE_TODO, payload: item.id });
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
    dispatch(({ type: CHANGE_TASK, payload: newToDos }));
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
