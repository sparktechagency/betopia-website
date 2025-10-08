import { ServicesArray } from "@/datas/pages/home";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="mb-10 container">
      <h1 className="text-center section-title  font-light ">
        Highly Effective <span className="text-primary">Solutions</span>
      </h1>
      <p className="text-center max-w-[800px] mx-auto section-subtitle  tracking-wide">
        Betopia Limited offers innovative cloud modernization and managed
        services to enhance business efficiency.
      </p>

      <div className="grid grid-cols-1 gap-10 md:gap-20 mt-10">
        {ServicesArray?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={` ${
                  index % 2 === 0
                    ? "flex flex-col md:flex-row items-center gap-4 md:gap-10"
                    : "flex flex-col md:flex-row-reverse items-center gap-4 md:gap-10 "
                }`}
              >
                <div
                  className="w-full h-[504px]  bg-black/60 rounded-xl"
                  style={{
                    backgroundImage: `url(${item.imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div>
                  <h1 className="text-[24px] leading-[32px] text-[#414042] font-light">
                    {item.title}
                  </h1>
                  <p className="text-[#41404299]/70  leading-[22px]">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 gap-4 mt-10">
                    {item?.service?.map((service, index) => (
                      <Link
                        href={`/services?service=${service}`}
                        key={index}
                        className="flex items-center justify-between gap-4"
                      >
                        <p>{service.title}</p>
                        <Link href={`${service.link}`}>
                          <div className="w-[48px] bg-[#F79549] h-[48px] rounded-full flex items-center justify-center">
                            <ChevronRight size={24} color="white" />
                          </div>
                        </Link>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
