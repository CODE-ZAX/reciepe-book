import { useParams, Navigate } from "react-router-dom";
import React from "react";
import classes from "./Recipe.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

import { useRecipe } from "../context/RecipeContext";

const Recipe = () => {
  const { rid } = useParams();
  const { recipes, handleFavourite } = useRecipe();
  const recipeSearch = recipes.filter((single) => single.id == rid);
  var recipe;

  if (recipeSearch.length !== 0) {
    recipe = recipeSearch[0];
  }
  return recipeSearch.length === 0 ? (
    <Navigate to={"/recipe/error"} />
  ) : (
    <div className={classes.body}>
      <div>
        <div className="card">
          <img src={recipe.url} className="card-img-top" alt="Turkey-Pot-Pie" />
          <div className="card-body d-flex justify-content-between">
            <div>
              <small> ID: {recipe.id}</small>
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">{recipe.details}</p>
            </div>
            <div className="d-flex align-items-center">
              {!recipe.favourite ? (
                <button
                  className="btn btn-primary me-2"
                  onClick={() => {
                    handleFavourite(recipe);
                  }}
                >
                  <span>
                    <AiFillHeart />
                  </span>
                </button>
              ) : (
                <button
                  className="btn btn-success me-2"
                  onClick={() => {
                    handleFavourite(recipe);
                  }}
                >
                  <span>
                    <AiOutlineHeart />
                  </span>
                </button>
              )}
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
