import React from "react";
import classes from "../Utility/RecipeError.module.css";

const Error = () => {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center " + classes.customText
      }
    >
      <div className="text-center">
        <h1>404</h1>
        <h4>Page Not Found</h4>
      </div>
    </div>
  );
};

export default Error;
