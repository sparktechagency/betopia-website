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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[52px]">
        {BetopiaVisionData.map((data, index) => (
          <div
            key={index}
            className={` ${
              index === 0 ? " bg-[#FCD7BC]/50" : " bg-[#FEF4ED] "
            }  h-[322.4px] rounded-[12px]`}
          >
            <div className="flex items-center justify-center h-full w-full px-[32px]">
              <div>
                <div className="h-[48px] overflow-hidden mx-auto flex-center w-[48px] mb-[15px] bg-white rounded-[8px] shadow-2xl">
                  <Image
                    style={{ borderRadius: "8px" }}
                    src={data.img}
                    alt="Dubai"
                    width={60}
                    height={60}
                  />
                </div>

                <h2 className="text-[30px] font-semibold mb-[15px] text-center">
                  {data.name}
                </h2>
                <p className="text-[18px] text-center text-[#797979] leading-[160%] font-normal">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetopiaVision;
