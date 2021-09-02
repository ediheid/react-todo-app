import React from "react";

const InputField = (props) => {
  return (
    <input
      placeholder="..."
      className="input-field"
      onChange={props.onChangePropTwo}
      value={props.valuePropTwo}
    ></input>
  );
};

export default InputField;
