import OutlineButton from "@/components/shared/OutlineButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamAugmentationBanner = () => {
  return (
    <div className=" z-10 flex-center text-center h-screen text-white  ">
      <div className=" ">
        <img
          src={"/augmentation/teamBanner.png"}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

      {/* Content can go here */}
      <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#818181] text-[34px] lg:text-[64px] font-medium">
            <span className="text-white">Why Pay </span>
            <span className="text-primary"> $100k+ </span> for one Engineer?
          </p>
          <p className="text-[#7E7E7E] text-[20px] lg:text-[57px] font-light lg:w-[60%] md:w-[50%] w-full text-center pb-9">
            Scale Your Tech Team Smarter with Betopia
          </p>
          <p className="text-sm md:text-lg font-normal text-[#9B9B9B] lg:w-[45%] md:w-[50%] tracking-wide">
            Stop overspending on H-1B hires. Build high-performing global IT
            teams with Betopia Limited at 50–60% less cost without compromising
            quality, security, or delivery speed.
          </p>
          <div className="pt-[77px] flex flex-col md:flex-row items-center gap-5">
            <Link className="w-full md:w-auto" href="/contact">
              <OutlineButton className="!py-4 !px-7 !w-full">
                Request a Free Consultation
              </OutlineButton>
            </Link>

            <button
              className="rounded-[12px] flex items-center gap-2 h-11 px-4 bg-[#F79549] !text-xs md:!text-lg w-full md:w-auto"
              style={{ color: "white" }}
            >
              Get Talent Profiles <Image
                src="/agumentation/lock.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAugmentationBanner;
