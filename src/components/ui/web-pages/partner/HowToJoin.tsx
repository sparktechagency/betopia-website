import ComponentTitle from "@/components/shared/ComponentTitle";
import OutlineButton from "@/components/shared/OutlineButton";
import { HowToJoinData } from "@/datas/pages/partnerdata";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowToJoin: React.FC = () => {
  return (
    <div className="container my-20">
      <ComponentTitle className="text-[#5A5A5A] flex-center pb-6 ">
        {" "}
        How to <span className="text-primary">join</span>{" "}
      </ComponentTitle>
      <div className=" w-full flex-center flex-col gap-7">
        <p className="text-center section-subtitle ">
          Learn about the straightforward steps to become a partner and start
          the collaboration process.
        </p>
        <Link href={"/become-partner"}>
          <OutlineButton className=" px-6 py-4 !text-[#616161] !text-lg ">
            {" "}
            Apply to Become a Partner{" "}
          </OutlineButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[50px] my-[52px]">
        {HowToJoinData.map((data, index) => (
          <div
            key={index}
            className="bg-[#F693481A]/90 rounded-[12px] flex flex-col justify-center items-center px-[32px] py-6 h-full "
          >
            <div className="flex flex-col flex-grow">
              <div className="h-[48px] w-[48px] flex-center mb-[32px] bg-white rounded-[8px] drop-shadow-2xl overflow-hidden">
                <Image
                  style={{ borderRadius: "8px" }}
                  src={data.img}
                  alt={data.name}
                  width={60}
                  height={60}
                />
              </div>

              <h2 className="text-[20px] md:text-[21px] font-bold mb-4">
                {data.name}
              </h2>
              <h2 className="text-[16px] md:text-[18px] text-[#737373] leading-[160%] flex-grow">
                {data.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToJoin;
