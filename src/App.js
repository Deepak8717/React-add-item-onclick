import React from "react";
import Popup from "./Popup";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopUp() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className="app">
        <h1>hihi</h1>
        <button onClick={this.togglePopUp.bind(this)}>Show Popup</button>
        <button
          onClick={() => {
            alert("Woo?");
          }}
        >
          try me when popup is open
        </button>
        <p>
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
          Ganz viel inhalt.
          <br />
        </p>
        {this.state.showPopup ? (
          <Popup text="close me" closePopup={this.togglePopUp.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default App;
