import "./Information.css";
import HolderInput from "../../___atoms/cardHolderInput/HolderInput";
import NumberInput from "../../___atoms/cardNumberInput/NumberInput";
import LastInputBox from "../date&cvc/Date&cvc";
import SubmitBtn from "../../___atoms/button/Button";

function Information({ setSubmitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="information_container" onSubmit={handleSubmit}>
      <HolderInput />
      <NumberInput />
      <LastInputBox />
      <SubmitBtn type="submit" />
    </form>
  );
}

export default Information;
