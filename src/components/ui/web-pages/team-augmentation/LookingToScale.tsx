import Image from "next/image";
import React from "react";

const LookingToScale = () => {
  return (
    <div className=" relative mt-[60px]">
      <div className="py-[100px] container md:px-20 relative">
        <div className=" bg-[#E8DDD4] rounded-3xl  lg:h-[450px] w-full flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-[60%] ">
            {/* Left Content */}
            <div className="flex-1 pt-56 md:pt-0 p-4 md:ps-[96px]  z-10  gap-y-10 ">
              <h2 className=" text-2xl md:text-[32px] font-semibold text-[#414042] leading-11 ">
                Looking to scale your IT capabilities without the $100K+ hiring
                burden?
              </h2>

              <p className="text-[#7A7A7A] text-lg  leading-relaxed  ">
                Betopia Limited delivers IT staff augmentation services tailored
                for speed, cost-efficiency, and enterprise-grade security.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button className="bg-primary  !text-white font-semibold px-8 h-[55px] rounded-full text-base ">
                  Book Your Free Consultation
                </button>

                <button className="border-2 border-primary !text-primary  font-semibold px-8 h-[55px] rounded-full ">
                  Talk to Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full absolute -top-14 md:top-0 right-11 md:right-28 flex justify-end ">
          <div className="  md:w-[400px]  md:h-[500px] ">
            <Image
              src="/augmentation/personImg.png"
              alt="Professional businessman in suit with crossed arms"
              height={400}
              width={400}
              className="w-[300px] h-[380px] md:h-[550px] object-cover lg:object-contain  object-top lg:object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingToScale;
