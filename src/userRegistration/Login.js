import React from "react";
import TextBox from "../UI/TextBox";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Login() {
  return (
    <div className="login">
      <Card>
        <TextBox label="User Name" type="text" />
        <TextBox label="Password" type="password" />
        <p>forgot password?</p>
        <span>
          <Button name="Submit" />
        </span>
      </Card>
    </div>
  );
}

export default Login;
