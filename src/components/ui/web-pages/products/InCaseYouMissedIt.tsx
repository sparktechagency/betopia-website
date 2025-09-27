import ComponentTitle from '@/components/shared/ComponentTitle';
import { IncaseYouMissed } from '@/datas/pages/home';
import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const InCaseYouMissedIt = () => {
    return (
        <div className=' container  mb-20'>
            <div className=' w-full'>
                <ComponentTitle className=' flex-center pb-6'>In Case You Missed It… </ComponentTitle>
                <p className='text-xl text-[#757575] text-center '>Here’s a quick look at the services that make our products even more powerful.</p>
                <div className='grid grid-cols-3 gap-20 mt-10'>
                    {
                        IncaseYouMissed?.map((item, index) => {
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

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default InCaseYouMissedIt;