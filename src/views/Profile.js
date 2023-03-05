import React from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../context/RecipeContext";

const Profile = () => {
  const { logOut } = useRecipe();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <button onClick={handleLogout}>Signout</button>
    </div>
  );
};

export default Profile;
