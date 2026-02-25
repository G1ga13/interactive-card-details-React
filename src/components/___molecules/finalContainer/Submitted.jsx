import "./Submitted.css";
import CheckOval from "../../___atoms/checkBox/CheckOval";
import Added from "../../___atoms/detailsAddedText/Thanks";
import SubmitBtn from "../../___atoms/button/Button";

function FinalBox() {
  return (
    <div className="final_box">
      <CheckOval />
      <Added />
      <SubmitBtn />
    </div>
  );
}

export default FinalBox;
