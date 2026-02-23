import "./Date&cvc.css";
import DateInput from "../../___atoms/dateInput/DateInput";
import Cvc from "../../___atoms/cvcInput/CvcInput";

function LastInputBox() {
  return (
    <div className="last_input_box">
      <DateInput />
      <Cvc />
    </div>
  );
}

export default LastInputBox;
