import Link from 'next/link';
import React from 'react';
import OutlineButton from './OutlineButton';
import { PageBannerProps } from '@/types';


const PageBanner = ({videoSrc , title , subtitle , description , buttonName ,buttonLink}:PageBannerProps) => {
    return (
       <div className=" z-10 flex-center text-center h-screen text-white  ">
            <div className=" ">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={videoSrc}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

            {/* Content can go here */}
            <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
                <div className=" flex flex-col items-center justify-center  w-full  ">
                    <div className="text-[#818181] text-[64px] font-medium">{title} </div>
                    <p className=" text-[#7E7E7E] text-[57px] font-light lg:w-[60%] md:w-[70%] w-full text-center pb-12   ">{subtitle} </p>
                    <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[70%] tracking-wide ">{description}</p>
                    <Link href={buttonLink} className=" pt-8">
                        <OutlineButton className=" !py-4 !px-7">{buttonName}</OutlineButton>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default PageBanner;