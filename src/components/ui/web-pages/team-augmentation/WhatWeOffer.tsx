import ComponentTitle from "@/components/shared/ComponentTitle";
import Image from "next/image";
import React from "react";

const weOfferData = [
  {
    image: "/augmentation/weOffer1.png",
    title: "Expand teams on demand",
    description: "Dedicated remote developers when you need them.",
  },
  {
    image: "/augmentation/weOffer2.png",
    title: "Accelerate Delivery",
    description: "Expert engineers, designers & PMs for faster results.",
  },
  {
    image: "/augmentation/weOffer3.png",
    title: "Predictable Costs",
    description: "Offshore team augmentation keeps budgets clear.",
  },
];
const WhatWeOffer = () => {
  return (
    <div>
      <div className=" -mt-6 mb-20">
        <div className="container mx-auto text-center">
          <ComponentTitle className="text-[#5A5A5A] flex-center pb-6">
            What We Offer{" "}
          </ComponentTitle>
          <div className=" flex-center w-full mb-10">
            <p className="text-center leading-[140%] tracking-wide section-subtitle !max-w-[600px]">
              Betopia Limited helps U.S. tech companies access{" "}
              <span className=" font-bold">
                pre vetted global IT professionals to{" "}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Expand Teams */}
            {weOfferData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[#41404270] font-semibold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
