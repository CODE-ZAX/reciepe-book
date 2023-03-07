import React from "react";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useRecipe } from "../../context/RecipeContext";
const RecipeListItem = ({ recipe, classes }) => {
  const { handleFavourite } = useRecipe();
  return (
    <div className="card mb-3 ">
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
              <div
                onClick={() => {
                  handleFavourite(recipe);
                }}
              >
                {recipe.favourite ? (
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
};

export default RecipeListItem;
