import React from "react";

import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default class App extends React.Component {
  state = {
    people: [],
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    this.setState({
      people: data.results,
    });
  };
  render() {
    const { people } = this.state;
    return (
      <div style={styles}>
        <button onClick={this.loadData}>Load Data</button>
        {people.map((x) => (
          <div key={x.name.first}>{x.name.first}</div>
        ))}
      </div>
    );
  }
}
