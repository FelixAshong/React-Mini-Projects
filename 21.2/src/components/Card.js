import React, { Component } from "react";
import axios from "axios";

export class Card extends Component {
  constructor() {
    super();
    this.state = { listOfCountries: [], currentInput: "" };
    this.timerId = null;
  }
  async getData(input) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${input}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  handleInputChange(value) {
    this.setState({ currentInput: value });
  }

  async componentDidUpdate(prevProps, prevState) {
    clearTimeout(this.timerId);

    if (this.state.currentInput === prevState.currentInput) {
      return;
    }
    this.timerId = setTimeout(async () => {
      try {
        console.log("imHere");
        const data = await this.getData(this.state.currentInput);
        this.setState({ listOfCountries: data });
      } catch (error) {}
    }, 500);
  }

  render() {
    return (
      <>
        <input
          value={this.state.currentInput}
          onChange={(e) => this.handleInputChange(e.target.value)}
          type="text"
        />
        <div className="names-container">
          {this.state.listOfCountries && this.state.listOfCountries.map((item, index) => {
            return <p key={index*Math.random()}>{item.name.common}</p>;
          })}
        </div>
      </>
    );
  }
}
export default Card;
