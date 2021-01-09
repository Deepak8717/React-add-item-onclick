import React from "react";

class Select extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tech: "select",
    };
  }
  handleChange(e) {
    this.setState({
      tech: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <select
          id="lang"
          onChange={this.handleChange.bind(this)}
          value={this.state.tech}
        >
          <option value="select">Select a technology</option>
          <option value="Angular">Angular</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="React">React</option>
        </select>

        <h2>{this.state.tech}</h2>
      </div>
    );
  }
}

export default Select;
