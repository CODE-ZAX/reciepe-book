import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RecipeListItem = ({
  recipe,
  classes,
  handleFavourite,
  isEditing,
  handleDelete,
  setSelected,
  user,
}) => {
  const navigate = useNavigate();
  const recipeId = recipe.id;
  const handleRecipe = () => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        {isEditing && (
          <div className="me-2">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected((prev) => [...prev, recipe]);
                } else {
                  setSelected((prev) =>
                    prev.filter((item) => {
                      return item.id !== recipe.id;
                    })
                  );
                }
              }}
            />
          </div>
        )}
        <div className="card mb-3 w-100 ">
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
                  {user && (
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
                  )}
                </div>
                <p className="card-text ">{recipe.details}</p>

                <h6>Prepare Time: </h6>
                <p>{recipe.preptime}</p>
              </div>
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="ms-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(recipe);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeListItem;
