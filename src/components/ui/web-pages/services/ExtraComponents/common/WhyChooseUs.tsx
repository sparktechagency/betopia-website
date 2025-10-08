/* eslint-disable @next/next/no-img-element */
import ComponentTitle from "@/components/shared/ComponentTitle";
import Image from "next/image";
import React from "react";

interface ReasonType {
  imgUrl: string;
  bgColorCode: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  imgUrl: string;
  title: string;
  reasons: ReasonType[];
}

const WhyChooseUs = ({ items }: { items: WhyChooseUsProps }) => {
  return (
    <div className="container my-16">
      {/* Header */}
      <div className="!text-center mb-10">
        <p className="font-bold text-[16px]">
          WHY CHOOSE <span className="text-primary">US</span>
        </p>
        <h1 className="section-title text-center">{items?.title}</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Reasons */}
        <div className="grid gap-8">
          {items?.reasons?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_auto] gap-4 items-start"
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full"
                style={{ backgroundColor: item?.bgColorCode }}
              >
                <img
                  src={item?.imgUrl}
                  alt={item?.title}
                  className="w-11 h-11 object-contain"
                />
              </div>

              <div>
                <p className="font-semibold text-xl mb-1">{item?.title}</p>
                <p className="text-sm font-medium text-[#414042]/60 leading-relaxed">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-full flex justify-center">
          <Image
            src={items?.imgUrl}
            alt="Why Choose Us"
            height={760}
            width={600}
            className="w-full md:h-[700px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
