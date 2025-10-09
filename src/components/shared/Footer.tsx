"use client";
import React from "react";
import Image from "next/image";
import FooterDetials from "../ui/shared-features/footer/FooterDetials";
import Link from "next/link";
import { officeData, socialLinks } from "@/datas/sharedData/footer";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { Download, Landmark } from "lucide-react";
import { LuLandmark } from "react-icons/lu";



const Footer: React.FC = () => {
  return (
    <div className="bg-[#040404] pt-10  flex items-center justify-center">
      <div className="container">
        <FooterDetials />

        <div className="py-4 flex justify-center">
          <Image
            src="/betopia-large-logo.svg"
            alt="Footer Logo"
            width={1440}
            height={200}
            className=" z-0"
          />
        </div>

        <div className="  bg-[#040404]/20  backdrop-blur drop-shadow-2xl p-6 pt-8 -mt-6 rounded-xl  z-10 ">
          <div className=" grid grid-cols-1 lg:grid-cols-4 rounded-[8px] gap-5  z-10  ">
            {officeData.map((office, index) => (
              <div
                key={index}
                className={`relative col-span-1 overflow-hidden bg-[#7f7e7e]/10 rounded-xl border border-transparent hover:border-[#f6934880] transition-colors duration-300 p-4 !pb-0 ${index === 1 ? "flex flex-col" : ""}`}
              >
                <div className=" flex items-center justify-between ">
                  <div>

                    <div className="mb-3">
                      <p className="text-primary uppercase text-xs">{office.title}</p>
                    </div>

                    <ul className="grid text-[18px]  grid-cols-1 gap-2.5 text-white list-none ">
                      <li className="font-medium text-[16px] ">{office.city}</li>
                      <li className=" font-normal text-sm text-[#a1a1a6] ">{office.address}</li>

                      <li>
                        <a href={`tel:${office.phone}`} className=" cursor-pointer">
                          <li className=" font-normal text-sm text-[#ffffffe6]">{office.phone}</li>
                        </a>
                      </li>
                    </ul>

                  </div>

                  <div className="absolute -bottom-4 -right-5"> 
                    {/* <Image
                      src={office.imgUrl}
                      alt={office.title}
                      width={140}
                      height={140}
                      className=" "
                    /> */}
                   { office.icon}

                  </div>
                </div>


              </div>
            ))}
          </div>

        </div>


        {/* Social Links */}
        <div className=" md:flex-center py-7 ">
          <div className="flex flex-col md:flex-row gap-5 justify-between items-center md:flex-center  gap-x-10  text-white ">
            <div className="flex items-center gap-4 bg-black p-6 text-white">
              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/1rg_CRbQDkNwv0j2QWlA16vD2tMaxJNYu/view?usp=sharing"
                download
                className="bg-[#FFF200] w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              >
                <Download className="text-black w-5 h-5" />
              </a>

              {/* Text Section */}
              <div className="flex flex-col gap-y-1 leading-tight">
                <p className="text-[16px] lg:text-2xl font-light">Company Deck</p>
                <p className="text-sm text-[#7d7d82] font-normal">PDF, 17 MB</p>
              </div>
            </div>
            <p className="text-[#a1a1a6] text-[16px] mb-0 ">
              © 2025, Betopia Ltd. | All Rights Reserved.
            </p>
            <div className="flex items-center gap-x-4 ">
              {socialLinks.map((link, index) => (
                <p
                  key={index}
                  className={`w-9 h-9 flex-center rounded-full text-white`}
                  style={{ backgroundColor: link.bgColor, color: "#ffffff" }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white"
                  >
                    {link.icon}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
