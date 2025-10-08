import React from "react";
import BecomePartnerBanner from "./BecomePartnerBanner";
import ComponentTitle from "@/components/shared/ComponentTitle";
import BecomePartnerSteps from "./BecomePartnerSteps";

const BecomePartnerMain = () => {
  return (
    <div>
      <BecomePartnerBanner />
      <div className=" container my-20 mt-32">
        <ComponentTitle className=" flex-center  pb-7 ">
          <span>Why Partner with </span>{" "}
          <span className="text-primary">Betopia</span>
        </ComponentTitle>

        <div className="w-full flex-center  ">
          <p className=" text-center section-subtitle leading-9 tracking-wide">
            {" "}
            Betopia helps businesses grow by turning challenges into
            opportunities. We provide smart Cloud, AI, and Cybersecurity
            solutions that fit your exact needs. In a world that’s always
            changing, we make sure you’re not just keeping up, you&apos;re
            staying ahead. Every solution we create is made by experts and built
            around your goals, never copied from a template.{" "}
          </p>
        </div>
      </div>

      <div className=" ">
        <BecomePartnerSteps />
      </div>
    </div>
  );
};

export default BecomePartnerMain;
