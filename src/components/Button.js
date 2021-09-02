import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.updateToDosProp}>Create new Todo item</button>
    </div>
  );
};

export default Button;
