import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

it("navigates to the login page when logging out", () => {
  const navigate = jest.fn();
  const { container } = render(
    <MemoryRouter>
      <div />
    </MemoryRouter>
  );
  const logoutButton = container.querySelector("#logout-button");

  logOut(navigate);

  expect(navigate).toHaveBeenCalledWith("/login");
});

it("displays a toast message when logging out", () => {
  toast.error = jest.fn();

  logOut(jest.fn());

  expect(toast.error).toHaveBeenCalledWith("Logged out", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
});
