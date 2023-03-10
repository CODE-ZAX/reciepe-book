import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecipe } from "../../context/RecipeContext";

const Navbar = () => {
  const { user } = useRecipe();
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/recipe/${searchId}`);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="">
          Recipe book
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-success" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-success" : "nav-link"
                }
                to="/recipe"
              >
                Recipes
              </NavLink>
            </li>
            {user && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link text-success" : "nav-link"
                  }
                  to="/favourite"
                >
                  Favourites
                </NavLink>
              </li>
            )}
            {user ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link text-success" : "nav-link"
                  }
                  to="/profile"
                >
                  {user.email}
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link text-success" : "nav-link"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link text-success" : "nav-link"
                    }
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" onSubmit={submitHandler}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Recipe Id"
              aria-label="Search"
              onChange={(e) => {
                setSearchId(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
