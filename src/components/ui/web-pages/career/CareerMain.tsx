import React from "react";
import CareerBanner from "./CareerBanner";
import JoinTeam from "./JoinTeam";
import BetopiaVision from "./BetopiaVision";
import Opennings from "./Opennings";

const CareerMain: React.FC = () => {
  return (
    <div>
      <CareerBanner />
      <JoinTeam />
      <BetopiaVision />
      <Opennings />
    </div>
  );
};

export default CareerMain;
