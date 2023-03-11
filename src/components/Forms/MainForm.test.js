const [formData, setFormData] = useState({ ingredients: [] });
const [ingredient, setIngredient] = useState("");
const [quantity, setQuantity] = useState(0);
const [showIngredientForm, setShowIngredientForm] = useState(true);

setIngredient("Flour");
setQuantity(2);
onFormSubmit();

expect(formData.ingredients).toEqual([{ name: "Flour", quantity: 2 }]);

setIngredient("");
setQuantity(0);
onFormSubmit();

expect(formData.ingredients).toEqual([{ name: "Flour", quantity: 2 }]);
expect(showIngredientForm).toBe(false);
