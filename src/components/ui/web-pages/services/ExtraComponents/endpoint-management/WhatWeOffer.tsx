import ComponentTitle from '@/components/shared/ComponentTitle';
import { whatWeOfferData } from '@/datas/pages/ServiceExtraComponentsData';
import React from 'react';
import OfferCard from '../common/OfferCard';

const WhatWeOffer = () => {
    return (
        <div className=' bg-[#F69348]/5 py-20 '>
            <div className=' container '>

                <div className=' flex flex-col items-center justify-center gap-1 mb-8  '>
                    <ComponentTitle className=' !text-center pb-2'> <span className=' text-[#414042]'> What We  </span> <span className='text-primary'>Offer</span> </ComponentTitle>
                    <div className=' w-full flex-center flex-col gap-0.5'>
                        <p className='text-[20px] text-[#757575] text-center  w-[40%] leading-8'>All-in-One HR Solution Built for Modern Team.</p>
                    </div>
                </div>


                <div className=' grid lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-10'>
                    {
                        whatWeOfferData?.map((item, index) => (
                            <OfferCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;