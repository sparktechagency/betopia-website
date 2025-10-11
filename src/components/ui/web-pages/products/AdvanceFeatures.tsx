import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/productDetails/hrm-features/ai-report.png",
    title: "AI Reporting & Analytics",
    description:
      "Transform raw HR data into meaningful insights with AI-driven analytics. Instantly generate smart reports, spot trends, and forecast workforce needs — no manual analysis required.",
    bgColor: "bg-orange-50",
  },
  {
    icon: "/productDetails/hrm-features/talent-maching.png",
    title: "Talent Matching with Resume Parser",
    description:
      "Transform raw HR data into meaningful insights with AI-driven analytics. Instantly generate smart reports, spot trends, and forecast workforce needs — no manual analysis required.",
    bgColor: "bg-blue-50",
  },
  {
    icon: "/productDetails/hrm-features/ai-helpdesk.png",
    title: "AI HR Help Desk",
    description:
      "Provide instant employee support through an AI-powered virtual assistant. Handle HR queries, leave requests, and policy information efficiently anytime, anywhere.",
    bgColor: "bg-purple-50",
  },
];

const AdvanceFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Our Advance <span className="text-orange-500">features</span>
      </h2>
      <p className="text-gray-500 mb-12">
        All-in-One HR Solution Built for Modern Team
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-5">
        {features.map((feature, index) => (
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
