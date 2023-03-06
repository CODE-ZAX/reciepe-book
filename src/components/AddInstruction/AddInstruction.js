import { useState } from "react";

const AddInstructions = ({ setFormData, setShowInstructionsForm }) => {
  const [instruction, setInstruction] = useState("");
  const onFormSubmit = () => {
    if (instruction.length !== 0) {
      setFormData({
        ...formData,
        instructions: [...formData.instructions, instruction],
      });
    }
    setShowInstructionsForm(false);
  };
  return (
    <div>
      <div className="row justify-content-between g-0">
        <div className="col-8  mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder={`Instruction ${formData.instructions.length + 1}`}
            onChange={(e) => {
              setInstruction(e.target.value);
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
export default AddInstructions;
