import ComponentTitle from "@/components/shared/ComponentTitle";
import OutlineButton from "@/components/shared/OutlineButton";
import { industriesWeServeData } from "@/datas/pages/teamAugmentation";
import Image from "next/image";
import React from "react";

const IndustriesWeServe = () => {
  return (
    <div
      className="py-10 relative lg:h-[680px] w-full"
      style={{
        backgroundImage: "url(/augmentation/industriesWeServeBg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <ComponentTitle className="pb-6 flex-center">
          Industries We <span className="text-primary"> Serve </span>
        </ComponentTitle>

        <div className="flex flex-col justify-center items-center">
          <p className="md:w-[40%] text-[#414042]/60 text-lg font-normal text-center pb-6">
            Timeline infographic design elements with circle shapes and
            marketing icons. Business concept with 4 options, steps or
            processes.
          </p>
        </div>

        <div className=" flex-center">
          <OutlineButton className="mx-auto !p-4 text-[#414042]">
            Book Your Free Consultation
          </OutlineButton>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 py-8">
          {industriesWeServeData.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1"
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
              <Image
                src={item.bgImgUrl}
                alt={item.title}
                height={350}
                width={605}
                className="h-[350px] w-full object-cover"
              />

              {/* Content overlay - same as left */}
              <div className="absolute bottom-[10%] text-[#858585] z-20 ">
                <div className="w-full flex flex-col items-start   px-4">
                  <p className="pb-3 text-[#F79549]"> {item?.icon} </p>
                  <p className="text-[18px] text-white font-bold pb-1">
                    {item?.title}
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
    </div>
  );
};

export default IndustriesWeServe;
