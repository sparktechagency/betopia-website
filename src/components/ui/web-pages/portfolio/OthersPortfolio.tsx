import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioDetailsType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const OthersPortfolio = ({ portfolioDetails }: portfolioDetailsType) => {
    const OthersPortfolio = portfolioDetails?.otherPortfolio
    return (
        <div className=' my-20 container'>
            <div>
                <ComponentTitle className=' flex-center mb-10' > <span> Our Other’s </span> <span className=' text-primary'> Portfolio </span></ComponentTitle>
            </div>

            <div className=' flex flex-row gap-[51px]'>
                {
                    OthersPortfolio?.map((item) => (
                        <div
                            key={item.id}
                            className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1"
                        >
                            {/* Background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
                            <Image
                                src={item.imgUrl}
                                alt={item.title}
                                height={570}
                                width={605}
                                className="h-[420px] w-full object-cover"
                            />

                            {/* Content overlay - same as left */}
                            <div className="absolute bottom-[7%] text-[#858585] z-20 text-center">
                                <div className="w-full flex flex-col items-start  px-[50px]">
                                    <p className="text-2xl text-white pb-1">{item?.title}</p>
                                    <p className="text-lg font-normal text-[#555555] text-start mb-2 max-w-[80%] pb-7">
                                        {item.description}
                                    </p>
                                    <Link href={item?.link} className="flex items-center gap-2 cursor-pointer text-[16px] font-medium hover:underline">
                                        <span>Learn More</span>
                                        <RiArrowRightLine className="text-primary" />
                                    </Link>
                                </div>
                            </div>

                            {/* Background decoration */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-b ${item.gradientClass} l`}
                            ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OthersPortfolio;