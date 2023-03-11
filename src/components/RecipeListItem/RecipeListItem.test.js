import { fireEvent, render } from "@testing-library/react";

const recipe = { id: 1, name: "Pasta", ingredients: ["pasta", "sauce"] };
let selected = [];

const { getByRole } = render(
  <YourComponent isEditing={true} recipe={recipe} setSelected={setSelected} />
);

const checkbox = getByRole("checkbox");

fireEvent.click(checkbox);

expect(selected).toContainEqual(recipe);

fireEvent.click(checkbox);

expect(selected).not.toContainEqual(recipe);
