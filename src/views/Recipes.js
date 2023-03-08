import React, { useState } from "react";
import classes from "./Recipes.module.css";
import { useRecipe } from "../context/RecipeContext";
import { IoAddCircleSharp } from "react-icons/io5";
import RecipeListItem from "../components/RecipeListItem/RecipeListItem";
import AddIngredient from "../components/AddIngredient/AddIngredient";
import AddInstructions from "../components/AddInstruction/AddInstruction";

const Recipes = () => {
  // const [bookmark, setBookmark] = useState(true);

  const [formData, setFormData] = useState({
    favourite: false,
    id: Math.floor(Math.random() * 100000),
    url: "",
    name: "",
    details: "",
    yield: "",
    preptime: "",
    cooktime: "",
    totaltime: "",
    ingredients: [],
    instructions: [],
  });
  const [showIngredientForm, setShowIngredientForm] = useState(false);
  const [showInstructionsForm, setShowInstructionsForm] = useState(false);
  const { recipes, handleNewRecipe } = useRecipe();
  console.log(recipes);
  // const handleClick = () => {
  //   setBookmark(!bookmark);
  // };
  const submitForm = (e) => {
    handleNewRecipe(formData);
  };

  const handleSubmit = () => {};
  return (
    <div className={classes.body}>
      <h1 className="text-center">All Recipes</h1>
      <div className="container d-flex justify-content-end">
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary mt-3 d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>
              <IoAddCircleSharp size={25} />
            </span>
            Add New Recipe
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Recipe
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="https://abc.com"
                      onChange={(e) => {
                        setFormData({ ...formData, url: e.target.value });
                      }}
                    />
                    <label for="floatingInput">Image Url</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                    />
                    <label for="floatingInput">Recipe Name</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                      }}
                    />
                    <label for="floatingPassword">Description</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setFormData({ ...formData, yield: e.target.value });
                      }}
                    />
                    <label for="floatingPassword">Yield</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setFormData({ ...formData, preptime: e.target.value });
                      }}
                    />
                    <label for="floatingPassword">Prep Time</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setFormData({ ...formData, cooktime: e.target.value });
                      }}
                    />
                    <label for="floatingPassword">Cook Time</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setFormData({ ...formData, totaltime: e.target.value });
                      }}
                    />
                    <label for="floatingPassword">Total Time</label>
                  </div>
                  <div className=" mb-3">
                    <label>Ingredients</label>
                    <ul>
                      {formData.ingredients.map((ingredient, index) => (
                        <li key={index}>
                          <strong>Name:</strong> <span>{ingredient.name}</span>
                          <strong>Quantity:</strong>{" "}
                          <span>{ingredient.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    {showIngredientForm ? (
                      <AddIngredient
                        setFormData={setFormData}
                        setShowIngredientForm={setShowIngredientForm}
                      />
                    ) : (
                      <button
                        onClick={() => {
                          setShowIngredientForm(true);
                        }}
                        className={"btn btn-primary"}
                      >
                        Add Ingredient
                      </button>
                    )}
                  </div>
                  <div className=" mb-3">
                    <label>Instructions</label>
                    <ul>
                      {formData.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                    {showInstructionsForm ? (
                      <AddInstructions
                        setFormData={setFormData}
                        setShowInstructionsForm={setShowInstructionsForm}
                      />
                    ) : (
                      <button
                        onClick={() => {
                          setShowInstructionsForm(true);
                        }}
                        className={"btn btn-primary"}
                      >
                        Add Ingredient
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <div
                  onClick={submitForm}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Add
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {recipes.map((recipe) => {
          return (
            <RecipeListItem
              recipe={recipe}
              classes={classes}
              handleClick={() => {}}
              bookmark={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
