import React from "react";
import { useRecipe } from "../context/RecipeContext";
import { AiFillHeart } from "react-icons/ai";

const Bookmark = () => {
  const { recipes, handleFavourite } = useRecipe();
  return (
    <div style={{ height: "100vh", marginTop: "70px" }}>
      <h1 className="text-center mb-4">Favourites</h1>
      <div className="container">
        {recipes.filter((item) => !item.favourite).length === 0 ? (
          <div>No Recipe Yet</div>
        ) : (
          recipes
            .filter((item) => !item.favourite)
            .map((recipe) => {
              return (
                <div className="card mb-3 " key={recipe.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={recipe.url}
                        className={"img-fluid rounded-start"}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{recipe.name}</h5>
                          <div>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                handleFavourite(recipe);
                              }}
                            >
                              <span>
                                <AiFillHeart size={20} />
                              </span>
                            </button>
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
            })
        )}
      </div>
    </div>
  );
};

export default Bookmark;
