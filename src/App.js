import React from "react";
import { render } from "react-dom";
import Hello from "./Components/Hello";
import Father from "./Father";
import Child from "./Child";

const App = () => (
  <div>
    <Hello name="Deepak" />
    <h2>Props and state</h2>
    <div>
      <Father
        name={"Jesus"}
        surname={"OnlyJesus"}
        renderMyChildren={({ surname, name }) => {
          return (
            <React.Fragment>
              <Child name={"Pork"} surname={surname} />
              <Child name={"Beef"} surname={surname} />
              <Child name={"Chicken"} surname={surname} />
            </React.Fragment>
          );
        }}
      />
    </div>
  </div>
);

export default App;
