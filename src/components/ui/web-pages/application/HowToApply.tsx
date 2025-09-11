import { HowToApplyData } from '@/datas/pages/Application';
import Image from 'next/image';
import React from 'react';

const HowToApply: React.FC = () => {
    return (
        <div className='container -mt-[52px]'>
            <h1 className='text-[50px] text-center leading-[120%]'>How to  <span className='text-primary'>Apply</span></h1>
            <p className='text-center text-[22px] leading-[140%] text-[#797979]'>Learn about the straightforward steps to apply for the post you fit the most and <br /> start your journey process.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] my-[52px]">
                {
                    HowToApplyData.map((data, index) => (
                        <div key={index} className="bg-[#F693481A]/90 h-[239px] rounded-[12px]">
                            <div className="flex items-center justify-center h-full w-full px-[32px]">
                                <div>
                                    <div className="h-[48px] overflow-hidden flex-center w-[48px] mb-[15px] bg-white rounded-[8px] drop-shadow-2xl">
                                        <Image style={{ borderRadius: "8px" }} src={data.img} alt="Dubai" width={60} height={60} />
                                    </div>

                                    <h2 className="text-[21px] font-bold mb-[15px]">{data.name}</h2>
                                    <p className="text-[18px] text-[#737373] leading-[160%]">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowToApply;