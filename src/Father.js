import React from "react";

export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      surname: "O'" + props.surname,
    };
  }
  render() {
    return (
      <div>
        <span>Name:</span>
        <span>{this.state.name}</span>
        <span>Surname:</span>
        <span>{this.state.surname}</span>
        <p>Here's my children</p>
        <ul>{this.props.renderMyChildren(this.state)}</ul>
      </div>
    );
  }
}
