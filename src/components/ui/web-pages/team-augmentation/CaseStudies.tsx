"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import OutlineButton from '@/components/shared/OutlineButton';
import React from 'react';

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const servicesData = [
    {
        id: 1,
        title: "SaaS AI Team Scaling",
        description: "12-member AI team in 3 weeks, -55% hiring cost",
        image: "/augmentation/caseStudy2.png",
        textColor: "text-white",
    },
    {
        id: 2,
        title: "ERP Implementation for Retail",
        description: "Hybrid offshore team completed project 20% under budget.",
        image: "/augmentation/caseStudy1.png",
        textColor: "text-gray-900",
    },
    {
        id: 3,
        title: "Fortune 500 Cloud Migration",
        description: "Migrated 50+ apps with zero downtime, cut operational costs by 35%.",
        image: "/augmentation/caseStudy3.png",
        textColor: "text-white",
    },
    {
        id: 4,
        title: "Fortune 500 Cloud Migration",
        description: "Migrated 50+ apps with zero downtime, cut operational costs by 35%.",
        image: "/augmentation/caseStudy2.png",
        textColor: "text-white",
    },
]


const CaseStudies = () => {
    return (
        <div className='container mx-auto mb-20 '>
            <div className=' w-full flex items-center justify-between mb-10'>
                <div className=''>
                    <div className='text-[#535353] text-[40px] font-normal leading-12  flex flex-col gap-2'>
                        <p>Case   <span className=' text-primary'>Studies</span> </p>
                        <p className='  '>  Real Result, Real Impact </p>
                    </div>
                </div>

                <div className=' flex flex-col gap-8 '>
                    <div>
                        <OutlineButton className='mx-auto !p-4 !text-[#656565] font-semibold'>View Full Case Studies</OutlineButton>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination-custom",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    className="services-swiper "
                >
                    {servicesData.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="bg-white mb-5 rounded-2xl shadow-sm   border-gray-100 overflow-hidden h-[547px] flex flex-col    border border-primary p-2 ">
                                {/* Image Section */}
                            
                                    <div className="w-full h-[355px] relative">
                                        <Image
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.title}
                                            fill
                                            className="object-cover h-full   rounded-lg"
                                        />
                                    </div> 

                                {/* Content Section */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
                                        <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.description}</p>
                                    </div>

                                    <button className="flex items-center  !text-[#F79549] font-medium text-sm ">
                                        View Details
                                        <ArrowRight className="text-[#F79549]  ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex items-center justify-center mt-8 space-x-4">
                    <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>

                    <div className="swiper-pagination-custom flex space-x-2"></div>

                    <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors">
                        <ChevronRight className="h-5 w-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;