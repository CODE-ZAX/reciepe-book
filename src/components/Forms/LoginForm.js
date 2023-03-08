import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../../context/RecipeContext";

import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");

  const [loader, setLoader] = useState(false);

  const { login } = useRecipe();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var emailE = false,
      passwordE = false;

    if (email.length === 0) {
      emailE = true;
      setEmailEr("Email is Empty");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailE = true;
      console.log(email);
      setEmailEr("Email is Invalid");
    } else {
      emailE = false;
      console.log("Here");
      setEmailEr("");
    }

    if (password.length === 0) {
      passwordE = true;
      setPasswordEr("Password cannot be Empty");
    } else {
      passwordE = false;
      setPasswordEr("");
    }

    if (!emailE && !passwordE) {
      setLoader(true);
      try {
        await login(email, password);
        navigate("/");
        toast.success("Logged in", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (e) {
        setLoader(false);
        toast.error("Email or Password is incorrect", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            passwordEr.length === 0 ? "form-control" : "form-control is-invalid"
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
      {loader ? (
        <div className="my-3 text-center">Loading...</div>
      ) : (
        <button className={"w-100 btn btn-primary  "} type="submit">
          Login
        </button>
      )}
    </form>
  );
};

export default LoginForm;
