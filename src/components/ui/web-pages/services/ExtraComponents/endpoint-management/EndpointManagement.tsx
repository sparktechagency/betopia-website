import React from "react";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "../common/WhyChooseUs";
import { uniqueStrengthData } from "@/datas/pages/ServiceExtraComponentsData";

const EndpointManagement = () => {
  return (
    <div>
      <WhatWeOffer />
      <div className="my-20">
        <WhyChooseUs items={uniqueStrengthData} />
      </div>
    </div>
  );
};

export default EndpointManagement;
