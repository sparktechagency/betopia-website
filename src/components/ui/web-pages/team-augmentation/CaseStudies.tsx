"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import OutlineButton from "@/components/shared/OutlineButton";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { servicesData } from "@/datas/pages/teamAugmentation";

const CaseStudies = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        <div>
          <div className="text-[#535353] section-title leading-12 flex flex-col justify-center items-center lg:justify-start lg:items-start  gap-2">
            <p>
              Case <span className="text-primary">Studies</span>
            </p>
            <p>Real Result, Real Impact</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <OutlineButton className="mx-auto !p-4 !text-[#656565] font-semibold">
            View Full Case Studies
          </OutlineButton>
        </div>
      </div>

      <div className="relative mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="services-swiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-gradient-to-r from-[#F79549]/30 to-[#FFFFFF] mb-5 rounded-2xl shadow-sm border-gray-100 overflow-hidden h-[547px] flex flex-col border border-primary p-2">
                <div className="w-full h-[355px] relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover h-full rounded-lg"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button className="flex items-center !text-[#F79549] font-medium text-sm">
                    View Details
                    <ArrowRight className="text-[#F79549] ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered arrow buttons together (no pagination dots) */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            className="swiper-button-prev-custom w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-colors 
             [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            className="swiper-button-next-custom w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-colors 
             [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
