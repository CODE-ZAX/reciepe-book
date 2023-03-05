import React from "react";
import classes from "./Home.module.css";
import landingPageImage from "../Images/LandingPageImage.jpg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/recipe");
  };
  return (
    <div className={classes.main}>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
              <h1>Recipe Book</h1>
              <h5>Manage your recipes the easy way</h5>
              <p className="mt-4">
                Welcome to our recipe book! Here, you will find a collection of
                delicious and easy-to-follow recipes that are sure to please
                every palate. Whether you're a beginner in the kitchen or an
                experienced chef, our recipes are designed to help you create
                tasty dishes that are perfect for any occasion.
              </p>
              <button onClick={handleClick} className="btn btn-danger mt-5">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-6">
            <img className={classes.img} src={landingPageImage} alt="Recipe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
