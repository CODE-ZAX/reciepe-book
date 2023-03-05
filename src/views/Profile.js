import React from "react";
import { useRecipe } from "../context/RecipeContext";

const Profile = () => {
  const { logOut } = useRecipe();
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <button onClick={logOut}>Signout</button>
    </div>
  );
};

export default Profile;
