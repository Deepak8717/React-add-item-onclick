import React from "react";
import { render } from "react-dom";
import "./App.css";

class App extends React.Component {
  state = {
    color: "red",
  };

  toggleClass = () => {
    this.setState({ color: this.state.color === "red" ? "blue" : "red" });
  };

  render() {
    return (
      <div>
        <p className={`${this.state.color}`}>click toggle to change colors</p>
        <button onClick={this.toggleClass}>toggle</button>
      </div>
    );
  }
}

export default App;
