import "./TopCard.css";
import Circles from "../../___atoms/twoCircle/Circles";
import Numbers from "../../___atoms/cardNumbers/CardNumbers";
import Holder from "../../___atoms/holder/Holder";
import Date from "../../___atoms/date/Date";

function TopCard() {
  return (
    <div className="top_card">
      <Circles />
      <Numbers />
      <div className="top_sub_container">
        <Holder />
        <Date />
      </div>
    </div>
  );
}

export default TopCard;
