"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./slider.css"
import Image from "next/image"
import { Inter } from "next/font/google"
import { testimonials } from "@/datas/pages/home"

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const Testimonial = () => {
    return (
        <div className={` w-full mb-20 container`}>
            <section className="  flex items-center ">
                <div className="container mx-auto bg-white  flex flex-col justify-center  rounded-2xl  ">
                    <h2 className="text-center text-xl md:text-[32px] font-semibold pb-14  lg:flex lg:flex-col gap-y-4  items-center ">
                        <span className={`text-sm font-medium text-[#1C54E3] uppercase text-center ${inter.className}`}>Testimonial </span>
                        <span className=" text-[32px] font-bold  ">Real Stories, Real Impact: Hear from Our Satisfied Clients</span>

                        <span className=" font-normal text-[16px]"> Discover how our solutions have transformed businesses through innovation and dedicated support.</span>
                    </h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            className="relative lg:px-4 px-2 w-3/4"

                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="border border-[#1F1B1B]/20  rounded-2xl p-4 md:p-8 ">
                                        <div className="flex flex-col md:flex-row gap-8 items-center relative">
                                            <div className="w-full md:w-1/3">
                                                {testimonial.video ? (
                                                    <video
                                                        src={testimonial.video}
                                                        controls
                                                        className="rounded-lg h-[320px] w-[550px] object-cover"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt=""
                                                        height={320}
                                                        width={1500}
                                                        className="w-full rounded-lg  lg:h-[320px] h-[250px] object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="w-full md:w-2/3">
                                                <Image src={testimonial?.companyUrl} height={29} width={300} className="w-auto h-[29px] rounded-full object-contain mb-4" alt="" />

                                                <p className="text-[#6F6C90] mb-4 lg:text-lg text-[16px] font-normal leading-relaxed  w-full pb-5">
                                                    &quot; {testimonial.quote} &quot;
                                                </p>

                                                <div className="">
                                                    <div className="flex items-center gap-2 ">
                                                        <div className=" w-[70px] h-[70px] rounded-full overflow-hidden shadow-xl bg-white  flex-center">
                                                            <Image src={testimonial?.imgUrl} height={60} width={60} className="w-[60px] h-[60px] rounded-full object-contain" alt="" />
                                                        </div>

                                                        <div className="flex flex-col gap-1">
                                                            <h3 className="font-semibold text-[18px]">{testimonial.name}</h3>
                                                            <p className="text-gray-600">{testimonial.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-button-prev   z-10  rounded-full bg-[#1C55E0] shadow-lg flex items-center justify-center  ">
                            <span>  <ChevronLeft className="" color='white' /> </span>
                        </button>

                        <button className="swiper-button-next  z-10  rounded-full bg-[#1C55E0] shadow-lg flex items-center justify-center  ">
                            <span>  <ChevronRight className="" color='white' /> </span>
                        </button>

                        <div className="swiper-pagination flex justify-center gap-2 mt-6" />
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Testimonial;