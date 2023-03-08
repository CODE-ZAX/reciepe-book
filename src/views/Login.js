import React, { useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import classes from "./Signup.module.css";

const Login = () => {
  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Login</strong>
        </h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
