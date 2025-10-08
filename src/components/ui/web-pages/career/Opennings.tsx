import ComponentTitle from "@/components/shared/ComponentTitle";
import { OpeningsData } from "@/datas/pages/career";
import { ConfigProvider, Input, Select } from "antd";
import { Clock, DollarSign, MapPinned, Search, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Opennings: React.FC = () => {
  return (
    <div className="container mt-20" id="application">
      <ComponentTitle className="  flex-center pb-6 ">
        Current <span className="text-primary">Openings</span>
        at Betopia
      </ComponentTitle>
      <p className="text-center section-subtitle  lg:leading-[140%]  font-light">
        Discover a Range of Exciting Roles Across Our HRM, POS, and ERP
        Divisions— <br className="hidden md:block" /> Apply Now to Start Making
        an Impact.
      </p>

      <div className="border border-[#4747474F]/31 rounded-[9px]  mt-[52px] px-[37px] py-[27px] flex-center gap-5 flex-wrap md:flex-nowrap">
        <Input
          prefix={<Search />}
          placeholder="Search Jobs"
          style={{ backgroundColor: "#F3F3F5", border: "none", width: "100%" }}
          className=" h-[40px] rounded-[10px]"
        />
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "#F3F3F5",
                colorBorder: "transparent",
              },
            },
          }}
        >
          <Select
            defaultValue="All Departments"
            style={{
              height: "40px",
              width: "90%",
              backgroundColor: "#F3F3F5",
              border: "none",
            }}
            className=" rounded-[10px] "
          ></Select>
        </ConfigProvider>

        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "#F3F3F5",
                colorBorder: "transparent",
              },
            },
          }}
        >
          <Select
            defaultValue="All Locations"
            style={{
              height: "40px",
              width: "90%",
              backgroundColor: "#F3F3F5",
              border: "none",
            }}
            className=" rounded-[10px] "
          ></Select>
        </ConfigProvider>

        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "#F3F3F5",
                colorBorder: "transparent",
              },
            },
          }}
        >
          <Select
            defaultValue="All Types"
            style={{
              height: "40px",
              width: "90%",
              backgroundColor: "#F3F3F5",
              border: "none",
            }}
            className=" rounded-[10px] "
          ></Select>
        </ConfigProvider>

        <div className="w-[40%] px-[15px] flex items-center justify-between h-[40px] border border-[#C6C6C6] rounded-[6px]">
          <button className=" text-white rounded-[10px]">
            <span className="text-[#6B6B6B]">Clear</span>
          </button>
          <X />
        </div>
      </div>

      <div>
        {OpeningsData?.map((data, index) => (
          <div
            key={index}
            className="border border-[#4747474F]/31 rounded-[9px]  mt-[30px] px-4 md:px-[37px] py-[27px]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[25px] font-normal leading-[120%] pb-4">
                <span>{data.title.split(" ").slice(0, -1).join(" ")}</span>{" "}
                <span className="text-primary">
                  {data.title.split(" ").at(-1)}
                </span>
              </p>
              <p className="text-[15px] rounded-[6px] px-[15px] py-1 text-[#3D3D3D] bg-[#E9E9E9] leading-[140%] mt-[5px]">
                {data.department}
              </p>
            </div>

            <div className="flex items-center justify-baseline gap-x-6 text-xs pb-7">
              <p className="flex items-center gap-1">
                {" "}
                <MapPinned size={16} className="text-[#474747]" /> On-Site
              </p>
              <p className="flex items-center gap-1">
                {" "}
                <Clock size={16} className="text-[#474747]" /> Full - Time
              </p>
              <p className="flex items-center gap-1">
                <DollarSign size={16} className="text-[#474747]" />{" "}
                {data.boudget}
              </p>
            </div>

            <p className="text-lg font-light text-[#797979] leading-[140%] pb-7 ">
              {data.description}
            </p>

            <h2 className="text-[22px] font-light  text-[#1F1F1F]">
              Key Requirements:
            </h2>
            <ul className="list-disc list-inside mt-[10px]">
              {data.requirements.map((req, reqIndex) => (
                <li
                  key={reqIndex}
                  className="text-[16px] text-[#1B1B1B] leading-[140%]"
                >
                  {req}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <p className="text-[#787878] text-[12px]"> Post {data.posted}</p>
              <Link href="/career/1">
                <button className="bg-primary cursor-pointer rounded-[6px] mt-[15px] w-[123px] h-[37px]">
                  {" "}
                  <span className="text-white">Apply Now</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 pb-12 lg:py-[50px] flex items-center justify-center">
        <button className="bg-[#F6934842]/78 cursor-pointer  w-[123px] h-[37px] rounded-[6px]">
          {" "}
          <span className="text-[#5B5959] text-[18px]">Explore More</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default Opennings;
