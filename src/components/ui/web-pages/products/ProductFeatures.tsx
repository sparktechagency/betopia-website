import Image from "next/image";
import React from "react";

interface IFeatureProps {
  title: React.ReactNode;
  description?: string;
  list?: string[];
  icon: string;
}

interface IProductFeaturesProps {
  features: IFeatureProps[];
  product: string | null;
}

const ProductFeatures: React.FC<IProductFeaturesProps> = ({
  features,
  product,
}) => {
  return (
    <div className="bg-[#F693480D]/95 py-10 md:py-[100px]">
      <div className="container">
        <h1 className="text-[#414042] section-title md:leading-10 text-center">
          {product === "votingSystem" ? (
            <>
              Core Features <br />
              That Power Secure{" "}
              <span className="text-[#FF9233]">Digital Voting</span>{" "}
            </>
          ) : product === "agenticAI" ? (
            <>
              Core Features <br /> Power{" "}
              <span className="text-[#FF9233]">Intelligent Selling</span>{" "}
            </>
          ) : (
            <>
              Our Comprehensive <span className="text-[#FF9233]">Features</span>
            </>
          )}
        </h1>
        <p className="text-[#757575]  section-subtitle leading-6 text-center">
          {product === "votingSystem"
            ? "Discover how Betopia’s advanced digital voting system simplifies election management through automation, transparency, and user-centric design."
            : product === "agenticAI"
            ? "Discover how Agentic AI empowers your business through data-driven automation, human-like communication, and seamless integration."
            : "All-in-One HR Solution Built for Modern Team"}
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            product === "partnerProgram" || "votingSystem"
              ? "lg:grid-cols-3"
              : "lg:grid-cols-4"
          }  gap-5 mt-10`}
        >
          {features?.map((feature, index) => (
            <div
              key={index}
              className="border bg-white border-[#4747474F]/69 rounded-xl py-10 px-4"
            >
              <div className="mb-[29px] flex items-center gap-2">
                <Image
                  width={36}
                  height={36}
                  src={feature.icon}
                  alt="arrow"
                  className="rounded-xl"
                />
                <h2
                  className={`text-primary font-medium ${
                    product === "partnerProgram" ? "text-[20px]" : "text-2xl"
                  } `}
                >
                  {feature.title}
                </h2>
              </div>

              {feature.list && (
                <ul className="list-disc pl-5 grid grid-cols-1 gap-2 text-[#757575]">
                  {feature.list?.map((item: string, index: number) => (
                    <li className="text-[#757575] text-[18px]" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {feature.description && (
                <p className="text-[#757575] text-[18px]">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
