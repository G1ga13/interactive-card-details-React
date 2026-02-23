import "./Information.css";
import HolderInput from "../../___atoms/cardHolderInput/HolderInput";
import NumberInput from "../../___atoms/cardNumberInput/NumberInput";
import LastInputBox from "../date&cvc/Date&cvc";
import SubmitBtn from "../../___atoms/button/Button";

function Information() {
  return (
    <div className="information_container">
      <HolderInput />
      <NumberInput />
      <LastInputBox />
      <SubmitBtn />
    </div>
  );
}

export default Information;
