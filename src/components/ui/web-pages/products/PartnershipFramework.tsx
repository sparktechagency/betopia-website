import { p } from "motion/react-client";
import Image from "next/image";
import React from "react";

interface partnershipFrameworkType {
  icon: string;
  title: string;
  list?: string[];
  bgColor: string;
  des?: string;
}

const PartnershipFramework = ({
  partnershipFramework,
  product,
}: {
  partnershipFramework: partnershipFrameworkType[];
  product: string | null;
}) => {
  return (
    <section className=" px-4 container mx-auto text-center lg:pt-20 pt-10">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        {product === "votingSystem" ? (
          <>
            Use <span className="text-primary">Cases</span>
          </>
        ) : product === "agenticAI" ? (
          <>
            Where Agentic AI <span className="text-primary">Works Best</span>
          </>
        ) : (
          <>
            Partnership <span className="text-primary">Framework</span>
          </>
        )}
      </h2>

      {product === "agenticAI" ? (
        <p className="text-lg text-[#757575] lg:w-[45%] mx-auto">
          From outreach to retention, Agentic AI automates every step of the
          sales process delivering efficiency, accuracy, and measurable results.
        </p>
      ) : (
        ""
      )}

      {/* Features Grid */}
      <div
        className={`grid grid-cols-1 ${
          product === "agenticAI" ? "md:grid-cols-4" : "md:grid-cols-3"
        } gap-4 lg:gap-6 mt-12`}
      >
        {partnershipFramework?.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgColor} rounded-2xl p-4 lg:p-8 text-left shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className=" flex lg:flex-row flex-col gap-2 items-center mb-6">
              <Image
                width={32}
                height={32}
                src={feature.icon}
                alt="arrow"
                className="rounded-xl"
              />
              <h2 className="text-2xl font-semibold  text-primary">
                {feature.title}
              </h2>
            </div>
            {feature?.list && (
              <ul className="list-disc pl-5 grid grid-cols-1 gap-2 text-[#757575]">
                {feature.list?.map((item: string, index: number) => (
                  <li className="text-[#757575] text-[18px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {feature.des && (
              <p className="text-[#757575] text-[18px] leading-relaxed mt-2">
                {feature.des}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipFramework;
