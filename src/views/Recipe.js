import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import classes from "./Recipe.module.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useRecipe } from "../context/RecipeContext";

const Recipe = () => {
  const { rid } = useParams();
  const { recipes } = useRecipe();
  const recipe = recipes[rid];
  const navigate = useNavigate();
  navigate("gasdgsad");
  return (
    <div className={classes.body}>
      <div>
        <div className="card">
          <img
            src="https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg"
            className="card-img-top"
            alt="Turkey-Pot-Pie"
          />
          <div className="card-body  d-flex justify-content-between">
            <div>
              <h5 className="card-title">Turkey Pot Pie</h5>
              <p className="card-text">Pot-Pie is classic comfort food</p>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-success">
                <span>
                  <BsFillBookmarkStarFill />
                </span>
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiMoreHorizontal />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li class="dropdown-item">Edit</li>
                  <li class="dropdown-item">Delete</li>
                </ul>
              </div>
            </div>
          </div>
          <ul className={"list-group list-group-flush " + classes.customList}>
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
