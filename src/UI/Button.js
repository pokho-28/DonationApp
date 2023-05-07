import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <button className="btn" onClick={props.onClickHandler}>
      {props.name}
    </button>
  );
}

export default Button;
