
import React from "react";
import FAQ from "../products/FAQ";
import { partnerFAQ } from "@/datas/pages/partnerdata";


const PartnerFAQs = () => {

  return (
    <div className=" container mb-20">
      <div className=" w-full flex-center">
        <div className=" grid grid-cols-1 gap-6 lg:w-[60%]">
          <FAQ faqData={partnerFAQ} />
        </div>
      </div>
    </div>
  );
};

export default PartnerFAQs;
