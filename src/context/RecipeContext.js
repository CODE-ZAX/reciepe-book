import React, { useContext } from "react";

const RecipeContext = React.createContext();

export const useRecipe = () => useContext(RecipeContext);

const RecipeProvider = ({ children }) => {
  const recipes = [
    {
      url: "https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg",
      name: "Spaghetti Carbonara",
      details:
        "A classic Italian pasta dish with bacon, eggs, and Parmesan cheese.",
      preptime: "10-15minutes",
      ingredients: [
        { name: "spaghetti", quantity: "12 oz" },
        { name: "bacon", quantity: "8 oz" },
        { name: "garlic", quantity: "2 cloves" },
        { name: "eggs", quantity: "3" },
        { name: "Parmesan cheese", quantity: "1/2 cup" },
        { name: "salt", quantity: "1/2 tsp" },
        { name: "black pepper", quantity: "1/4 tsp" },
      ],
      instructions: [
        "Cook spaghetti according to package directions. Drain and set aside.",
        "In a large skillet, cook bacon over medium heat until crispy. Remove from skillet and chop into small pieces.",
        "In the same skillet, cook minced garlic over medium heat until fragrant.",
        "In a bowl, beat together eggs, grated Parmesan cheese, salt, and black pepper.",
        "Add the cooked spaghetti to the skillet with the garlic. Toss to combine.",
        "Remove the skillet from the heat and pour the egg mixture over the spaghetti. Toss quickly to coat the spaghetti with the egg mixture.",
        "Add the chopped bacon to the skillet and toss again.",
        "Serve hot and enjoy!",
      ],
    },
    {
      url: "https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg",
      name: "Chicken Curry",
      details:
        "A spicy and flavorful Indian dish made with chicken, vegetables, and curry sauce.",
      preptime: "10-15minutes",
      ingredients: [
        { name: "chicken breast", quantity: "1 lb" },
        { name: "onion", quantity: "1 medium" },
        { name: "garlic", quantity: "3 cloves" },
        { name: "ginger", quantity: "1 inch piece" },
        { name: "potato", quantity: "1 large" },
        { name: "carrot", quantity: "1 large" },
        { name: "curry powder", quantity: "2 tbsp" },
        { name: "cumin", quantity: "1 tsp" },
        { name: "coriander", quantity: "1 tsp" },
        { name: "turmeric", quantity: "1/2 tsp" },
        { name: "cayenne pepper", quantity: "1/2 tsp" },
        { name: "coconut milk", quantity: "1 can" },
        { name: "chicken broth", quantity: "1 cup" },
        { name: "salt", quantity: "1 tsp" },
        { name: "black pepper", quantity: "1/4 tsp" },
        { name: "olive oil", quantity: "2 tbsp" },
      ],
      instructions: [
        "Cut the chicken breast into bite-sized pieces. Season with salt and black pepper.",
        "Chop the onion, garlic, and ginger. Peel and chop the potato and carrot into bite-sized pieces.",
        "In a large pot or Dutch oven, heat olive oil over medium heat. Add the chopped onion, garlic, and ginger. Cook until the onion is translucent.",
        "Add the chicken and cook until browned.",
        "Add the chopped potato and carrot. Cook for 5 minutes.",
        "Add the curry powder, cumin, coriander, turmeric",
      ],
    },
    {
      url: "https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg",
      name: "Chicken Curry",
      details:
        "A spicy and flavorful Indian dish made with chicken, vegetables, and curry sauce.",
      preptime: "10-15minutes",
      ingredients: [
        { name: "chicken breast", quantity: "1 lb" },
        { name: "onion", quantity: "1 medium" },
        { name: "garlic", quantity: "3 cloves" },
        { name: "ginger", quantity: "1 inch piece" },
        { name: "potato", quantity: "1 large" },
        { name: "carrot", quantity: "1 large" },
        { name: "curry powder", quantity: "2 tbsp" },
        { name: "cumin", quantity: "1 tsp" },
        { name: "coriander", quantity: "1 tsp" },
        { name: "turmeric", quantity: "1/2 tsp" },
        { name: "cayenne pepper", quantity: "1/2 tsp" },
        { name: "coconut milk", quantity: "1 can" },
        { name: "chicken broth", quantity: "1 cup" },
        { name: "salt", quantity: "1 tsp" },
        { name: "black pepper", quantity: "1/4 tsp" },
        { name: "olive oil", quantity: "2 tbsp" },
      ],
      instructions: [
        "Cut the chicken breast into bite-sized pieces. Season with salt and black pepper.",
        "Chop the onion, garlic, and ginger. Peel and chop the potato and carrot into bite-sized pieces.",
        "In a large pot or Dutch oven, heat olive oil over medium heat. Add the chopped onion, garlic, and ginger. Cook until the onion is translucent.",
        "Add the chicken and cook until browned.",
        "Add the chopped potato and carrot. Cook for 5 minutes.",
        "Add the curry powder, cumin, coriander, turmeric",
      ],
    },
    {
      url: "https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg",
      name: "Chicken Curry",
      details:
        "A spicy and flavorful Indian dish made with chicken, vegetables, and curry sauce.",
      preptime: "10-15minutes",
      ingredients: [
        { name: "chicken breast", quantity: "1 lb" },
        { name: "onion", quantity: "1 medium" },
        { name: "garlic", quantity: "3 cloves" },
        { name: "ginger", quantity: "1 inch piece" },
        { name: "potato", quantity: "1 large" },
        { name: "carrot", quantity: "1 large" },
        { name: "curry powder", quantity: "2 tbsp" },
        { name: "cumin", quantity: "1 tsp" },
        { name: "coriander", quantity: "1 tsp" },
        { name: "turmeric", quantity: "1/2 tsp" },
        { name: "cayenne pepper", quantity: "1/2 tsp" },
        { name: "coconut milk", quantity: "1 can" },
        { name: "chicken broth", quantity: "1 cup" },
        { name: "salt", quantity: "1 tsp" },
        { name: "black pepper", quantity: "1/4 tsp" },
        { name: "olive oil", quantity: "2 tbsp" },
      ],
      instructions: [
        "Cut the chicken breast into bite-sized pieces. Season with salt and black pepper.",
        "Chop the onion, garlic, and ginger. Peel and chop the potato and carrot into bite-sized pieces.",
        "In a large pot or Dutch oven, heat olive oil over medium heat. Add the chopped onion, garlic, and ginger. Cook until the onion is translucent.",
        "Add the chicken and cook until browned.",
        "Add the chopped potato and carrot. Cook for 5 minutes.",
        "Add the curry powder, cumin, coriander, turmeric",
      ],
    },
  ];

  return (
    <RecipeContext.Provider
      value={{
        recipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
