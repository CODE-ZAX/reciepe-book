import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RecipeListItem from "./RecipeListItem";

const recipe = { id: 1, name: "Pasta", ingredients: ["pasta", "sauce"] };
let selected = [];

const { getByRole } = render(
  <RecipeListItem isEditing={true} recipe={recipe} setSelected={setSelected} />
);

const checkbox = getByRole("checkbox");

fireEvent.click(checkbox);

expect(selected).toContainEqual(recipe);

fireEvent.click(checkbox);

expect(selected).not.toContainEqual(recipe);
