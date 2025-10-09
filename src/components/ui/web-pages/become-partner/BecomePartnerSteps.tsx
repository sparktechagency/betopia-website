import React from "react";
import PartnerSteps from "./PartnerSteps";

const BecomePartnerSteps = () => {
  return (
    <div className="lg:h-[704px] bg-gradient-to-r from-[#f3eae3] to-[#e2c9b7] py-[74px] w-full flex flex-col items-center">
      <div className=" container mx-auto ">
        <p className="text-[30px] pb-12 font-medium tracking-wide underline decoration-[#F69348] decoration-1 underline-offset-[12px] text-center lg:text-start"> 
          Towards <span className=" text-primary">First Step</span>
        </p>

        <div>
          <PartnerSteps />
        </div>
      </div>
    </div>
  );
};

export default BecomePartnerSteps;
