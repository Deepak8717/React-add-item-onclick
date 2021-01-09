import React from "react";
import Filler from "./Filler";

const ProgressBar = (props) => {
  return (
    <div className="Progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

export default ProgressBar;
