import React, { useRef } from "react";

const Form = ({ setToDoList, toDoList }) => {
  const inputRef = useRef();

  const handleAddToDo = () => {
    const value = inputRef.current.value;
    if (!value.length) {
      // no input detected
      return;
    }
    setToDoList([...toDoList, { toDo: value, isDone: false, id: Math.random() }]);
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
