
import React from 'react';
import VideoPlayer from './VideoPlayer';
import Image from 'next/image';
import { cardsData } from '@/datas/pages/home';

const Facilities = () => {

  return (
    <div className=" relative h-[590px] flex items-center"
      style={{
        backgroundImage: 'url(/facilities-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="absolute inset-0 bg-[#000000]/71"></div>
      <div className="container mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side - Video Player */}
          <VideoPlayer />

          {/* Right side - Content Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cardsData.map((card, index) => (
                <div key={index} className=" ">
                  <div className=" flex flex-col ">
                   <Image src={card?.imgUrl} alt='' height={34} width={34} className=' pb-3' />
                    <p className="text-white text-2xl font-semibold mb-2 leading-tight pb-1">
                      {card.title}
                    </p>
                    <p className="text-[#D4D4D4] text-lg font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
