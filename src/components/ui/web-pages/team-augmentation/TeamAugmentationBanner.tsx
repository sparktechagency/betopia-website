import OutlineButton from '@/components/shared/OutlineButton';
import Link from 'next/link';
import React from 'react';

const TeamAugmentationBanner = () => {
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
                        src="https://res.cloudinary.com/dreiyzj42/video/upload/v1757500813/partner_page_y0pbub.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

            {/* Content can go here */}
            <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
                <div className=" flex flex-col items-center justify-center   ">
                    <p className="text-[#818181] text-[64px] font-medium"><span className="text-white">Why Pay  </span>  <span className="text-primary"> $100k+ </span> for one Engineer? </p>
                    <p className=" text-[#7E7E7E] text-[57px] font-light lg:w-[60%] md:w-[50%] w-full text-center pb-9  ">Scale Your Tech Team Smarter with Betopia </p>
                    <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[50%] tracking-wide ">Stop overspending on H-1B hires. Build high-performing global IT teams with Betopia Limited at 50–60% less cost without compromising quality, security, or delivery speed.</p>
                    <div className=" pt-[77px] flex  items-center gap-5">
                        <Link href="/become-partner">
                            <OutlineButton className=" !py-4 !px-7">Request a Free Consultation</OutlineButton>
                        </Link>

                        <Link href="/become-partner">
                            <OutlineButton className=" !py-4 !px-7">Get Talent Profiles</OutlineButton>
                        </Link>
                    </div>
                </div> 

            </div>

        </div>
    );
};

export default TeamAugmentationBanner;