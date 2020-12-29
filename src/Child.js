import React from "react";

export default class Child extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <span>Name:</span>
          <span>{this.props.name};</span>
          <span>Surname:</span>
          <span>{this.props.surname}</span>
        </p>
      </React.Fragment>
    );
  }
}
