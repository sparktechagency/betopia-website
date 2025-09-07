import PageBanner from '@/components/shared/PageBanner';
import React from 'react';

const ProductsBanner = () => {
    return (
        <div>
            <PageBanner videoSrc="https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4" title={<p className=" "><span className="text-white">Elevate </span> <span className="text-[#B8B8B8]"> Your Business </span> <br /> <span className=' text-primary'> Operations  </span> </p>} description="Comprehensive Suite of Solutions for Smarter, Faster Business Management." buttonLink='/partner' buttonName='Partner With Us' />
        </div>
    );
};

export default ProductsBanner;