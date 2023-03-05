import React, { useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameEr, setFullNameEr] = useState("");
  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");
  const [confirmPasswordEr, setConfirmPasswordEr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var fullNameE = false,
      emailE = false,
      passwordE = false,
      confirmPasswordE = false;

    if (fullName.length === 0) {
      fullNameE = true;
      setFullNameEr("Full Name is Empty");
    } else if (!fullName.includes(" ")) {
      fullNameE = true;
      setFullNameEr(
        "First Name and Last Name must be seperated with an empty space"
      );
    } else {
      fullNameE = false;
      setFullNameEr("");
    }

    if (email.length === 0) {
      emailE = true;
      setEmailEr("Email is Empty");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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

    if (confirmPassword.length === 0) {
      confirmPasswordE = true;
      setConfirmPasswordEr("Confirm Password cannot be Empty");
    } else if (password !== confirmPassword) {
      confirmPasswordE = true;
      setConfirmPasswordEr("Passwords are not matching");
    } else {
      confirmPasswordE = false;
      setConfirmPasswordEr("");
    }

    if (!fullNameE && !emailE && !passwordE && !confirmPasswordE) {
      console.log("Signup");
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.signupBody}>
        <h3 className="text-center mb-3">
          <strong>Signup</strong>
        </h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className={"form-floating mb-2"}>
            <input
              type="text"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className={
                fullNameEr.length === 0
                  ? "form-control"
                  : "form-control is-invalid"
              }
              id="floatingInput1"
              placeholder="John Doe"
            />
            <div className="invalid-feedback">{fullNameEr}</div>
            <label className="floating-label">Full Name</label>
          </div>
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
          <div className={"form-floating mb-2"}>
            <input
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className={
                confirmPasswordEr.length === 0
                  ? "form-control"
                  : "form-control is-invalid"
              }
              id="floatingInput4"
              placeholder="*********"
            />
            <div className="invalid-feedback">{confirmPasswordEr}</div>
            <label className="floating-label">Confirm Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" />
              Remember me
            </label>
          </div>

          <button className={"w-100 btn btn-primary"} type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
