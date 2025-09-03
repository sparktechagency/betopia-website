// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { anotherServices, quickLinks, reviews, services } from "@/datas/sharedData/footer";


const FooterDetials = () => {
  return (
    <footer className=" text-[#999999] text-lg pt-[37px] pb-8 px-2 lg:px-0 border-b border-b-[#333333]">
      <div className=" mx-auto grid lg:grid-cols-8 justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center col-span-2">
          <p className=" leading-relaxed text-xl text-[#F8F8F8] pb-5">
            Empowering businesses with smart, scalable software solutions.
          </p>
          <button className="mt-6  rounded-lg bg-[#F69348] !text-[#181818] text-sm font-medium px-6 py-2 transition">
            Join as a Partner
          </button>
        </div>

        {/* Services */}
        <div className=" lg:col-span-2">
          <h3 className="text-white font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 ">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div> 

        <div className="lg:col-span-2">
          <h3 className="text-transparent font-semibold mb-4"> SERVICES </h3>
          <ul className="space-y-2  mt-2">
            {anotherServices.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className=" lg:col-span-1 ">
          <h3 className="text-white font-semibold mb-4 ">QUICK LINK</h3>
          <ul className="space-y-2 ">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-orange-500 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Review */}
        <div className=" lg:col-span-1 ">
          <h3 className="text-white font-semibold mb-4">REVIEW</h3>
          <ul className="space-y-2 ">
            {reviews.map((review, idx) => (
              <li key={idx}>
                <a href={review.href} target="_blank" className="hover:text-orange-500 transition">
                  {review.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterDetials;
