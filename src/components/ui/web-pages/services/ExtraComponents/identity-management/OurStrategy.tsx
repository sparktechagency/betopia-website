import ComponentTitle from "@/components/shared/ComponentTitle";
import { identityLifecycleData } from "@/datas/pages/ServiceExtraComponentsData";
import React from "react";

const OurStrategy = () => {
  return (
    <div className=" container py-20 flex-center">
      <div className=" lg:w-[70%]">
        <div className=" flex flex-col items-center justify-center gap-1 my-8  ">
          <ComponentTitle className=" !text-center pb-2">
            {" "}
            <span className=" text-[#000000]"> Our Strategy & </span>{" "}
            <span className="text-primary">Method</span>{" "}
          </ComponentTitle>
          <div className=" w-full flex-center flex-col gap-0.5">
            <p className="section-subtitle  leading-8">
              We deliver identity security through a modular, scalable approach
            </p>
          </div>
        </div>
        <div className="bg-[#F79549]/8 rounded-2xl p-4 md:p-10 shadow-sm">
          <div className="grid grid-cols-3 text-left border-b border-gray-200 pb-3 mb-3 font-semibold text-gray-800">
            <div>Phase</div>
            <div>Focus</div>
            <div>Key Capabilities</div>
          </div>

          {identityLifecycleData?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center text-left py-3 border-b border-gray-200 last:border-none text-xs md:text-sm lg:text-base"
            >
              <div className="font-medium text-gray-800">{item.phase}</div>
              <div className="text-gray-600">{item.focus}</div>
              <div className="text-gray-600 break-words leading-relaxed">
                {item.keyCapabilities}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStrategy;
