import React, { Component } from "react";

export class Box extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
        <div className="slider" style={{ 'height': 30 * this.props.size + "px" }}>
        <div className="box" style={{ 'height': 30 * this.props.size + "px" ,'width': 30 * this.props.size + "px", 'left': this.props.left+'px'}}></div>
      </div>
    );
  }
}

export default Box;
