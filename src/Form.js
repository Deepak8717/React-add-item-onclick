import React from "react";
import Select from "./Select";

class Form extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form>
        <fieldset className="fields">
          <div>
            <Select />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
