import React from "react";

import ProgressBar from "./ProgressBar";
class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
    };
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    if (this.state.percentage === 100) return;
    this.setState((prevState) => ({ percentage: prevState.percentage + 20 }));
  }

  render() {
    return (
      <div>
        <h2>A React Progress Bar</h2>
        <ProgressBar percentage={this.state.percentage} />
        <div style={{ marginTop: "20px" }}>
          <button onClick={this.nextStep}>Next Step</button>
        </div>
        <div
          style={{ marginTop: "10px", color: "blue", marginBottom: "15px" }}
          onClick={() =>
            this.setState({
              percentage: 0,
            })
          }
        ></div>
      </div>
    );
  }
}

export default ProgressBarExample;
