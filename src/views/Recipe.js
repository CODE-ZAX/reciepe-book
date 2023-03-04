import { useParams } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Recipe.module.css";

const Recipe = () => {
  const { rid } = useParams();
  const [recipes, setRecipes] = useState([]);

  const recipe = {
    name: "Spaghetti Bolognese",
    details: "A classic Italian pasta dish with meaty tomato sauce.",
    ingredients: [
      { name: "spaghetti", quantity: "12 oz" },
      { name: "ground beef", quantity: "1 lb" },
      { name: "onion", quantity: "1 medium" },
      { name: "garlic", quantity: "2 cloves" },
      { name: "canned tomatoes", quantity: "28 oz" },
      { name: "tomato paste", quantity: "2 tbsp" },
      { name: "dried basil", quantity: "1 tsp" },
      { name: "dried oregano", quantity: "1 tsp" },
      { name: "salt", quantity: "1/2 tsp" },
      { name: "black pepper", quantity: "1/4 tsp" },
      { name: "olive oil", quantity: "2 tbsp" },
    ],
    instructions: [
      "Cook spaghetti according to package directions. Drain and set aside.",
      "In a large skillet, cook ground beef over medium-high heat until browned. Drain excess fat.",
      "Add chopped onion and minced garlic to the skillet. Cook until onion is translucent.",
      "Stir in canned tomatoes, tomato paste, dried basil, dried oregano, salt, and black pepper. Bring to a simmer and cook for 10 minutes.",
      "Serve sauce over spaghetti and enjoy!",
    ],
  };
  return (
    <div className={classes.body}>
      <div className={classes.recipesBody}>
        <div className="card">
          <img
            src="https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg"
            className="card-img-top"
            alt="Turkey-Pot-Pie"
          />
          <div className="card-body">
            <h5 className="card-title">Turkey Pot Pie</h5>
            <p className="card-text">Pot-Pie is classic comfort food</p>
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item ">
              <li>Yield: 1 pie</li>
              <li>Prep time: 15 minutes</li>
              <li>Cook time: 10 minutes</li>
              <li>Total time: 25 minutes</li>
            </li>
            <h6>Ingredients</h6>
            <li className="list-group-item">
              <li>1 cup unsalted butter, softened</li>
              <li>1 cup white sugar</li>
              <li>1 cup brown sugar</li>
              <li>2 large eggs</li>
              <li>1 tsp vanilla extract</li>
              <li>3 cups all-purpose flour</li>
              <li>1 tsp baking soda</li>
              <li>1 tsp salt</li>
              <li>2 cups semisweet chocolate chips</li>
            </li>
            <h6>Instruction</h6>
            <li className="list-group-item">
              <li>Preheat oven to 375°F (190°C).</li>
              <li>
                In a large mixing bowl, cream together the butter, white sugar,
                and brown sugar until light and fluffy.
              </li>
              <li>
                Beat in the eggs one at a time, then stir in the vanilla
                extract.
              </li>
              <li>
                In a separate bowl, combine the flour, baking soda, and salt.
                Gradually stir the dry ingredients into the creamed mixture
                until just blended.
              </li>
              <li>Fold in the chocolate chips.</li>
              <li>
                Drop tablespoon-sized balls of dough onto ungreased cookie
                sheets, spacing them about 2 inches apart.
              </li>
              <li>Bake for 10-12 minutes, until the edges are golden brown.</li>
              <li>
                Remove from oven and allow the cookies to cool on the baking
                sheet for 5 minutes before transferring them to a wire rack to
                cool completely.
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
