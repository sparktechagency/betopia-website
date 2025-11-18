"use client";

import { featuresData, platforms } from "@/datas/mainProducts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductMainPlatform = () => {
  const [rotation, setRotation] = useState(0);
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);


 const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 140 : 260;


  return (
    <div className="flex items-center justify-center pb-15">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* left */}
        <div className="space-y-8">
          <div className="flex flex-col gap-y-0 mb-4">
            <div className="section-title lg:leading-[50px]">One Platform.</div>
            <div>
              <h2 className="section-title text-primary pb-0.5">
                Unlimited Possibilities.
              </h2>
              <p className="w-[300px] bg-primary h-0.5" />
              <div>
                <p className="section-subtitle leading-[35px] py-6">
                  Betopia Limited builds next-generation digital tools for
                  business automation, workforce management, partner collaboration,
                  and AI-driven sales.
                </p>
                <p className="section-subtitle leading-[35px]">
                  From HRM to ERP and AI-powered agents every Betopia product
                  works seamlessly together to drive your success.
                </p>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 lg:pt-52 pb-15">
            {featuresData.map((item, index) => (
              <div
                key={index}
                className="text-center bg-[#F7954914] py-4 px-3 rounded-2xl"
              >
                <div className="mb-6 flex items-center justify-center">
                  <Image src={item.img} alt={item.title} width={44} height={44} />
                </div>

                <h3 className="text-lg text-[#414042] mb-2">{item.title}</h3>
                <p className="text-sm text-[#414042]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right */}
      <div className="relative flex items-center justify-center gap-5 h-[380px] lg:h-[640px] lg:mt-20">

          {/* faded bg */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "650px",
              height: "650px",
              background:
                "radial-gradient(circle, rgba(247,149,73,0.55) 0%, rgba(247,149,73,0.18) 55%, rgba(247,149,73,0) 100%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          {/* circle around */}
          <div className="hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center ">
            {[1, 3, 5, 7, 9, 11, 13, 15, 17, 19].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#41404233]"
                style={{
                  width: `${300 + i * 20}px`,
                  height: `${300 + i * 20}px`,
                  opacity: 0.65,
                }}
              />
            ))}
          </div>
          </div>
          <div className="md:hidden block">
              <div className="absolute inset-0 flex items-center justify-center">
            {[1, 3, 5, 7, 9, 11, 13, ].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#41404233]"
                style={{
                  width: `${100 + i * 20}px`,
                  height: `${100 + i * 20}px`,
                  opacity: 0.65,
                }}
              />
            ))}
          </div>
          </div>

          {/* center circle */}
          <div className="absolute z-10 md:w-80 w-46 h-46 md:h-80 rounded-full bg-[#F79549] flex flex-col items-center justify-center">
            <Image
              src="/productDetails/ecosystem/logo.png"
              alt="logo"
              width={234}
              height={80}
              className="w-36 md:w-[234px] h-15 md:h-20"
            />
          </div>

          {/* rotate platform */}
          {mounted && (
          <div className="absolute inset-0 flex items-center justify-center">
            {platforms.map((platform, index) => {
              const angle =
                (rotation + (index * 360) / platforms.length) * (Math.PI / 180);

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="overflow-hidden">
                    <Link href={platform.link}>                   
                    <Image
                      src={platform.img}
                      alt={platform.name}
                      width={80}
                      height={80}
                      className="object-contain w-[50px] md:w-20 h-[50px] md:h-20"
                    />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductMainPlatform;
