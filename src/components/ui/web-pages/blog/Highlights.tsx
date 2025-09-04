import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const datas = [
    {
        title: "Enhancing",
        subTitle: "Collaboration",
        img: "/highlights/step1.png",
        content: "Bdcalling IT Ltd- a concern of Betopia Group has participated in the seminar titled “Enhance Collaboration Between Institute and Industry”, "
    },
    {
        title: "Joint",
        subTitle: "Workshop",
        img: "/highlights/step2.png",
        content: "Betopia Group & CUET Organized Career Pathways in Web and Software Development & Farewell of the 2019 Batch."
    },
    {
        title: "Sales ",
        subTitle: "Training",
        img: "/highlights/step3.png",
        content: "Betopia Group organized a dynamic Next Level Sales Training aimed at enhancing the skills and capabilities of sales"
    }
]


const Highlights: React.FC = () => {
    return (
        <div className='container mb-[99px]'>
            <h1 className='text-[64px] leading-[140%] text-[#646464]'>More <span className='text-primary'>Highlights</span> </h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    datas.map((data, index) => (
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