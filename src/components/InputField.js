import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input onChange={props.onChangeProp} value={props.valueProp}></input>
    </div>
  );
};

export default InputField;
