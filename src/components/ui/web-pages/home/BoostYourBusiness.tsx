import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { BoostYourBusinessItems } from "@/datas/pages/home";
import Link from "next/link";

const BoostYourBusiness = () => {
  return (
    <section className="container my-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <div className="text-[40px] font-normal text-[#262626] mb-5">
            <p className="!mb-1.5">Boost Your Business with Betopia</p>
            <p className="flex items-center justify-center gap-x-2">
              <span className="bg-primary text-white px-7 py-1.5 rounded-xl">
                Spotlight
              </span>
              <span>our portfolio</span>
            </p>
          </div>
          <p className="text-[#555555] mx-auto text-lg">
            Level up your business with cutting-edge solutions, expert minds,
            and flexible support. Let&#39;s make magic happen together.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Main Featured Item - Left */}
          <div className="relative group cursor-pointer h-full">
            <div className="rounded-[22px] overflow-hidden flex items-center justify-center relative h-full">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
              <Image
                src={"/BoostYourBusiness1.png"}
                alt="Featured"
                height={570}
                width={605}
                className="h-full w-full object-cover"
              />

              {/* Content overlay */}
              <div className="absolute bottom-[5%] text-[#858585] z-20 text-center">
                <div className="w-full flex flex-col items-center gap-4 px-4">
                  <p className="text-lg font-normal text-[#A1A0A0] text-center mb-2 max-w-[80%]">
                    A sleek and modern design, perfectly embodying minimalist
                    elegance with an innovative spirit and the firm.
                  </p>
                  <Link href={"/portfolio"} className="flex items-center gap-2 cursor-pointer text-[16px] font-medium hover:underline">
                    <span>Learn More</span>
                    <RiArrowRightLine className="text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Items */}
          <div className="flex flex-col gap-6 h-full">
            {BoostYourBusinessItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1"
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  height={570}
                  width={605}
                  className="h-full w-full object-cover"
                />

                {/* Content overlay - same as left */}
                <div className="absolute bottom-[7%] text-[#858585] z-20 text-center">
                  <div className="w-full flex flex-col items-start  px-[50px]"> 
                    <p className="text-2xl text-white pb-1">{item?.title}</p>
                    <p className="text-lg font-normal text-[#555555] text-start mb-2 max-w-[80%] pb-7">
                      {item.description}
                    </p>
                    <Link href={"/portfolio"} className="flex items-center gap-2 cursor-pointer text-[16px] font-medium hover:underline">
                      <span>Learn More</span>
                      <RiArrowRightLine className="text-primary" />
                    </Link>
                  </div>
                </div>

                {/* Background decoration */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradientClass} l`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostYourBusiness;
