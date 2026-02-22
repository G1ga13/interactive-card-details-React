import "./Show.css";
import GradientDiv from "../___molecules/gradientBackground/GradientBackground";
import CardBox from "../___molecules/plasticCardContainer/CardBox";
import Information from "../___molecules/cardInformation/Information";

function ShowUp() {
  return (
    <div className="main_container">
      <div className="background">
        <GradientDiv />
      </div>
      <CardBox />
      <Information />
    </div>
  );
}

export default ShowUp;
