import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookmark from "./views/Bookmark";
import Error from "./views/Error";
import Home from "./views/Home";
import Login from "./views/Login";
import Recipe from "./views/Recipe";
import Recipes from "./views/Recipes";
import Signup from "./views/Signup";

const App = () => {
  return (
    <div>
      <div className="fixed-top">
        <h2>Recipe Book</h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe">
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/recipe/:rid" element={<Recipe />} />
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
