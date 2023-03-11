import React from "react";
import { render, screen } from "@testing-library/react";
import Recipe from "./Recipe";

describe("Recipe component", () => {
  const recipe = {
    id: 1,
    name: "Test Recipe",
    url: "http://test-recipe.com",
    details: "Test recipe details",
    yield: 2,
    preptime: "10 minutes",
    cooktime: "20 minutes",
    totaltime: "30 minutes",
    ingredients: [
      { id: 1, name: "Test Ingredient 1", quantity: "1 cup" },
      { id: 2, name: "Test Ingredient 2", quantity: "2 cups" },
    ],
    instructions: ["Test instruction 1", "Test instruction 2"],
    favourite: false,
  };

  it("renders recipe details correctly", () => {
    render(<Recipe recipe={recipe} />);

    expect(screen.getByText("Test Recipe")).toBeInTheDocument();
    expect(screen.getByText("Test recipe details")).toBeInTheDocument();
    expect(screen.getByText("Yield: 2")).toBeInTheDocument();
    expect(screen.getByText("Prep Time: 10 minutes")).toBeInTheDocument();
    expect(screen.getByText("Cook Time: 20 minutes")).toBeInTheDocument();
    expect(screen.getByText("Total Time: 30 minutes")).toBeInTheDocument();
    expect(screen.getByText('Name: "Test Ingredient 1"')).toBeInTheDocument();
    expect(screen.getByText('Quantity: "1 cup"')).toBeInTheDocument();
    expect(screen.getByText('Name: "Test Ingredient 2"')).toBeInTheDocument();
    expect(screen.getByText('Quantity: "2 cups"')).toBeInTheDocument();
    expect(screen.getByText("Test instruction 1")).toBeInTheDocument();
    expect(screen.getByText("Test instruction 2")).toBeInTheDocument();
  });
});
