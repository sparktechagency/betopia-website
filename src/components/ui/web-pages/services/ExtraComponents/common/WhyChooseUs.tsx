/* eslint-disable @next/next/no-img-element */
import ComponentTitle from "@/components/shared/ComponentTitle";
import Image from "next/image";
import React from "react";

interface reasonType {
  imgUrl: string;
  bgColorCode: string;
  title: string;
  description: string;
}
interface WhyChooseUsProps {
  imgUrl: string;
  title: string;
  reasons: reasonType[];
}
const WhyChooseUs = ({ items }: { items: WhyChooseUsProps }) => {
  return (
    <div className=" container  ">
      <div className="md:w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-1 my-11">
          <p className=" font-bold text-[16px] pb-1">
            {" "}
            <span>
              {" "}
              WHY CHOOSE <span className="text-primary"> US</span>
            </span>
          </p>
          <ComponentTitle className=" !text-center pb-2">
            {" "}
            <span className=" text-[#414042]"> {items?.title} </span>{" "}
          </ComponentTitle>
        </div>

        <div className=" flex flex-col md:flex-row items-center gap-10">
          <div className=" md:w-[50%] flex flex-col gap-y-10">
            {items?.reasons?.map((item, index) => (
              <div key={index} className=" flex items-center gap-3">
                <div>
                  <div
                    className=" w-[70px] h-[70px] flex-center rounded-full"
                    style={{ backgroundColor: item?.bgColorCode }}
                  >
                    <img src={item?.imgUrl} alt="" className=" w-11 h-11" />
                  </div>
                </div>

                <div className=" flex flex-col gap-y-0">
                  <p className=" font-medium  text-xl mb-1">{item?.title}</p>
                  <p className=" text-sm font-medium text-[#414042]/60">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" md:w-[50%]">
            <Image
              src={items?.imgUrl}
              alt=""
              height={760}
              width={600}
              className=" w-full md:h-[700px] object-cover md:object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
