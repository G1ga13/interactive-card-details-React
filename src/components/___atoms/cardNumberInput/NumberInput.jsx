import "./NumberInput.css";

function NumberInput() {
  return (
    <div className="number_input">
      <p>CARD NUMBER</p>
      <input
        className="number_information"
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
    </div>
  );
}

export default NumberInput;
