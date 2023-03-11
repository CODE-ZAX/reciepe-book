import React from "react";
import { shallow } from "enzyme";
import { toast } from "react-toastify";

import { delMul, handleEdit } from "./yourComponent.js";

describe("delMul function", () => {
  const handleDelete = jest.fn();
  const setIsEditing = jest.fn();
  const setSelected = jest.fn();
  const toastSuccessSpy = jest.spyOn(toast, "success");

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete selected recipes, toggle editing mode, and show a success toast notification", () => {
    const selected = ["recipe1", "recipe2", "recipe3"];
    delMul(handleDelete, setIsEditing, setSelected, selected);

    expect(handleDelete).toHaveBeenCalledTimes(3);
    expect(setIsEditing).toHaveBeenCalledWith(true);
    expect(setSelected).toHaveBeenCalledWith([]);
    expect(toastSuccessSpy).toHaveBeenCalledWith("Deleted Multiple Recipes", {
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
});

describe("handleEdit function", () => {
  const setIsEditing = jest.fn();
  const setSelected = jest.fn();

  it("should toggle editing mode and clear selected recipes", () => {
    handleEdit(setIsEditing, setSelected);

    expect(setIsEditing).toHaveBeenCalledWith(true);
    expect(setSelected).toHaveBeenCalledWith([]);
  });
});
