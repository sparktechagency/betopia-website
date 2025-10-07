import ComponentTitle from "@/components/shared/ComponentTitle";
import Link from "next/link";
import React from "react";
import SGConference from "./SGConference";

const Planning: React.FC = () => {
  return (
    <div className="container w-full">
      <ComponentTitle className="flex-center pb-4 text-[#535353]">
        {" "}
        Enterprise Resource{" "}
        <span className=" text-primary">Planning (ERP)</span>
      </ComponentTitle>
      <div className=" w-full flex-center flex-col gap-0.5">
        <p className="text-[20px] text-[#000000] text-center  md:w-1/2 leading-8">
          In today&apos;s fast-paced business landscape, ERP systems integrate
          core processes to streamline operations and drive growth.
        </p>
      </div>

      <div className="mt-[43px] flex-center gap-2 md:gap-[30px] mb-[100px] ">
        <Link href={"#more"}>
        <button className="bg-[#F69348] cursor-pointer !text-sm md:text-base rounded-[5px] w-full md:w-[296px] h-[50px]">
          <span className="text-white">Deep Drive into the Spotlight</span>
        </button>
        </Link>
      </div>

      <div
        className=" mb-[92px]  w-auto h-[770px] rounded-[22px]"
        style={{
          backgroundImage: `url(/images/planning.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 22,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-[#000000E5] from-10%  to-[#6666661A] to-90% rounded-[22px] p-[74px] flex items-end">
          <p className="text-4xl font-light text-white leading-12">
            Enterprise Resource <br /> Planning (ERP)
          </p>
        </div>
      </div>

      <SGConference />
    </div>
  );
};

export default Planning;
