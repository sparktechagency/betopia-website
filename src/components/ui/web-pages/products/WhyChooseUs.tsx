import Image from "next/image";
import React from "react";

interface IFeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface IWhyChooseUs {
  description: string;
  imgUrl: string;
  features: IFeatureProps[];

}

interface IWhyChooseUsProps {
  whyChooseUs: IWhyChooseUs
  product: string | null
  ourExpectation?: boolean
}

const WhyChooseUs: React.FC<IWhyChooseUsProps> = ({
  whyChooseUs,
  product,
  ourExpectation
}) => {

  const { description, imgUrl, features } = whyChooseUs

  return (
    <div className="container my-[80px]">

      <div className="mb-[50px]">
        {
          product === "partnerProgram" && whyChooseUs && !ourExpectation ? (
            <div className="flex flex-col section-title  text-center gap-0.5 pb-2">
              <p className="text-black">Why you choose</p>
              <p className="text-primary">Betopia partner Program ?</p>
            </div>
          ) :
            product === "partnerProgram" && ourExpectation ? (
              <p className="section-title text-black text-center mb-2">
               Our Expectation from <span className="text-primary">Clients</span>
              </p>
            ) :
              (
                <p className="section-title text-black text-center mb-2">
                  Why you <span className="text-primary">choose us ?</span>
                </p>

              )
        }
        <p className="text-center section-subtitle !text-lg">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 !mb-2">
                <Image
                  width={56}
                  height={56}
                  src={feature.icon}
                  alt="arrow"
                  className="rounded-[12px] object-cover"
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
