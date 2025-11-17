import OutlineButton from "@/components/shared/OutlineButton";
import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";

interface IProductInfoProps {
  info: {
    title: React.ReactNode;
    description: string;
    subTitle?: string;
    imgUrl: string;
  };
}

const ProductInfo: React.FC<IProductInfoProps> = ({ info }) => {
  const { title, subTitle, description, imgUrl } = info;
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-20">
      <div>
        <div className=" flex flex-col gap-y-0  mb-4  ">
          <div className="section-title lg:leading-[50px]">{title}</div>
          {
            subTitle && <div>
              <p className="section-title  text-primary pb-0.5 ">{subTitle}</p>
              <p className="w-[300px] bg-primary h-0.5" /> 
            </div>
          }
        </div>
        <p className=" section-subtitle leading-[35px]">{description}</p>
        <OutlineButton className=" py-4! px-7! mt-6!">
          Book Now
        </OutlineButton>
      </div>
      <div className="w-full h-full">
        <Image
          src={imgUrl}
          alt="arrow"
          width={100}
          height={100}
          className="h-full w-full object-cover rounded-xl"
          unoptimized
        />
      </div>
    </div>
  );
};

export default ProductInfo;
