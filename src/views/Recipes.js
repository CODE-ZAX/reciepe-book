import React, { useState } from "react";
import classes from "./Recipes.module.css";
import { useRecipe } from "../context/RecipeContext";
import { IoAddCircleSharp } from "react-icons/io5";
import RecipeListItem from "../components/RecipeListItem/RecipeListItem";
import { AiFillEdit } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import MainForm from "../components/Forms/MainForm";
import { toast } from "react-toastify";

const Recipes = () => {
  // const [bookmark, setBookmark] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState([]);
  const { recipes, handleFavourite, handleDelete } = useRecipe();

  const delMul = () => {
    selected.forEach(handleDelete);
    setIsEditing(!isEditing);
    setSelected([]);
    toast.success("Deleted Multiple", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setSelected([]);
  };
  console.log(selected);
  return (
    <div className={classes.body}>
      <h1 className="text-center">All Recipes</h1>
      <div className="container d-flex justify-content-end">
        <div className="d-flex justify-content-center align-items-center mb-3">
          {selected.length !== 0 && (
            <button
              type="button"
              className="btn btn-danger mt-3 me-3 d-flex justify-content-center align-items-center"
              onClick={delMul}
            >
              <span>
                <AiFillDelete size={25} className="me-2" />
              </span>
              Delete
            </button>
          )}

          {!isEditing ? (
            <button
              type="button"
              className="btn btn-success mt-3 d-flex justify-content-center align-items-center"
              onClick={handleEdit}
            >
              <span>
                <AiFillEdit size={25} className="me-2" />
              </span>
              Edit
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger mt-3 d-flex justify-content-center align-items-center"
              onClick={handleEdit}
            >
              <span>
                <AiFillCloseCircle size={25} className="me-2" />
              </span>
              Close
            </button>
          )}

          <button
            type="button"
            className="btn btn-primary mt-3 ms-3 d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>
              <IoAddCircleSharp size={25} className="me-2" />
            </span>
            Add New Recipe
          </button>
        </div>
        <MainForm />
      </div>
      <div className="container">
        {recipes.map((recipe) => {
          return (
            <RecipeListItem
              setSelected={setSelected}
              recipe={recipe}
              classes={classes}
              handleDelete={handleDelete}
              handleFavourite={handleFavourite}
              bookmark={true}
              isEditing={isEditing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
