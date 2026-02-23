import "./DateInput.css";

function DateInput() {
  return (
    <div className="date_information">
      <p>Exp. Date (MM/YY)</p>
      <div>
        <input type="number" placeholder="MM" />
        <input type="number" placeholder="YY" />
      </div>
    </div>
  );
}

export default DateInput;
