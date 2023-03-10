import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("should render the form elements", () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should display an error message if email is empty", async () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    fireEvent.submit(getByLabelText("Email").closest("form"));

    await waitFor(() => {
      expect(getByText("Email is Empty")).toBeInTheDocument();
    });
  });

  it("should display an error message if email is invalid", async () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const emailInput = getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });
    fireEvent.submit(emailInput.closest("form"));

    await waitFor(() => {
      expect(getByText("Email is Invalid")).toBeInTheDocument();
    });
  });

  it("should display an error message if password is empty", async () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    fireEvent.change(emailInput, {
      target: { value: "validemail@example.com" },
    });
    fireEvent.submit(passwordInput.closest("form"));

    await waitFor(() => {
      expect(getByText("Password cannot be Empty")).toBeInTheDocument();
    });
  });

  it("should submit the form if email and password are valid", async () => {
    const loginMock = jest.fn();
    const navigateMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <LoginForm login={loginMock} navigate={navigateMock} />
    );
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    fireEvent.change(emailInput, {
      target: { value: "validemail@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });
    fireEvent.submit(passwordInput.closest("form"));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith(
        "validemail@example.com",
        "validpassword"
      );
      expect(navigateMock).toHaveBeenCalledWith("/");
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });
});
