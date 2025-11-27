import React from "react";
import PartnerSteps from "./PartnerSteps";
import PartnerRegisterForm from "./PartnerRegisterForm";

const BecomePartnerSteps = () => {
  return (
    <div className="bg-linear-to-r from-[#f3eae3] to-[#e2c9b7] py-[74px] w-full flex flex-col items-center">
      <div className=" container mx-auto ">
        <p className="text-[30px] pb-12 font-medium tracking-wide underline decoration-[#F69348] decoration-1 underline-offset-12 text-center lg:text-start">
          Towards <span className=" text-primary">First Step</span>
        </p>

        <div>
          {/* <PartnerSteps /> */}
          <PartnerRegisterForm/>
        </div>
      </div>
    </div>
  );
};

export default BecomePartnerSteps;
