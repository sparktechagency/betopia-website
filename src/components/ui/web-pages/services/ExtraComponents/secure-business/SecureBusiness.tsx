import { whyCustomersData } from "@/datas/pages/ServiceExtraComponentsData";
import React from "react";
import WhyChooseUs from "../common/WhyChooseUs";

const SecureBusiness = () => {
  return (
    <div>
      <div className="my-20 bg-[#F79549]/12 pt-4 pb-10">
        <WhyChooseUs items={whyCustomersData} />
      </div>
    </div>
  );
};

export default SecureBusiness;
