import Image from "next/image";
import React from "react";
interface IBlogDetailsBannerProps {
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

const BlogDetailsBanner = ({
  img,
  title,
  subtitle,
  description,
}: IBlogDetailsBannerProps) => {
  return (
    <div id="banner" className=" z-10 flex-center text-center h-screen text-white  ">
      <div className=" ">
        <Image
          src={img}
          alt=""
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

      {/* Content can go here */}
      <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
        <div className=" flex flex-col items-center justify-center  w-full  ">
          <div className="text-[#818181]  text-[34px] lg:text-5xl 2xl:text-[64px] font-medium">
            {title}{" "}
          </div>
          <p className=" text-[#7E7E7E] text-[20px] lg:text-4xl 2xl:text-[57px]font-light lg:w-[60%] md:w-[70%] w-full text-center pb-9   ">
            {subtitle}{" "}
          </p>
          <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[70%] tracking-wide ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
