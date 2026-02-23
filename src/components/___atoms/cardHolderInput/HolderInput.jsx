import "./HolderInput.css";

function HolderInput() {
  return (
    <div className="holder_input">
      <p>Cardholder Name</p>
      <input
        className="holder_information"
        type="text"
        placeholder="e.g. Jane Appleseed"
      />
    </div>
  );
}

export default HolderInput;
