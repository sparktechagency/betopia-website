import { ServicesArray } from '@/datas/pages/home';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Services: React.FC = () => {
    return (
        <div className='mb-10 container'>
            <h1 className='text-center text-[36px] font-light '>Highly Effective <span className='text-primary'>Solutions</span></h1>
            <p className='text-center w-[418px] mx-auto text-[16px] leading-[24px] text-[#6D758F] tracking-wide'>Betopia Limited offers innovative cloud modernization and managed services to enhance business efficiency.</p>

            <div className='grid grid-cols-1 gap-20 mt-10'>
                {
                    ServicesArray?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={` ${index % 2 === 0 ? "flex items-center gap-10" : "flex flex-row-reverse items-center gap-10 " }`}>
                                    <div
                                        className="w-full h-[504px]  bg-black/60 rounded-xl"
                                        style={{
                                            backgroundImage: `url(${item.imgUrl})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                    <div>
                                        <h1 className="text-[24px] leading-[32px] text-[#414042] font-light">{item.title}</h1>
                                        <p className="text-[#41404299]/70  leading-[22px]">{item.description}</p>

                                        <div className='grid grid-cols-1 gap-4 mt-10'>
                                            {
                                                item?.service?.map((service, index) => (
                                                    <Link href={`/services?service=${service}`} key={index} className='flex items-center justify-between gap-4'>
                                                        <p>{service}</p>
                                                        <div className='w-[48px] bg-[#F79549] h-[48px] rounded-full flex items-center justify-center'>
                                                            <ChevronRight size={24} color='white' />
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services