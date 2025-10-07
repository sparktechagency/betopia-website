import React from "react";
import OutlineButton from "@/components/shared/OutlineButton";
import Link from "next/link";

const CareerBanner: React.FC = () => {
  return (
    <div
      id="banner"
      className=" z-10 flex-center text-center h-screen text-white  "
    >
      <div className=" ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dreiyzj42/video/upload/v1757501078/career_page_jtr5wl.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

      {/* Content can go here */}
      <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
        <div className=" flex flex-col items-center justify-center   ">
          <h1 className="text-[#818181] text-[34px] lg:text-[64px] font-medium">
            <span className="text-white">Thrive </span> with Betopia’s{" "}
          </h1>
          <h1 className="text-[#818181]  text-[34px] lg:text-[64px] font-medium leading-[1px] pb-9">
            <span className="text-primary">Talent</span> Community
          </h1>
          <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[50%] tracking-wide ">
            Unleash Your Full Potential Within a Dynamic and Collaborative
            Environment That Drives Meaningful Global Impact Through Innovative
            Solutions.
          </p>
          <div className=" pt-[77px]">
            <Link href="#application" className="cursor-pointer">
              <OutlineButton className=" !py-4 !px-7 cursor-pointer">
                Find Your Opportunity
              </OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
