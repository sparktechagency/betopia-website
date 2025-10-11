import { partnerFacilities } from "@/datas/pages/partnerdata";
import React from "react";

const PartnerFacility = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
        {partnerFacilities?.map((items, index) => (
          <div key={index} className="">
            <p className=" text-primary text-[26px] h-20 w-[86px] bg-[#F2F2F2] rounded-t-[5px]  rounded-bl-[5px] rounded-br-[20px] flex-center font-medium">
              {" "}
              {items?.id}
            </p>
            <p className="text-xl md:text-[26px] font-medium pt-6 lg:pt-[33px] pb-3 ">
              {items?.title}
            </p>
            <p className="text-[#8A8A8A] font-normal text-lg">
              {" "}
              {items?.descriptions}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerFacility;
