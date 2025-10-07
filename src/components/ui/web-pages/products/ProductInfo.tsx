import OutlineButton from "@/components/shared/OutlineButton";
import Image from "next/image";
import React from "react";

interface IProductInfoProps {
  info: {
    title: React.ReactNode;
    description: string;
    imgUrl: string;
  };
}

const ProductInfo: React.FC<IProductInfoProps> = ({ info }) => {
  const { title, description, imgUrl } = info;
  return (
    <div className="container flex flex-col md:flex-row items-center gap-10 mb-[80px]">
      <div>
        <h1 className="text-[32px] lg:text-[45px] lg:leading-[50px]">{title}</h1>
        <p className="text-[#666666] text-lg lg:text-[24px] leading-[35px]">
          {description}
        </p>
        <OutlineButton className=" !py-4 !px-7 !mt-6">
          Pre-Book Now
        </OutlineButton>
      </div>
      <div className="w-full h-[420px] relative">
        <Image
          src={imgUrl}
          alt="arrow"
          fill
          objectFit="cover"
          objectPosition="center"
          className="rounded-[12px]"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
