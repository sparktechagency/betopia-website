import ComponentTitle from "@/components/shared/ComponentTitle";
import { solutionHighlights } from "@/datas/pages/ServiceExtraComponentsData";
import Image from "next/image";
import React from "react";

const SolutionPortfolio = () => {
  return (
    <section className="bg-[#F79549]/10 py-16 md:py-20">
      {/* Title */}
      <div className="flex justify-center mb-10 px-4 lg:px-5">
        <ComponentTitle className="!text-center pb-2 !font-semibold">
          <span className="text-[#414042]">Solution Portfolio</span>{" "}
          <span className="text-primary">Highlights</span>
        </ComponentTitle>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-8">
        {/* Left Side — List */}
        <ul className="space-y-4 md:space-y-5">
          {solutionHighlights.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-base md:text-lg text-gray-800"
            >
              <span className="text-primary text-xl md:text-2xl">👉</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        {/* Right Side — Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/solution-portfolio.png"
            alt="Solution Portfolio Highlights"
            width={600}
            height={600}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto lg:h-[400px] 2xl:h-[600px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionPortfolio;
