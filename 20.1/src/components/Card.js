import React, { Component } from "react";

export class Card extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handelUpdateCounter(added) {
    const newNumber = this.state.counter + added;
    if (newNumber > 10 || newNumber < -10) {
      return;
    }
    this.setState((prevState) => ({ counter: prevState.counter + added }));
  }

  classNameNumber(number) {
    if (number === 0) {
      return "";
    } else if (number > 0) {
      return "green-color";
    } else {
      return "red-color";
    }
  }

  render() {
    return (
      <div className="card">
        <button
          onClick={() => {
            this.handelUpdateCounter(1);
          }}
        >
          +
        </button>
        <span className={this.classNameNumber(this.state.counter)}>
          {this.state.counter}
        </span>
        <button
          onClick={() => {
            this.handelUpdateCounter(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Card;
