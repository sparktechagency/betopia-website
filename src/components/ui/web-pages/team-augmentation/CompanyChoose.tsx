import OutlineButton from "@/components/shared/OutlineButton";
import { ChooseBetopiaReasons } from "@/datas/pages/teamAugmentation";
import Image from "next/image";
import React from "react";

const CompanyChoose = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className=" w-full flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="md:w-[50%]">
          <p className=" pb-4 text-[#535353] text-3xl md:text-[40px] font-normal leading-12 md:w-[85%]">
            {" "}
            Why U.S. Companies Choose{" "}
            <span className=" text-primary">Betopia Limited</span>{" "}
          </p>
        </div>

        <div className=" flex flex-col gap-8 md:w-[50%]">
          <p className="text-[#41404280] text-lg  ">
            {" "}
            U.S. companies trust Betopia Limited for faster hiring, global
            talent access, enterprise grade security, and cost effective
            scalable teams.{" "}
          </p>
          <div>
            <OutlineButton className="mx-auto p-4 !text-[#656565] font-semibold">
              Request a Free Cost Analysis
            </OutlineButton>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 ">
        <div className="md:w-[55%] h-[609]">
          <Image
            src={"/augmentation/chooseCompany.png"}
            alt="Featured"
            width={605}
            height={570}
            className="h-full w-full object-cover "
          />
        </div>

        <div className="md:w-[45%] flex flex-col gap-6">
          {ChooseBetopiaReasons?.map((item, index) => (
            <div key={index} className=" flex flex-row items-center gap-4">
              <div className="">
                <Image
                  src={item.imgUrl}
                  alt="icon"
                  width={120}
                  height={100}
                  className=" object-cover"
                />
              </div>

              <div>
                <p className="text-[#414042] text-lg font-bold">{item.title}</p>
                <p className="text-[#41404280] text-lg font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyChoose;
