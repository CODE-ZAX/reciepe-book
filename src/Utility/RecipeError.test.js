import React from "react";
import { render } from "@testing-library/react";
import RecipeError from "./RecipeError";

describe("RecipeError component", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<RecipeError />);
    expect(getByText("404")).toBeInTheDocument();
    expect(getByText("Recipe Not Found")).toBeInTheDocument();
  });
});
