import React, { useRef } from "react";
const UPDATE_TODO = "UPDATE_TODO";


const Form = ({ dispatch}) => {
  const inputRef = useRef();

  const handleAddToDo = () => {
    const value = inputRef.current.value;
    if (!value.length) {
      // no input detected
      return;
    }
    const newToDoItem = { toDo: value, isDone: false, id: Math.random() };
    dispatch({ type: UPDATE_TODO, payload: newToDoItem });
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddToDo();
      }}
    >
      <h3>Add Todo:</h3>
      <input ref={inputRef} type="text" />
      <input type="submit" />
    </form>
  );
};

export default Form;
