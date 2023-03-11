it("renders 'No Recipe Yet' message when there are no favorite recipes", () => {
  const recipes = [];

  render(<RecipeList recipes={recipes} />);

  const noRecipeYet = screen.getByText(/No Recipe Yet/i);
  expect(noRecipeYet).toBeInTheDocument();
});

it("renders each favorite recipe as a card", () => {
  const recipes = [
    {
      id: 1,
      name: "Recipe 1",
      details: "Details 1",
      preptime: "5 minutes",
      url: "url1",
      favourite: true,
    },
    {
      id: 2,
      name: "Recipe 2",
      details: "Details 2",
      preptime: "10 minutes",
      url: "url2",
      favourite: true,
    },
  ];

  render(<RecipeList recipes={recipes} />);

  const recipeCards = screen.getAllByRole("article");
  expect(recipeCards).toHaveLength(2);

  expect(screen.getByText(/Recipe 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Recipe 2/i)).toBeInTheDocument();
});
