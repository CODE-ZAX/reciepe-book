import React, { useState } from "react";
import classes from "./Signup.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var emailE = false,
      passwordE = false;

    if (email.length === 0) {
      emailE = true;
      setEmailEr("Email is Empty");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email)) {
      emailE = true;
      setEmailEr("Email is Invalid");
    } else {
      emailE = false;
      setEmailEr("");
    }

    if (password.length === 0) {
      passwordE = true;
      setPasswordEr("Password cannot be Empty");
    } else if (password.length < 8) {
      passwordE = true;
      setPasswordEr("Password must contain atleast 8 characters");
    } else {
      passwordE = false;
      setPasswordEr("");
    }

    if (!emailE && !passwordE) {
      console.log("Logged in");
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Login</strong>
        </h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className={"form-floating mb-2"}>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={
                emailEr.length === 0
                  ? "form-control"
                  : "form-control is-invalid"
              }
              id="floatingInput2"
              placeholder="name@example.com"
            />
            <div className="invalid-feedback">{emailEr}</div>
            <label className="floating-label">Email</label>
          </div>
          <div className={"form-floating mb-2"}>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={
                passwordEr.length === 0
                  ? "form-control"
                  : "form-control is-invalid"
              }
              id="floatingInput3"
              placeholder="*********"
            />
            <div className="invalid-feedback">{passwordEr}</div>
            <label className="floating-label">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" />
              Remember me
            </label>
          </div>

          <button className={"w-100 btn btn-primary  "} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
