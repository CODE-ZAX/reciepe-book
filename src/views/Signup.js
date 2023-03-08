import React, { useState } from "react";
import SignupForm from "../components/Forms/SignupForm";
import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Signup</strong>
        </h3>
        <small className="text-center text-danger"></small>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
