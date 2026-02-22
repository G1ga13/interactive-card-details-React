import "./BotCard.css";
import BlackLine from "../../___atoms/cardBackgroundLine/BlackLine";
import CardId from "../../___atoms/cvcContainer/cvc";

function BotCard() {
  return (
    <div className="bot_card">
      <BlackLine />
      <CardId />
    </div>
  );
}

export default BotCard;
