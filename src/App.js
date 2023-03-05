import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bookmark from "./views/Bookmark";
import Error from "./views/Error";
import Home from "./views/Home";
import Login from "./views/Login";
import Recipe from "./views/Recipe";
import Recipes from "./views/Recipes";
import Signup from "./views/Signup";
import RecipeError from "./Utility/RecipeError";
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
        <Route path="bookmarks" element={<Bookmark />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
