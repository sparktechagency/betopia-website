import Image from "next/image";
import React from "react";

interface IFeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface IWhyChooseUsProps {
  description: string;
  imgUrl: string;
  features: IFeatureProps[];
}

const WhyChooseUs: React.FC<IWhyChooseUsProps> = ({
  description,
  imgUrl,
  features,
}) => {
  return (
    <div className="container my-[80px]">
      <div className="mb-[50px]">
        <h1 className="section-title text-black text-center">
          Why you <span className="text-[#FF9233]">choose us ?</span>{" "}
        </h1>
        <p className="text-center section-subtitle">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 !mb-2">
                <Image
                  width={56}
                  height={56}
                  src={feature.icon}
                  alt="arrow"
                  className="rounded-[12px]"
                />
                <p className="text-[#414042] text-[24px] leading-[24px] ">
                  {feature.title}
                </p>
              </div>
              <p className="text-[#6B7280] text-[18px] leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" h-[500px] rounded-2xl shadow-2xl w-full relative">
          <Image
            fill
            objectFit="cover"
            objectPosition="center"
            src={imgUrl}
            alt="arrow"
            className="rounded-[12px] object-cover h-full w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
