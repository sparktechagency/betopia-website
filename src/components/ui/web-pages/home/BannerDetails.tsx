import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const BannerDetails = () => {
    return (
        <div className='  w-full z-10 bg-gradient-to-r from-[#f8fcfc]  to-[#e0dfdf] -mt-[25px] py-[100px]'>
            {/* <div className=" w-full h-full bg-black/60 "></div>  */}
            <div className=' container flex items-center  z-20  '>
                <div className=' w-full z-20'>
                    <Image src={"/banner.png"} alt='' height={600} width={590} className='rounded-lg h-[580px] w-[650px]' />
                </div>

                <div className="w-full text-xl leading-10 tracking-wide  text-gray-600 ">
                    <span className="text-primary text-[35px]"> Betopia </span> Limited began its journey in 2014 with a simple dream,
                    to use technology to solve real business problems. In 2015, we saw early growth as more
                    clients trusted our approach. By 2019, our name was reaching across borders and expansion had truly begun.
                    <br />
                    <br />
                    The year 2020 tested everyone, but it also became our turning point, we scaled operations and helped businesses go digital when they needed it most.
                    <br />
                    <br />
                    In 2022, we took bold steps into new areas like AI, Cloud, Cybersecurity, and SaaS, shaping solutions for the future.
                    <br />
                    <br />
                    Today, our journey continues with pride, <span className='font-bold'>40,000+ clients served, 40,000+ projects delivered, 750+ professionals</span> , and operations across 47+ countries. From 30,000+ clients in Europe to 600+ in the USA and 400+ in Australia, our story is one of growth, trust, and innovation, written together with the businesses we serve.
                    <br />
                    <Link href={`/about`} className="flex items-center gap-2 cursor-pointer text-[16px] hover:underline">
                        <span>  Learn More </span>  <span> <RiArrowRightLine className='text-primary' /> </span>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default BannerDetails;