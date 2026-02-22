import "./CardBox.css";
import TopCard from "../topCard/TopCard";
import BotCard from "../botCard/BotCard";

function CardBox() {
  return (
    <div className="card_box">
      <TopCard />
      <BotCard />
    </div>
  );
}

export default CardBox;
