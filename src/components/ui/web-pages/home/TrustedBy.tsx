"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; 
import Image from 'next/image';
 
const images = [
    "/trustedBy/company1.png",
    "/trustedBy/company2.png", 
    "/trustedBy/company3.png", 
    "/trustedBy/company4.png", 
    "/trustedBy/company5.png", 
    "/trustedBy/company6.png", 
    // "/trustedBy/company7.png", 
    "/trustedBy/company8.png"
]
const TrustedBy = () => {

    // Determine if we should center/loop or not
    const shouldCenterAndLoop = images?.length > 8;

    return (
        <div className=' my-20 container'>
            <p className="flex items-center justify-center gap-x-2 text-[40px] ">
                <span className="bg-black text-white px-7 py-1.5 rounded-xl ">
                    Trusted
                </span>
                <span>by</span>
            </p>

            <div className=" w-full pt-10 ">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={4}
                    slidesPerView={8}
                    centeredSlides={shouldCenterAndLoop}
                    loop={shouldCenterAndLoop}
                    autoplay={shouldCenterAndLoop ? {
                        delay: 8000,
                        disableOnInteraction: false,
                    } : false}
                    pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 12,
                        },
                    }}
                    className="w-full py-10  flex items-center justify-center "
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className=" mx-auto ">
                            <Image
                                src={image}
                                alt={`Company ${index + 1}`} 
                                width={136} 
                                height={52}
                                className=" mx-auto w-[136px] h-[52px] object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TrustedBy;