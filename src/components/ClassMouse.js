import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);
    // Initial state to store mouse co-ordinates
    this.state = {
      x: 0,
      y: 0,
    };
  }
  // This function updates state with current mouse co-ordinates
  logMousePosition = e => {
    this.setState({
       x: e.clientX, // horizontal mouse position
       y: e.clientY // vertical mouse position
      });
  }
  // Runs when the component is first mounted to the DOM
  componentDidMount() {
    // Adding event listener to track mouse movement
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount(){
    window.removeEventListener("mousemove",this.logMousePosition);
  }
  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
