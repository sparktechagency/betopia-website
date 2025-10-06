import ComponentTitle from '@/components/shared/ComponentTitle';
import { uniqueValueData } from '@/datas/pages/ServiceExtraComponentsData';
import React from 'react';
import OfferCard from '../common/OfferCard';

const OurUniqueValue = () => {
    return (
        <div>
            <div className=' bg-[#F69348]/5 py-20 '>
                <div className=' container '>

                    <div className=' flex flex-col items-center justify-center gap-1 mb-8  '>
                        <ComponentTitle className=' !text-center pb-2'> <span className=' text-[#414042]'> Our Unique Value </span> <span className='text-primary'>Proposition</span> </ComponentTitle>
                    </div>


                    <div className=' grid lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-10'>
                        {
                            uniqueValueData?.map((item, index) => (
                                <OfferCard key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurUniqueValue;