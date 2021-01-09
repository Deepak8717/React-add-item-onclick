import React from "react";
import Counter from "./Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
