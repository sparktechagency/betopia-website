import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioDetailsType } from '@/types';
import Image from 'next/image';
import React from 'react';

const ChallengesWeFaced = ({ portfolioDetails }: portfolioDetailsType) => {
    const ResearchDetails = portfolioDetails?.research
    return (
        <div className='h-[517px] bg-gradient-to-r from-[#220300] to-[#880C00] my-20'> 
        <div className='container  py-[58] '> 
            <div className=' flex items-end gap-x-14 '>
                <div className='w-full'>
                    <Image src={ResearchDetails?.imgUrl} alt='' height={401} width={700} className=' rounded-2xl h-[401px]' />
                </div> 

                <div className='w-full pb-9'> 
                    <ComponentTitle className=' pb-10'> {ResearchDetails?.title}</ComponentTitle> 
                    <p className='text-xl font-normal text-[#A6A6A6] mb-3 tracking-wide '>{ResearchDetails?.description}</p>
                    {
                        ResearchDetails?.list && (
                            <ul className=' list-disc text-white pl-5 grid grid-cols-1 gap-1 '>
                                {
                                    ResearchDetails?.list?.map((listValue, listIndex) => (
                                        <li key={listIndex} className='text-white  tracking-wide'> {listValue} </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    {
                        ResearchDetails?.subTitle && (
                            <p className=' font-normal text-[#A6A6A6] tracking-wide '>{ResearchDetails?.subTitle}</p>
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChallengesWeFaced;