"use client";
import React from "react";
import Image from "next/image";
import FooterDetials from "../ui/shared-features/footer/FooterDetials";
import WorldMap from "../ui/shared-features/footer/WorldMap";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  bgColor?: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebookF color="#fff" size={20}  />, url: "https://facebook.com", bgColor: "#424242" },
    { icon: <FaInstagram size={20}  />, url: "https://instagram.com", bgColor: "#424242" },
    { icon: <FaGithub size={20}  />, url: "https://github.com", bgColor: "#424242" },
    { icon: <FaLinkedinIn size={20}   />, url: "https://linkedin.com", bgColor: "#424242" },
  ];

  return (
    <div className="bg-[#040404] my-10  flex items-center justify-center">
      <div className="container">
        <FooterDetials />

        <div className="py-4 flex justify-center">
          <Image
            src="/betopia-large-logo.svg"
            alt="Footer Logo"
            width={1440}
            height={200}
          />
        </div>

        <div className="bg-[#181818] p-8 grid grid-cols-12 rounded-[8px] gap-10">
          <div className="col-span-8 h-[460px]">
            <WorldMap />
          </div>
          <div className="col-span-4 flex flex-col items-end">
            <Image src="/dubai.png" alt="Dubai" width={500} height={400} />
            <div className="mt-[47px]">
              <ul className="grid text-right text-[18px] leading-[24px] grid-cols-1 gap-2 text-white list-none">
                <li className="font-bold">Dubai</li>
                <li>P.O. Box: 17916, JEBEL ALI</li>
                <li>FREE ZONE, DUBAI UAE</li>
                <li>+97148833789</li>
                <li>
                  <button className="bg-[#424242] h-[36px] mt-[10px] w-[116px] rounded-[6px]">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */} 
        <div className=" flex-center py-7 "> 
        <div className="flex-center gap-x-10  text-white ">
          <p className="text-[#F8F8F8] text-[18px] mb-0 ">
            © 2025, Betopia Ltd. | All Rights Reserved.
          </p>
          <div className="flex items-center gap-x-4 ">
            {socialLinks.map((link, index) => (
              <p
                key={index}
                className={`w-9 h-9 flex-center rounded-full text-white`}
                style={{ backgroundColor: link.bgColor , color:'#ffffff'}}
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className=" text-white">
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
