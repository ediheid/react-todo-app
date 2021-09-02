import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="input-button" onClick={props.updateToDosProp}>
        Add to list!
      </button>
    </div>
  );
};

export default Button;
