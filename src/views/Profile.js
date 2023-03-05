import React from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../context/RecipeContext";
import { BiLogOut } from "react-icons/bi";

const Profile = () => {
  const { user, logOut } = useRecipe();
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
        <div className="d-flex justify-content-left align-items-center">
          <h2>Full Name: </h2>
          <h2 className="ms-2">{user.displayName}</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h2>Email: </h2>
          <h2 className="ms-2">{user.email}</h2>
        </div>
        <button onClick={handleLogout} className="btn btn-danger">
          <span>
            <BiLogOut size={25} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
