import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import classes from "./Signup.module.css";

const Signup = () => {
  const [signupErr, setSignupError] = useState("");
  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Signup</strong>
        </h3>
        <small className="text-center text-danger">
          {signupErr.length !== 0 && signupErr}
        </small>
        <SignupForm setSignupError={setSignupError} />
      </div>
    </div>
  );
};

export default Signup;
