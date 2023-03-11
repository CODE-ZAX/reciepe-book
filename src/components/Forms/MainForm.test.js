// Mock the necessary state and function
const [formData, setFormData] = useState({ ingredients: [] });
const [ingredient, setIngredient] = useState("");
const [quantity, setQuantity] = useState(0);
const [showIngredientForm, setShowIngredientForm] = useState(true);

// Call the function to add an ingredient with valid inputs
setIngredient("Flour");
setQuantity(2);
onFormSubmit();

// Check if the formData state has been updated with the new ingredient
expect(formData.ingredients).toEqual([{ name: "Flour", quantity: 2 }]);

// Call the function to add an ingredient with invalid inputs
setIngredient("");
setQuantity(0);
onFormSubmit();

// Check if the formData state has not been updated with an empty ingredient
expect(formData.ingredients).toEqual([{ name: "Flour", quantity: 2 }]);
expect(showIngredientForm).toBe(false);
