import Image from "next/image";
import React from "react";

interface advanceFeatureType {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}



const AdvanceFeatures = ({ advanceFeature }: { advanceFeature: advanceFeatureType[] }) => {
  return (
    <section className="pt-20 px-4 container mx-auto text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Our Advance <span className="text-primary">features</span>
      </h2>
      <p className="text-gray-500 mb-12">
        All-in-One HR Solution Built for Modern Team
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-5">
        {advanceFeature?.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgColor} rounded-2xl p-4 lg:p-8 text-left shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <Image
              width={56}
              height={56}
              src={feature.icon}
              alt="arrow"
              className="rounded-[12px]"
            />
            <h3 className="text-lg font-semibold my-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvanceFeatures;
