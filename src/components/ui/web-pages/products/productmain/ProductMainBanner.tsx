import React from 'react'
import OutlineButton from '@/components/shared/OutlineButton'
import Link from 'next/link'

const ProductMainBanner = () => {
  return (
    <div
      className=" flex-center text-center h-[calc(100vh-50px)] md:h-screen text-white  bg-black"
    >
      <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden md:h-[calc(100vh-105px)] ">
        <div className=" flex flex-col items-center justify-center  w-full  ">
          <div className="text-[#818181] text-[34px] lg:text-5xl 2xl:text-[64px] font-medium mb-4">
         Discover Betopia’s Intelligent
          </div>
          <p className=" text-[#F79549] text-[20px] lg:text-4xl 2xl:text-[57px] font-semibold lg:w-[80%] md:w-[70%] w-full text-center pb-9   ">
         Product Ecosystem
          </p>
          <p className=" text-sm md:text-lg font-normal text-[#9B9B9B]  lg:w-[60%] md:w-[70%] tracking-wide ">
          AI-driven platforms powering automation, engagement, and business growth.
          </p>
          <Link href="/contact" className=" pt-[77px]">
            <OutlineButton className="cursor-pointer py-4! px-7!">
              Explore Products
            </OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductMainBanner
