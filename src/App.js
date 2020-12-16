import React from "react";
import data from "./data";
import "./App.css";

class App extends React.Component {
  state = {
    dishes: data.dishes,
    dishIndex: 0,
  };

  prev = () => {
    this.setState((prevState) => {
      return {
        dishIndex: prevState.dishIndex - 1,
      };
    });
  };
  next = () => {
    this.setState((prevState) => {
      return {
        dishIndex: prevState.dishIndex + 1,
      };
    });
  };
  render() {
    const { dishIndex, dishes } = this.state;
    const rowStyle = {
      transform: `translateX(-${dishIndex * (100 / dishes.length)}%)`,
    };
    return (
      <div className="App">
        <div className="wrapper">
          <div className="row" style={rowStyle}>
            {dishes.map((dish) => (
              <div className="slide" key={dish.index}>
                <img src={dish.url} alt="A Dish" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={this.prev} disabled={dishIndex === 0}>
          Prev
        </button>
        <button onClick={this.next} disabled={dishIndex === dishes.length - 1}>
          Next
        </button>
      </div>
    );
  }
}

export default App;
