import React from "react";

const InputField = (props) => {
  return (
    <input
      placeholder="..."
      className="input-field"
      onChange={props.onChangeProp}
      value={props.valueProp}
    ></input>
  );
};

export default InputField;
