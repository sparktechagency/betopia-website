import ComponentTitle from "@/components/shared/ComponentTitle";
import { BetopiaVisionData } from "@/datas/pages/career";
import Image from "next/image";
import React from "react";

const BetopiaVision: React.FC = () => {
  return (
    <div className="container">
      <ComponentTitle className=" flex-center pb-6">
        Grow with <span className="text-primary">Betopia’s Vision</span>
      </ComponentTitle>
      <p className="text-center section-subtitle leading-[140%] text-[#2D4E75] font-light">
        Principles guide everything we do and help us build a culture where
        everyone can thrive and excel professionally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] mt-[52px] items-stretch">
        {BetopiaVisionData.map((data, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "bg-[#FCD7BC]/50" : "bg-[#FEF4ED]"
            } rounded-[12px] flex flex-col justify-center h-full`}
          >
            <div className="flex flex-col items-center justify-center text-center flex-grow px-[32px] py-6">
              <div className="h-[48px] w-[48px] flex-center mb-[15px] bg-white rounded-[8px] shadow-2xl overflow-hidden">
                <Image
                  style={{ borderRadius: "8px" }}
                  src={data.img}
                  alt={data.name}
                  width={60}
                  height={60}
                />
              </div>

              <h2 className="text-[24px] md:text-[30px] font-semibold mb-[15px]">
                {data.name}
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#797979] leading-[160%] font-normal flex-grow">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetopiaVision;
