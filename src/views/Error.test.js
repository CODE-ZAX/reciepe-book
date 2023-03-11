import { render, screen } from "@testing-library/react";
import React from "react";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("renders not found message correctly", () => {
    render(<NotFoundPage />);

    const notFoundMsg = screen.getByText("404");
    expect(notFoundMsg).toBeInTheDocument();

    const recipeNotFoundMsg = screen.getByText("Page Not Found");
    expect(recipeNotFoundMsg).toBeInTheDocument();
  });
});
