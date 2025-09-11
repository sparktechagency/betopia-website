import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioData } from '@/datas/pages/PortfolioData';
import Image from 'next/image';
import React from 'react';

const FeatureFirst = () => {
    const FeatureDetails = portfolioData?.firstFeatures
    
    return (
        <div>
            <div className=' flex flex-col gap-y-[100px]'>
                {
                    FeatureDetails?.map((value, index) => (
                        <div key={index} className=' bg-gradient-to-r from-[#E8761F]/40   to-[#FFA460]/0 '>
                            <div className={` w-full  flex container
                        ${(index + 1) % 2 === 0 ? ' flex-row-reverse items-center gap-4' : ' flex-row items-center gap-4'}
                        rounded-[12px]  items-center   gap-10 `}>
                                <Image src={value?.imgUrl} alt='' height={405} width={770} className='w-full h-[405px]  object-fill  ' /> 
                                <div className='w-full'> 
                                    <ComponentTitle className=' pb-8'> {value?.title}</ComponentTitle> 
                                    <p className='text-[#818181] text-xl tracking-wide'> {value?.description} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default FeatureFirst;