import ComponentTitle from "@/components/shared/ComponentTitle";
import { solutionHighlights } from "@/datas/pages/ServiceExtraComponentsData";
import Image from "next/image";
import React from "react";

const SolutionPortfolio = () => {
  return (
    <div className=" bg-[#F79549]/12 py-20 ">
      <div className=" flex-center mb-5">
        <ComponentTitle className=" !text-center pb-2 !font-semibold">
          {" "}
          <span className=" text-[#414042]"> Solution Portfolio </span>{" "}
          <span className="text-primary"> Highlights </span>{" "}
        </ComponentTitle>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2  gap-5 items-center">
        <div className="flex-center">
          <ul className="space-y-4">
            {solutionHighlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-gray-800"
              >
                <span className="text-orange-500 text-xl">👉</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Image
            src="/solution-portfolio.png"
            alt="solution-portfolio"
            width={600}
            height={600}
            className="w-full h-[595px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionPortfolio;
