import Image from "next/image";
import React from "react";

// import FeaturedProducts from './FeaturedProducts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceDetails = ({ serviceData }: { serviceData: any }) => {
  return (
    <div className="mb-20 ">
      {/* <ServiceTitle serviceData={serviceData} />
            <SubServices serviceData={serviceData} /> */}
      {/* <FeaturedProducts />  */}

      <div className="flex md:flex-row flex-col items-center justify-between  gap-[33px]  container mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-[40px] font-medium text-[#414042] mb-1">
            {serviceData?.details?.title}
          </h2>
          <h2 className="text-[40px] font-medium text-primary mb-1">
            {serviceData?.details?.subtitle}
          </h2>
          <p className="w-[245px] h-[3px] bg-primary" />
          <div className=" flex flex-col gap-4 mt-4 ">
            {serviceData?.details?.description?.map(
              (point: string, index: number) => (
                <p key={index} className="text-2xl  text-[#666666] ">
                  {point}
                </p>
              )
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src={serviceData?.details?.imgUrl}
            alt="IT Solutions"
            height={530}
            width={1200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
