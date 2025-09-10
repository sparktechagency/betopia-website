import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioData } from '@/datas/pages/PortfolioData';
import Image from 'next/image';
import React from 'react';

const ChallengesWeFaced = () => {
    const ResearchDetails = portfolioData?.research
    return (
        <div className='h-[517px] bg-gradient-to-r from-[#220300] to-[#880C00] my-20'> 
        <div className='container  py-[58] '> 
            <div className=' flex items-end gap-x-14 '>
                <div className='w-full'>
                    <Image src={ResearchDetails?.imgUrl} alt='' height={401} width={700} className=' rounded-2xl h-[401px]' />
                </div> 

                <div className='w-full pb-9'> 
                    <ComponentTitle className=' pb-10'> {ResearchDetails?.title}</ComponentTitle> 
                    <p className='text-xl font-normal text-[#A6A6A6] tracking-wide '>{ResearchDetails?.description}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChallengesWeFaced;