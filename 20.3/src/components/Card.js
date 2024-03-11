import React, { Component } from "react";

export class Card extends Component {
  constructor() {
    super();
    this.state = { sec: 3600, min: 60, hr: 1 };
  }

  HandleChange(type, number) {
    let [newSec, newMin, newHr] = [0, 0, 0];

    switch (type) {
      case "sec":
        newSec = number;
        newMin = number / 60;
        newHr = number / 3600;
        break;

      case "min":
        newSec = number * 60;
        newMin = number;
        newHr = number / 60;
        break;

      case "hr":
        newSec = number * 3600;
        newMin = number * 60;
        newHr = number;
        break;
      default:
        break;
    }
    this.setState((prevState) => ({ sec: newSec, min: newMin, hr: newHr }));
  }

  render() {
    return (
      <div className="card">
        <input
          value={this.state.sec}
          onChange={(e) => this.HandleChange("sec", e.target.value)}
          type="text"
        />
        <input
          value={this.state.min}
          onChange={(e) => this.HandleChange("min", e.target.value)}
          type="text"
        />
        <input
          value={this.state.hr}
          onChange={(e) => this.HandleChange("hr", e.target.value)}
          type="text"
        />
      </div>
    );
  }
}

export default Card;
