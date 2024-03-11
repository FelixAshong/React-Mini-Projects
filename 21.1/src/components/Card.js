import React, { Component } from "react";
import Box from "./Box";

export class Card extends Component {
  constructor() {
    super();
    this.state = { left: -100, appear: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prev) => ({ left: 0 }));
    }, 20);
    setTimeout(() => {
      this.setState((prev) => ({ appear: false }));
    }, 5030);
  }

  render() {
    return (
      <>
        {this.state.appear && <Box size={3} left={this.state.left} />}
        {this.state.appear && <Box size={1} left={this.state.left} />}
        {this.state.appear && <Box size={2} left={this.state.left} />}
      </>
    );
  }
}

export default Card;
