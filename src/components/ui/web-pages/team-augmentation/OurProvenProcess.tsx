import ComponentTitle from '@/components/shared/ComponentTitle';
import { provenProcessSteps } from '@/datas/pages/teamAugmentation';
import Image from 'next/image';
import React from 'react';

const OurProvenProcess = () => {
    return (
        <div className=' py-20 bg-gradient-to-r from-[#F79549]/20 to-[#fff]'>
            <div className='container mx-auto'>
                <ComponentTitle className=' pb-6 flex-center'>Our Proven <span className='text-primary'> Process </span> </ComponentTitle>
                <div className='flex flex-col justify-center items-center '>
                    <p className=' w-[40%] text-[#757575] text-lg font-normal text-center  pb-10 '> Timeline infographic design elements with circle shapes and marketing icons. Business concept with 4 options, steps or processes.</p>
                </div>

                <div className="w-full  mx-auto ">
                    {/* Dotted border container */}
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {provenProcessSteps.map((step, index) => (
                                <div key={step.id} className="flex flex-col items-center relative">
                                    {index < provenProcessSteps.length - 1 && (
                                        <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300 z-10" />
                                    )}

                                    <div className="flex-center mb-6">
                                      <Image src={step.imgUrl} alt={`Step ${step.id}`} width={180} height={205} />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center space-y-2">
                                        <h3
                                            className={`font-bold text-2xl ${index === 0
                                                ? "text-emerald-400"
                                                : index === 1
                                                    ? "text-teal-500"
                                                    : index === 2
                                                        ? "text-yellow-500"
                                                        : "text-red-500"
                                                }`}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-[#414042]/60 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProvenProcess;