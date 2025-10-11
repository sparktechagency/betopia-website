import ComponentTitle from "@/components/shared/ComponentTitle";
import Image from "next/image";
import React from "react";

interface strategyPointType {
  title: string;
  list?: string[];
  description?: string;
}
interface OurStrategyWorkflowType {
  description?: string;
  strategyPoint: strategyPointType[];
  footer: {
    title: string;
    description?: React.ReactNode;
  };
}
const OurStrategyWorkflow = ({ value }: { value: OurStrategyWorkflowType }) => {
  return (
    <div className="bg-[#F79549]/8  py-10">
      <div className="container ">
        {/* content  */}
        <div className=" grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className=" pb-6">
              <ComponentTitle className=" !text-center pb-2 !font-semibold">
                {" "}
                <span className=" text-[#414042]"> Our Strategy & </span>{" "}
                <span className="text-primary"> Workflow </span>{" "}
              </ComponentTitle>

              {value?.description && (
                <div className=" w-full gap-0.5 ">
                  <p className="section-subtitle lg:!max-w-[500px] text-center lg:text-start !mx-0  leading-8">
                    {value?.description}
                  </p>
                </div>
              )}
            </div>
            <Image
              src="/our-strategy-workflow.png"
              alt="our-strategy-workflow"
              width={500}
              height={500}
              className="w-full md:h-[487px] object-cover"
            />
          </div>

          <div>
            <div className="space-y-6 grid md:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-1">
              {value?.strategyPoint.map((point, index) => (
                <div key={index} className="grid grid-cols-8 items-start  gap-4">
                  {/* Number circle */}
                  <div className="col-span-2 lg:col-span-1 h-[50px] w-[50px] lg:w-[70px] lg:h-[70px] flex items-center justify-center  bg-[#FF7F5C] text-white font-bold rounded-full text-3xl lg:text-[40px] ">
                    {index + 1}
                  </div>

                  {/* Text */}
                  <div className="col-span-6 lg:col-span-7">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {point.title}
                    </h4>
                    <div>
                      {point?.list && (
                        <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed space-y-1">
                          {point.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      {point?.description && (
                        <div className="text-gray-600 text-sm leading-relaxed">
                          {point.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* footer  */}
        <div className=" flex flex-col items-center justify-center gap-y-2 pt-8">
          <p className=" text-lg lg:text-2xl lg:font-bold text-[#414042] ">
            {value?.footer?.title}
          </p>
          {value?.footer?.description && (
            <div className=" text-xl font-normal text-[#414042]/60 ">
              {value?.footer?.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurStrategyWorkflow;
