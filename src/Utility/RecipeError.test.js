import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<NotFound />);
    expect(getByText("404")).toBeInTheDocument();
    expect(getByText("Recipe Not Found")).toBeInTheDocument();
  });
});
