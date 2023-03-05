import { useParams, Navigate } from "react-router-dom";
import React from "react";
import classes from "./Recipe.module.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useRecipe } from "../context/RecipeContext";
import Error from "./Error";

const Recipe = () => {
  const { rid } = useParams();
  const { recipes } = useRecipe();
  const recipeSearch = recipes.filter((single) => single.id == rid);
  var recipe;

  if (recipeSearch.length !== 0) {
    recipe = recipeSearch[0];
  }
  return recipeSearch.length === 0 ? (
    <Navigate to={"/adas"} />
  ) : (
    <div className={classes.body}>
      <div>
        <div className="card">
          <img src={recipe.url} className="card-img-top" alt="Turkey-Pot-Pie" />
          <div className="card-body d-flex justify-content-between">
            <div>
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">{recipe.details}</p>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-success">
                <span>
                  <BsFillBookmarkStarFill />
                </span>
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiMoreHorizontal />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="dropdown-item">Edit</li>
                  <li className="dropdown-item">Delete</li>
                </ul>
              </div>
            </div>
          </div>
          <ul className={"list-group list-group-flush " + classes.customList}>
            <li className="list-group-item ">
              <div>
                <strong>Yield:</strong> {recipe.yield}
              </div>
              <div>
                <strong>Prep Time:</strong> {recipe.preptime}
              </div>
              <div>
                <strong>Cook Time:</strong> {recipe.cooktime}
              </div>
              <div>
                <strong>Total Time:</strong> {recipe.totaltime}
              </div>
            </li>
            <h6 className="m-3">Ingredients:</h6>
            <div className="list-group-item">
              {recipe.ingredients.map((single) => {
                return (
                  <li key={single.id}>
                    <strong>Name: </strong>"{single.name}"
                    <strong> Quantity: </strong> "{single.quantity}"
                  </li>
                );
              })}
            </div>
            <h6 className="m-3">Instructions:</h6>
            <div className="list-group-item">
              {recipe.instructions.map((single) => {
                return <li key={single.id}>{single}</li>;
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
