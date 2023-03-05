import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../context/RecipeContext";

const SignupForm = ({ setSignupError }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameEr, setFullNameEr] = useState("");
  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");
  const [confirmPasswordEr, setConfirmPasswordEr] = useState("");
  const [loader, setLoader] = useState(false);

  const { signUp, manageAccount } = useRecipe();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
      setLoader(true);
      try {
        await signUp(email, password);
        navigate("/");
        try {
          await manageAccount(fullName);
          setLoader(false);
          setSignupError("");
        } catch (e) {
          setLoader(false);
          console.log(e);
          setSignupError("Couldnt add name!");
        }
      } catch (e) {
        setLoader(false);
        setSignupError(e.message);
      }
    }
  };

  return (
    <div>
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
              emailEr.length === 0 ? "form-control" : "form-control is-invalid"
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
        {loader ? (
          <div className="my-3 text-center">Loading...</div>
        ) : (
          <button className={"w-100 btn btn-primary"} type="submit">
            Sign up
          </button>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
