import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    rows: [{}],
  };
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input type="text" name="name" />
                      </td>
                      <td>
                        <input type="text" name="mobile" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow}>Add Row</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
