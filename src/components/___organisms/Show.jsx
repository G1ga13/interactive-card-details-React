import "./Show.css";
import GradientDiv from "../___molecules/gradientBackground/GradientBackground";
import CardBox from "../___molecules/plasticCardContainer/CardBox";
import Information from "../___molecules/cardInformation/Information";
import FinalBox from "../___molecules/finalContainer/Submitted";
import { useState } from "react";

function ShowUp() {
  const [submitted, setSubmitted] = useState(false);

  let content;

  if (submitted) {
    content = (
      <div className="on_submitted">
        <FinalBox />
      </div>
    );
  } else {
    content = (
      <div className="off_submitted">
        <Information setSubmitted={setSubmitted} />
      </div>
    );
  }

  return (
    <div className="main_container">
      <div className="background">
        <GradientDiv />
      </div>
      <CardBox />
      {content}
    </div>
  );
}

export default ShowUp;
