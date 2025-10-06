import React from "react";
import ComponentTitle from "./ComponentTitle";
import ContactForm from "./ContactForm";
import Image from "next/image";

const LetsWorkTogether = () => {
  return (
    <div className=" bg-[#F6934810] lg:px-[100px] py-20">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          {/* title */}
          <div className=" flex flex-col gap-2  pb-8">
            <ComponentTitle className=" !text-center pb-2">
              {" "}
              <span className=" text-[#000000]"> Lets Work </span>{" "}
              <span className="text-primary">Together</span>{" "}
            </ComponentTitle>
            <p className=" text-[#757575] text-lg ">
              Your infrastructure powers your business. From modernizing data
              centers to scaling cloud environments, we’ll help design and
              manage the right solution for your growth.{" "}
            </p>
          </div>
          <ContactForm />
        </div>

        <div>
          <Image
            src="/lets-work-together.png"
            alt="arrow"
            width={720}
            height={650}
            className=" rounded-[12px] object-cover md:h-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
