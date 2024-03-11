import React, { Component } from "react";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

export class Card extends Component {
  constructor() {
    super();
    this.state = { data: data };
  }

  HandleChangeToDo(index) {
    const newTodoData = this.state.data.map((item, i) => {
      return i === index
        ? { name: item.name, completed: !item.completed }
        : item;
    });
    this.setState((prevState) => ({ data: newTodoData }));
  }

  render() {
    return (
      <div className="card">
        {this.state.data.map((todo, index) => {
          return (
            <div
              key={index * Math.random()}
              onClick={() => this.HandleChangeToDo(index)}
              className="todo-item"
            >
              <span className={todo.completed ? 'deleted': ''}>{todo.name}</span>
              <span>{todo.completed ? "X" : "V"}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
