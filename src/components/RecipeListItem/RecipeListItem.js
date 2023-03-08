import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RecipeListItem = ({ recipe, classes, handleFavourite }) => {
  const navigate = useNavigate();
  const recipeId = recipe.id;
  const handleRecipe = () => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="card mb-3 ">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            onClick={handleRecipe}
            src={recipe.url}
            style={{ cursor: "pointer" }}
            className={"img-fluid rounded-start" + classes.customImg}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{recipe.name}</h5>
              <div>
                {recipe.favourite ? (
                  <button
                    onClick={() => {
                      handleFavourite(recipe);
                    }}
                    className="btn btn-success"
                  >
                    <span>
                      <AiOutlineHeart size={20} />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleFavourite(recipe);
                    }}
                    className="btn btn-primary"
                  >
                    <span>
                      <AiFillHeart size={20} />
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
