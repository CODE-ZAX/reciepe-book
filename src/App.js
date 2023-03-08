import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Favourites from "./views/Favourites";
import Error from "./views/Error";
import Home from "./views/Home";
import Login from "./views/Login";
import Recipe from "./views/Recipe";
import Recipes from "./views/Recipes";
import Signup from "./views/Signup";
import RecipeError from "./Utility/RecipeError";
import Profile from "./views/Profile";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe">
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/recipe/:rid" element={<Recipe />} />
          <Route path="/recipe/error" element={<RecipeError />} />
        </Route>
        <Route path="favourite" element={<Favourites />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
