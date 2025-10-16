import { whatWeDo } from '@/datas/pages/about';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='container mb-10  md:mb-[100px] mt-10 md:mt:0'>
            <p className=' text-[24px] leading-[26px] md:text-[40px] md:leading-[52px] text-center text-black '>What <span className='text-[#F79549]'>We Do</span></p>
            <p className='text-[#41404299] text-[16px]  leading-[20px] md:text-[24px] text-center !my-2 w-full lg:w-[656px] mx-auto md:leading-[28px]'>At Betopia Limited, we offer a comprehensive range of services to help businesses stay ahead in a digital-first world</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-10'>
                {
                    whatWeDo.map((item, index) => (
                        <div key={index} className='bg-[#F7954914] rounded-[40px] p-4 md:p-8'>
                            <div className=' bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center mb-2'>
                                <Image
                                    src={item.image}
                                    alt="Dubai"
                                    width={48}
                                    height={48}
                                    className=""
                                />
                            </div>

                            <h2 className='text-[#414042] text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] mb-2'>{item.title}</h2>
                            <p className='text-[#41404299] leading-[20px]'>{item.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className=" bg-[#F79549] !rounded-[16px] lg:rounded-[25px] p-4 md:p-10 flex flex-col md:flex-row items-center gap-5 justify-between mt-6">
                <div>
                    <p className="text-white font-semibold text-xl md:text-[50px]">
                        Join Us on Our Journey
                    </p>
                    <div className="flex items-center gap-4 relative">
                        <p className="text-white w-full lg:w-[516px] text-[14px] md:text-xl">
                            We are more than just a tech company we are partners in your digital transformation. Let’s collaborate to shape the future together.
                        </p>
                        <Image
                            className="ml-4 -mt-2 hidden md:block"
                            width={100}
                            height={100}
                            src={"/productDetails/shape.png"}
                            alt="arrow"
                        />
                    </div>
                </div>
                <Link href={"/contact"}>
                    <button
                        className="py-3 bg-[#040404] w-[265px] rounded-[11px]"
                        style={{ color: "white" }}
                    >
                        Schedule Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WhatWeDo;