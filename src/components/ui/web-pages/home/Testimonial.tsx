"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { testimonials } from "@/datas/pages/home";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-full mb-20 container mt-10 md:mt-20 px-4 lg:px-20 2xl:px-0">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p
          className={`text-sm font-medium text-[#1C54E3] uppercase ${inter.className}`}
        >
          Testimonial
        </p>
        <h2 className="section-title font-bold mt-2 max-w-[600px] mx-auto">
          Real Stories, Real Impact: Hear from Our Satisfied Clients
        </h2>
        <p className="section-subtitle">
          Discover how our solutions have transformed businesses through
          innovation and dedicated support.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#1F1B1B]/20 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image / Video */}
                  <div>
                    {t.video ? (
                      <video
                        src={t.video}
                        controls
                        className="rounded-lg w-full h-[240px] md:h-[320px] object-cover"
                      />
                    ) : (
                      <Image
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        width={800}
                        height={400}
                        className="w-full rounded-lg h-[240px] md:h-[320px] object-cover"
                      />
                    )}
                  </div>

                  {/* Text Info */}
                  <div>
                    {t.companyUrl && (
                      <Image
                        src={t.companyUrl}
                        height={29}
                        width={200}
                        alt="Company Logo"
                        className="h-[29px] w-auto object-contain mb-4"
                      />
                    )}

                    <p className="text-[#6F6C90] mb-6 text-base md:text-lg font-normal leading-relaxed">
                      &quot; {t.quote} &quot;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-white shadow">
                        <Image
                          src={t.imgUrl}
                          height={60}
                          width={60}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t.name}</h3>
                        <p className="text-gray-500 text-sm">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="hidden md:flex absolute top-1/2 -left-16 -translate-y-1/2 z-10 bg-[#1C55E0] hover:bg-[#1744b4] w-12 h-12 rounded-full items-center justify-center shadow-lg"
        >
          <ChevronLeft color="white" size={24} />
        </button>

        <button
          ref={nextRef}
          className="hidden md:flex absolute top-1/2 -right-16 -translate-y-1/2 z-10 bg-[#1C55E0] hover:bg-[#1744b4] w-12 h-12 rounded-full items-center justify-center shadow-lg"
        >
          <ChevronRight color="white" size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-10 flex justify-center gap-2" />
      </div>
    </div>
  );
};

export default Testimonial;
