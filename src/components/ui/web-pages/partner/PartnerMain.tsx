import React from "react";
import PartnerBanner from "./PartnerBanner";
import WhyPartner from "./WhyPartner";
import PartnerFacility from "./PartnerFacility";
import CEOQuote from "./CEOQuote";
import HowToJoin from "./HowToJoin";
import PartnerFAQs from "./PartnerFAQs";

const PartnerMain = () => {
  return (
    <div>
      <PartnerBanner />
      <div className="container w-full flex flex-col md:flex-row items-start gap-10 md:gap-[110px] ">
        <div className=" lg:w-[45%]">
          <WhyPartner />
        </div>

        <div className=" lg:w-[55%]">
          <PartnerFacility />
        </div>
      </div>
      <div className=" mb-20 mt-40">
        <CEOQuote />
      </div>
      <HowToJoin />
      <PartnerFAQs />
    </div>
  );
};

export default PartnerMain;
