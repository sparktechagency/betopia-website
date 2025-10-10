import ComponentTitle from "@/components/shared/ComponentTitle";
import Image from "next/image";
import React from "react";

const WhyPartner = () => {
  return (
    <div>
      <ComponentTitle className=" pb-10 pt-16 md:pt-0  ">
        {" "}
        <span> Why Partner with </span>{" "}
        <span className="text-primary"> Betopia </span>{" "}
      </ComponentTitle>
      <p className="text-[#8A8A8A] font-normal pb-12 ">
        {" "}
        Choose Betopia and unlock enterprise-grade tech, AI powered
        intelligence, and borderless delivery all seamlessly aligned with your
        brand’s growth journey.{" "}
      </p>
      <Image src="/why-partner.png" alt="" height={353} width={507} className="h-full w-full" />
    </div>
  );
};

export default WhyPartner;
