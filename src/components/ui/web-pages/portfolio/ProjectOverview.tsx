import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioDetailsType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectOverview = ({ portfolioDetails }: portfolioDetailsType) => {
    const projectOverviewDetails = portfolioDetails?.projectOverview
    return (
        <div className=' container -mt-10 mb-20'>
            <div className=' w-full flex items-start gap-[120px] pb-10'>
                <div className=' w-[20%]  '>
                </div>

                <div className=' w-[80%]  '>
                    <ComponentTitle className='  '>{projectOverviewDetails?.title}  </ComponentTitle>
                </div>
            </div>

            <div className=' w-full flex items-start gap-x-[120px]'>
                <div className=' w-[20%]  '>
                    <div className=' bg-[#F5F6F7] py-8 px-5  '>
                        <div className=' flex flex-col gap-1 pb-3 border-b border-[#787878]/20'>
                            <p className=' uppercase text-[#787878] text-sm font-light'> PROJECT NAME </p>
                            <p className='text-[#1B1B1B] text-lg font-normal'>{projectOverviewDetails?.projectName} </p>
                        </div>
                        <div className=' flex flex-col gap-1 pb-3 border-b border-[#787878]/20'>
                            <p className=' uppercase text-[#787878] text-sm font-light pt-4'>Category </p>
                            <p className='text-[#1B1B1B] text-lg font-normal'>{projectOverviewDetails?.category} </p>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <p className=' uppercase text-[#787878] text-sm font-light py-4 '> SERVICE WE PROVIDED </p>
                            <div className=' flex flex-wrap gap-3'>
                                {
                                    projectOverviewDetails?.serviceWeProvide?.map((value, index) => (
                                        <button key={index} className=' bg-white rounded-full px-4 py-2 text-[#1B1B1B] font-normal'> {value} </button>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <p className='text-[#000000] font-normal pt-6'> Share this Case Study </p>
                    <div className=' flex flex-row gap-3 items-center pt-3'>
                        {
                            projectOverviewDetails?.socialLinks?.map((value, index) => (
                                <Link href={value?.link} key={index} className=' w-7 h-7 rounded-full bg-[#555555] flex-center '> {value?.icon}</Link>
                            ))
                        }
                    </div>
                </div>

                <div className=' w-[80%]  '>
                    <p className=' text-[#818181] text-xl tracking-wide leading-9 pb-8'>{projectOverviewDetails?.description}</p>
                    <Image src={projectOverviewDetails?.image} alt='' height={1100} width={1200} className=' h-[1100px]' />
                </div>
            </div>
        </div >
    );
};

export default ProjectOverview;