import "./BotCard.css";
import BlackLine from "../../___atoms/cardBackgroundLine/BlackLine";
import CardId from "../../___atoms/cvcContainer/cvc";
import Lines from "../../___atoms/grayLines/Lines";

function BotCard() {
  return (
    <div className="bot_card">
      <BlackLine />
      <CardId />
      <Lines />
    </div>
  );
}

export default BotCard;
