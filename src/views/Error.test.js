import { render, screen } from "@testing-library/react";
import React from "react";
import Error from "./Error";

describe("NotFoundPage", () => {
  it("renders not found message correctly", () => {
    render(<Error />);

    const notFoundMsg = screen.getByText("404");
    expect(notFoundMsg).toBeInTheDocument();

    const recipeNotFoundMsg = screen.getByText("Page Not Found");
    expect(recipeNotFoundMsg).toBeInTheDocument();
  });
});
