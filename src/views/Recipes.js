import React, { useState } from "react";
import classes from "./Recipes.module.css";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useRecipe } from "../context/RecipeContext";
import { IoAddCircleSharp } from "react-icons/io5";

const Recipes = () => {
  const [bookmark, setBookmark] = useState(true);
  const { recipes } = useRecipe();
  const handleClick = () => {
    setBookmark(!bookmark);
  };

  const handleAddRecipe = () => {
    return (
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = () => {};

  return (
    <div className={classes.body}>
      <h1 className="text-center">All Recipes</h1>
      <div className="container d-flex justify-content-end">
        <div className="mb-2">
          <button
            onClick={handleAddRecipe}
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
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="https://abc.com"
                    />
                    <label for="floatingInput">Image Url</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Recipe Name</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Description</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Yield</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Prep Time</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Cook Time</label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Total Time</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {recipes.map((recipe) => {
          return (
            <div className="card mb-3 " key={recipe.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={recipe.url}
                    className={"img-fluid rounded-start" + classes.customImg}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{recipe.name}</h5>
                      <div onClick={handleClick}>
                        {bookmark ? (
                          <button className="btn btn-success">
                            <span>
                              <BsFillBookmarkPlusFill size={20} />
                            </span>
                          </button>
                        ) : (
                          <button className="btn btn-primary">
                            <span>
                              <BsFillBookmarkCheckFill size={20} />
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="card-text ">{recipe.details}</p>

                    <h6>Prepare Time: </h6>
                    <p>{recipe.preptime}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
