import React, { useContext } from "react";

const RecipeContext = React.createContext();

export const useRecipe = () => useContext(RecipeContext);

const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider>{children}</RecipeContext.Provider>;
};

export default RecipeProvider;
