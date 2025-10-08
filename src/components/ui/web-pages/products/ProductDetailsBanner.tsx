import Link from "next/link";
import React from "react";
import OutlineButton from "@/components/shared/OutlineButton";
import Image from "next/image";

interface IProductDetailsBannerProps {
  banner: {
    heading: string;
    subHeading: string;
    description: string;
    imgUrl: string;
  };
}

const ProductDetailsBanner: React.FC<IProductDetailsBannerProps> = ({
  banner,
}) => {
  const { heading, subHeading, description, imgUrl } = banner;
  return (
    <div
      id="banner"
      className=" z-10 flex-center text-center h-[calc(100vh-50px)] md:h-screen text-white  "
    >
      <div className=" ">
        <Image
          src={imgUrl}
          alt=""
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

      {/* Content can go here */}
      <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden md:h-[calc(100vh-105px)] ">
        <div className=" flex flex-col items-center justify-center  w-full  ">
          <div className="text-[#818181] text-[34px] lg:text-5xl 2xl:text-[64px] font-medium mb-4">
            {heading}{" "}
          </div>
          <p className=" text-[#F79549] text-[20px] lg:text-4xl 2xl:text-[57px] font-semibold lg:w-[60%] md:w-[70%] w-full text-center pb-9   ">
            {subHeading}{" "}
          </p>
          <p className=" text-sm md:text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[70%] tracking-wide ">
            {description}
          </p>
          <Link href="/contact" className=" pt-[77px]">
            <OutlineButton className="cursor-pointer !py-4 !px-7">
              Need That Product ?
            </OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsBanner;
