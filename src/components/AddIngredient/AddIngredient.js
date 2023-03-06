import { useState } from "react";

const AddIngredient = ({ setFormData, setShowIngredientForm }) => {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState(0);
  const onFormSubmit = () => {
    if (ingredient.length !== 0 && quantity !== 0) {
      setFormData({
        ...formData,
        ingredients: [
          ...formData.ingredients,
          { name: ingredient, quantity: quantity },
        ],
      });
    }
    setShowIngredientForm(false);
  };
  return (
    <div>
      <div className="row justify-content-between g-0">
        <div className="col-8  mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder={`Ingredient ${formData.ingredients.length + 1}`}
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
          />
        </div>
        <div className="col-3  mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Qty"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
      </div>
      <div onClick={onFormSubmit} className="btn btn-primary">
        Save
      </div>
    </div>
  );
};
export default AddIngredient;
