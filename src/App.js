import React, { Component } from "react";
import { render } from "react-dom";

import Background from "./Background";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Background />
      </div>
    );
  }
}
