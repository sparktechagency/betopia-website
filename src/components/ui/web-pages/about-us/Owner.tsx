import React from "react";
import Image from "next/image";
import { owners } from "@/datas/pages/about";
const Owner: React.FC = () => {
  return (
    <div className=" lg:my-20 ">
      <div className="flex flex-col gap-y-[140px]">
        {owners.map((owner, index) => (
          <div
            key={index}
            className={` h-auto  w-full   ${
              (index + 1) % 2 === 0
                ? "bg-gradient-to-r from-white from-30%  to-[#f99b4e]"
                : " bg-gradient-to-l from-white from-30%  to-[#f99b4e]"
            }   `}
          >
            <div
              className={` w-full  flex container
                        ${
                          (index + 1) % 2 === 0
                            ? "flex-col md:flex-row justify-end"
                            : "flex-col md:flex-row-reverse justify-end"
                        }
                        rounded-[12px] mb-10 items-center gap-10
                        `}
            >
              <div className={` lg:w-1/2 `}>
                <Image
                  src={owner.imageUrl}
                  alt="Dubai"
                  width={466}
                  height={664}
                  className=" -mt-32"
                />
              </div>

              <div
                className={` w-full lg:py-14 justify-center   ${
                  (index + 1) % 2 === 0 ? " justify-end " : " justify-start "
                }  flex flex-col  `}
              >
                <h1 className="text-[34px] md:text-[40px] font-normal text-[#555555] tracking-wide pb-5">
                  {" "}
                  <span className=" text-[#763300]"> &quot; </span>{" "}
                  {owner.slogan}{" "}
                  <span className=" text-[#763300]"> &quot; </span>
                </h1>
                <p className=" text-[22px] text-[#2A2A2A]  lg:w-[79%] md:text-justify pb-10">
                  {owner.bio}
                </p>
                <div className=" flex flex-col ">
                  <p className="text-2xl  text-[#2A2A2A] font-medium ">
                    {owner.name}
                  </p>
                  <p className="text-xl  text-[#2A2A2A]">{owner.role}</p>
                  <p className="text-[22px]  text-[#2A2A2A] font-medium">
                    Betopia Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Owner;
