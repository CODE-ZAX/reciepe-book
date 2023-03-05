import React from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../context/RecipeContext";
import { BiLogOut } from "react-icons/bi";

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
      <div>
        <h4>Full Name:</h4>
        <input type="text" />
      </div>
      <button onClick={handleLogout} className="btn btn-danger">
        <span>
          <BiLogOut />
        </span>
      </button>
    </div>
  );
};

export default Profile;
