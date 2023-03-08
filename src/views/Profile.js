import React from "react";
import { useNavigate } from "react-router";
import { useRecipe } from "../context/RecipeContext";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, logOut } = useRecipe();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
    toast.error("Logged out", {
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
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <div>
        <div className=" d-flex align-items-center justify-content-start">
          <h2>Full Name: </h2>
          <h2 className="ms-2">{user.displayName}</h2>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <h2>Email: </h2>
          <h2 className="ms-2">{user.email}</h2>
        </div>
        <div className="d-flex align-items-right justify-content-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            <span>
              <BiLogOut size={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
