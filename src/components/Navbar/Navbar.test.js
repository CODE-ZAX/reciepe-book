import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { RecipeProvider } from "../../context/RecipeContext";

describe("Navbar", () => {
  it("renders a navbar with links", () => {
    const { getByText } = render(
      <RecipeProvider>
        <Navbar />
      </RecipeProvider>
    );
    expect(getByText("Recipe book")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Recipes")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Signup")).toBeInTheDocument();
  });

  it("renders a navbar with a search form", () => {
    const { getByPlaceholderText, getByText } = render(
      <RecipeProvider>
        <Navbar />
      </RecipeProvider>
    );
    expect(getByPlaceholderText("Search Recipe Id")).toBeInTheDocument();
    expect(getByText("Search")).toBeInTheDocument();
  });

  it("navigates to the search page when a recipe id is entered and the form is submitted", () => {
    const { getByPlaceholderText, getByText } = render(
      <RecipeProvider>
        <Navbar />
      </RecipeProvider>
    );
    const input = getByPlaceholderText("Search Recipe Id");
    const searchButton = getByText("Search");

    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.click(searchButton);

    expect(location.pathname).toBe("/recipe/123");
  });
});
