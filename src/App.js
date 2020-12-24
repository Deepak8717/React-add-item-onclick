import React from "react";
import { render } from "react-dom";

const styles = {
  fontSize: 48,
  background: "red",
  margin: "40px",
  padding: "40 40",
  borderRadius: "4px",
};

class App extends React.Component {
  state = {
    isToggleOn: true,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  render() {
    return (
      <button style={styles} onClick={this.handleClick}>
        {this.state.isToggleOn ? "On" : "Off"}
      </button>
    );
  }
}

export default App;
