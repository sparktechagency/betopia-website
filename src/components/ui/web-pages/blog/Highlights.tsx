import ComponentTitle from "@/components/shared/ComponentTitle";
import { HighlightsData } from "@/datas/pages/blog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Highlights: React.FC = () => {
  return (
    <div className="container mb-20" id="more">
      <ComponentTitle className=" text-[#646464] pb-9">
        More <span className="text-primary">Highlights</span>{" "}
      </ComponentTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {HighlightsData.map((data, index) => (
          <div key={index} className="bg-[#F7954914] rounded-[20px] p-6">
            <div className=" flex-center  mb-[15px] rounded-[8px] drop-shadow-2xl">
              <Image
                style={{ borderRadius: "8px" }}
                src={data.img}
                alt={data.title}
                width={500}
                height={400} 
                className=" w-full h-[350px] object-cover"
              />
            </div> 
            <p className="text-[#000000] text-2xl pb-2 ">
              {data.title}
            </p>


            <p className="text-[#414042] leading-5  pb-5">
              {data.content}
            </p> 
            <div className=" absolute bottom-4"> 
            <Link
              href={`/blog-details?blog=${data.linkName}`}
              className="flex items-center justify-start gap-2 pt-6"
            >
              <p className="text-[#858585] font-semibold">Learn more</p>
              <MoveRight size={15} color="#F69348" />
            </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={`/products`}
        className="flex items-end justify-end mt-3 gap-2 cursor-pointer text-[16px] hover:underline"
      >
        <span>Read More Updates</span>{" "}
        <span>
          {" "}
          <RiArrowRightLine className="text-primary" />{" "}
        </span>
      </Link>
    </div>
  );
};

export default Highlights;
