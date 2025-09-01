// components/Footer.tsx
import React from "react";
import Link from "next/link";

const services = [
  "Enterprise Cloud Management",
  "Hybrid/Multi-Cloud Platform Management",
  "Cloud Security, Compliance & Governance",
  "Cloud-Native Infrastructure Management",
  "Cybersecurity Advisory & Consulting",
  "Managed Security Operations",
  "Enterprise Cyber Resilience & Governance",
  "Cyber Risk Management",
];
const anotherServices = [
  "AI Consulting & Implementation",
  "Enterprise Generative AI Solutions",
  "Intelligent Business Process Automation",
  "Advanced Analytics & Data Intelligence",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const reviews = [
  { label: "Clutch", href: "#" },
  { label: "Good Firms", href: "#" },
  { label: "Design Rush", href: "#" },
  { label: "Trust Pilot", href: "#" },
  { label: "Partnerstack", href: "#" },
];

const FooterDetials = () => {
  return (
    <footer className=" text-[#999999] text-lg py-12 px-6 md:px-16">
      <div className=" mx-auto grid lg:grid-cols-8 justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center col-span-2">
          <p className=" leading-relaxed ">
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
        <div className=" lg:col-span-1">
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
        <div className=" lg:col-span-1">
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
