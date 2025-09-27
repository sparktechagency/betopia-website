import { HighlyEffectiveSolutionsServices } from '@/datas/pages/home';
import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Services: React.FC = () => {
    return (
        <div className='mb-10 container'>
            <h1 className='text-center text-[36px] font-light '>Highly Effective <span className='text-primary'>Solutions</span></h1>
            <p className='text-center w-[418px] mx-auto text-[16px] leading-[24px] text-[#6D758F] tracking-wide'>Betopia Limited offers innovative cloud modernization and managed services to enhance business efficiency.</p>

            <div className='grid grid-cols-3 gap-20 mt-10'>
                {
                    HighlyEffectiveSolutionsServices?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-auto h-[504px] border rounded-xl overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="w-full h-full bg-black/60 flex flex-col justify-end p-4  px-6 text-white">
                                    <h4 className="text-2xl font-light">{item.name}</h4>
                                    <p className="text-sm font-light pb-3">{item.content}</p>
                                    <Link href={`/services?service=${item?.name}`} className="flex items-center gap-2 cursor-pointer text-[16px] hover:underline">
                                        <span>  Learn More </span>  <span> <RiArrowRightLine className='text-primary' /> </span>
                                    </Link>
                                </div>
                            </div>

                        )  })
                }
            </div>
        </div>
    )
}

export default Services