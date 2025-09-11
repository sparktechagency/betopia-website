import { portfolioData } from '@/datas/pages/PortfolioData';
import Image from 'next/image';
import React from 'react';

const PortfolioImages = () => { 
    const portfolioImages = portfolioData?.images 
    return (
        <div className=' container mb-20'> 

        <div className=' flex items-center gap-[60px]'> 
            {
                portfolioImages?.map((value , index)=>(  
                    <div key={index}> 
                        <Image src={value} alt='' height={420} width={1000} className=' h-[420px] '/>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default PortfolioImages;