import { CEOQuotes } from "@/datas/pages/partnerdata";
import Image from "next/image";

const CEOQuote = () => {
  return (
    <div className="">
      <div className="flex flex-col ">
        {CEOQuotes.map((owner, index) => (
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
                                        ? " flex-col md:flex-row justify-end"
                                        : " flex-col md:flex-row-reverse justify-end"
                                    }
                                    rounded-[12px]  items-center    gap-10
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

              <div className={` w-full py-14 justify-center  flex flex-col  `}>
                <h1 className=" text-[48px] font-normal text-white tracking-wide pb-5 flex items-center gap-4">
                  {" "}
                  <span className=" text-[#763300]"> &quot; </span>{" "}
                  {owner.slogan}{" "}
                  <span className=" text-[#763300]"> &quot; </span>
                </h1>
                <p className=" text-[22px] text-[#424242]  md:w-[79%] text-justify pb-10 tracking-wider leading-8">
                  {owner.bio}
                </p>
                <div className=" flex flex-col gap-y-0.5 ">
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

export default CEOQuote;
