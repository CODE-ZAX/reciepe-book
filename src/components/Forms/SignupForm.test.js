test("successful sign up with valid inputs and account management", async () => {
  const signUp = jest.fn().mockResolvedValueOnce(true);
  const manageAccount = jest.fn().mockResolvedValueOnce(true);

  const email = "test@example.com";
  const password = "password123";
  const fullName = "John Doe";

  const { getByLabelText, getByRole } = render(<SignUpForm />);
  fireEvent.change(getByLabelText("Email"), { target: { value: email } });
  fireEvent.change(getByLabelText("Password"), { target: { value: password } });
  fireEvent.change(getByLabelText("Confirm Password"), {
    target: { value: password },
  });
  fireEvent.change(getByLabelText("Full Name"), {
    target: { value: fullName },
  });
  fireEvent.click(getByRole("button", { name: "Sign Up" }));

  expect(getByRole("progressbar")).toBeInTheDocument();

  await waitFor(() => expect(signUp).toHaveBeenCalledWith(email, password));
  await waitFor(() => expect(manageAccount).toHaveBeenCalledWith(fullName));

  expect(queryByRole("progressbar")).not.toBeInTheDocument();

  expect(mockNavigate).toHaveBeenCalledWith("/");

  expect(getByRole("alert")).toHaveTextContent("Account Created");
  expect(getByRole("alert")).toHaveClass("toast-success");

  expect(queryByText("Cannot add Name!")).not.toBeInTheDocument();
  expect(queryByText("Email already in use!")).not.toBeInTheDocument();
});
