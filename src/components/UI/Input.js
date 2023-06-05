import React from "react";
import "./Input.css";
function Input(props) {
  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder={props.placeholder}
        required=""
      />
      <label for="name" className="form__label">
        {props.label}
      </label>
    </div>
  );
}

export default Input;
