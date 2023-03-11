describe("reducer", () => {
  const initialState = [{ id: 1, name: "Recipe 1", favourite: false }];

  it("should add a new item to the state", () => {
    const action = {
      type: "Add",
      data: { id: 2, name: "Recipe 2", favourite: false },
    };
    const newState = reducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContainEqual(action.data);
  });

  it("should edit an existing item in the state", () => {
    const action = {
      type: "Edit",
      data: { id: 1, name: "Updated Recipe", favourite: false },
    };
    const newState = reducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0]).toEqual(action.data);
  });

  it("should delete an existing item from the state", () => {
    const action = { type: "Delete", id: 1 };
    const newState = reducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).not.toContainEqual(initialState[0]);
  });

  it("should toggle the favourite property of an existing item in the state", () => {
    const action = { type: "Favourite", id: 1 };
    const newState = reducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].favourite).toBe(true);
  });

  it("should return the initial state if an unknown action type is passed", () => {
    const action = { type: "Unknown" };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
