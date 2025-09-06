import React from 'react';
import Image from 'next/image';
import ComponentTitle from '@/components/shared/ComponentTitle';

const featureData = [
  {
    imgUrl: "/featuredProducts/HRM.png",
    title: " Human Resource  Management (HRM) "
  },
  {
    imgUrl: "/featuredProducts/POS.png",
    title: "Point of Sale Machine (POS) "
  },
  {
    imgUrl: "/featuredProducts/ERP.png",
    title: "Betopia  ERP "
  },

]

const FeaturedProducts = () => {
  return (
    <div className="text-center mb-20 container"> 
    <div className='w-full  mb-10'> 
      <ComponentTitle className='flex-center'>Our Featured Products </ComponentTitle>
      <p className="text-lg text-gray-600   ">Smart, scalable and user-friendly solutions designed to transform your business.</p>
    </div>

      <div className=' grid grid-cols-3 gap-4 w-full'>
        {
          featureData?.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1"
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
              <Image
                src={item.imgUrl}
                alt={item.title}
                height={320}
                width={605}
                className="h-[320px] w-full object-cover"
              />

              {/* Content overlay - same as left */}
              <div className="absolute bottom-[7%] text-[#858585] z-20 text-start w-full">
                <div className="w-1/2 flex flex-col items-start ps-6">
                  <p className="text-2xl text-normal text-white pb-1">{item?.title}</p>
                </div>
              </div>

              {/* Background decoration */}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-[#666666]/50 to-[#000000]/80`}
              ></div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;