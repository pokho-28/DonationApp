import React from "react";
import "./TextBox.css";
function TextBox(props) {
  return (
    <input
      type={props.type}
      placeholder={props.label}
      className="inputText"
    ></input>
  );
}

export default TextBox;
