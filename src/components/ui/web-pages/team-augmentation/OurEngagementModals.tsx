import ComponentTitle from "@/components/shared/ComponentTitle";
import OutlineButton from "@/components/shared/OutlineButton";
import { OurEngagementModalsData } from "@/datas/pages/teamAugmentation";
import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { PiNetwork } from "react-icons/pi";

const OurEngagementModals = () => {
  return (
    <div className="container mx-auto mb-10 md:mb-12 lg:mb-20">
      <div className=" pb-14">
        <ComponentTitle className="flex-center pb-4 text-[#535353]">
          {" "}
          Our Engagement <span className=" text-primary">Models</span>
        </ComponentTitle>
        <p className="text-[#41404280] section-subtitle font-medium text-center">
          We provide flexible IT team augmentation services:
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Main Featured Item - Left */}
          <div className="relative group cursor-pointer h-[750px]">
            <div className="rounded-[22px] overflow-hidden flex items-center justify-center relative h-full">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#666666]/50 to-[#000000]/80"></div>
              <Image
                src={"/augmentation/ourEngagement1.jpg"}
                alt="Featured"
                height={570}
                width={605}
                className="h-full w-full object-cover object-top-right"
              />

              {/* Content overlay */}
              <div className="absolute left-10 bottom-[9%] text-[#858585] z-20 text-">
                <div className="w-full flex flex-col items-start gap-1 px-4">
                  <p>
                    {" "}
                    <FaUsers size={62} color="#F79549" />{" "}
                  </p>
                  <p className="text-[32px] text-primary pb-1">
                    Dedicated Team
                  </p>
                  <p className="text-2xl font-normal text-white  mb-2 ">
                    Long-term extension of your in-house team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Items */}
          <div className="flex flex-col gap-6 h-full">
            {OurEngagementModalsData?.map((item, index) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1"
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  height={350}
                  width={605}
                  className="h-[350px] w-full object-cover"
                />

                {/* Content overlay - same as left */}
                <div className="absolute bottom-[11%] text-[#858585] z-20 text-center">
                  <div className="w-full flex flex-col items-start  px-[50px]">
                    <p className="pb-3">
                      {" "}
                      {index === 1 ? (
                        <PiNetwork size={52} color="#F79549" />
                      ) : (
                        <ImPower size={42} color="#F79549" />
                      )}{" "}
                    </p>
                    <p className="text-[28px] text-primary pb-1">
                      {item?.title}
                    </p>
                    <p className="text-xl font-normal text-white text-start  mb-2 ">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Background decoration */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradientClass} l`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className=" pt-10 md:pt-[60px] flex items-center justify-center">
          <button
            className="rounded-[12px] flex items-center gap-2 h-11 px-4 bg-[#F79549] !text-xs md:!text-lg w-full md:w-auto"
            style={{ color: "white" }}
          >
            Get Talent Profiles{" "}
            <Image
              src="/agumentation/lock.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurEngagementModals;
