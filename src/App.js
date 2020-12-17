import React, { Component } from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ProgressBar = (props) => (
  <div
    style={{
      display: "block",
      width: `${props.percentage}%`,
      height: 20,
      background: "#ccc",
    }}
  />
);

class App extends Component {
  state = {
    percentage: 0,
  };
  componentDidMount() {
    setInterval(() => {
      let nextPercent = this.state.percentage + 1;
      if (nextPercent >= 100) {
        nextPercent = 0;
      }
      this.setState({ percentage: nextPercent });
    }, 1000);
  }
  render() {
    return (
      <div style={styles}>
        <h2>Progress bar</h2>
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}
export default App;
