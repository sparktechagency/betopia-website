import ComponentTitle from '@/components/shared/ComponentTitle';
import { HighlightsData } from '@/datas/pages/blog';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Highlights: React.FC = () => {
    return (
        <div className='container mb-20'>
            <ComponentTitle className=' text-[#646464] pb-9'>More <span className='text-primary'>Highlights</span> </ComponentTitle>
            <div className='grid grid-cols-3 gap-4'>
                {
                    HighlightsData.map((data, index) => (
                        <div key={index} className='bg-[#ECE9E9] rounded-[20px] p-[30px]'>
                            <div className="h-[48px] overflow-hidden flex-center w-[48px] mb-[15px] rounded-[8px] drop-shadow-2xl">
                                <Image style={{ borderRadius: "8px" }} src={data.img} alt="Dubai" width={60} height={60} />
                            </div>
                            <p className='text-[#000000] text-[25px] leading-[130%]'>{data.title}</p>
                            <p className='pb-8 text-[#000000] text-[25px] leading-[130%]'>{data.subTitle}</p>

                            <p className='text-[#000000] text-[20px] leading-[130%]'>{data.content}</p>
                            <div className='flex items-center justify-end gap-2'>
                                <p className='text-[#858585]'>Learn more</p>
                                <MoveRight size={15} color='#F69348'/>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Highlights;