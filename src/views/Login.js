import React, { useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import classes from "./Signup.module.css";

const Login = () => {
  const [signinErr, setSigninError] = useState("");
  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Login</strong>
        </h3>
        <small className="text-center text-danger">
          {signinErr.length !== 0 && signinErr}
        </small>
        <LoginForm setSigninError={setSigninError} />
      </div>
    </div>
  );
};

export default Login;
