"use client";

import OutlineButton from "@/components/shared/OutlineButton";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function NotFound() {
    return (
        <div
            id="banner"
            className=" z-10 flex-center text-center h-[calc(100vh-115px)] text-white  "
        >
            <div className=" ">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://res.cloudinary.com/dreiyzj42/video/upload/v1757501387/blog_page_vtkluu.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

            {/* Content can go here */}
            <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden md:h-[calc(100vh-105px)] ">
                <div className=" flex flex-col items-center justify-center  w-full  ">
                    <div className="text-primary text-[34px] lg:text-[200px] font-medium">
                        404
                    </div>
                    <p className=" text-[#7E7E7E] text-[20px] lg:text-[57px] font-light lg:w-[60%] md:w-[70%] w-full text-center pb-9   ">
                        Oops! Page Not Found!
                    </p>
                    <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[55%] md:w-[70%] tracking-wide ">
                        The page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    <Link href={"/"} className=" pt-[77px]">
                        <OutlineButton className=" !py-4 !px-7 flex-center gap-2"> <span>Back to Home </span> <span><GoArrowRight size={24} /></span> </OutlineButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
