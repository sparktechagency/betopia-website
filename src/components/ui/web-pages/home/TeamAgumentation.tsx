import Image from 'next/image';
import React from 'react';

const TeamAgumentation: React.FC = () => {
    return (
        <div className='bg-[#414042] my-[48px] h-[700px] rounded-[16px] relative overflow-hidden'>
            <Image src="/agumentation/star.png" alt="arrow" width={180} height={180} className='absolute top-0 left-0' />
            <div className='container flex items-center justify-center h-full'>
                <div className='flex items-center justify-center h-full'>
                    <div>
                        <h1 className='text-[36px] text-[#FFFFFF] leading-[40px]'> Scale Your Tech  <span className='text-[#F79549]'>Team Smarter</span> </h1>
                        <p className='text-[#FFFFFF66]/80 text-[16px] leading-[24px]'>Hire pre-vetted global developers, engineers, designers, and project managers at 50–60% lower cost without compromising quality.</p>

                        <div className='mt-[60px]'>
                            <h1 className='text-[24px] text-[#FFFFFF] leading-[36px] '> Benefits of <span className='text-[#F79549]'>Team Augmentation</span> </h1>
                        </div>
                        <div className='grid grid-cols-1 gap-2'>
                            <div className='flex items-center gap-2'>
                                <Image src="/agumentation/world.png" alt="arrow" width={24} height={24} />
                                <p className='text-[#FFFFFF] text-[18px] leading-[24px]'>Access Global Talent</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src="/agumentation/thunder.png" alt="arrow" width={24} height={24} />
                                <p className='text-[#FFFFFF] text-[18px] leading-[24px]'>Faster Time-to-Hire (within 2 weeks)</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src="/agumentation/lock.png" alt="arrow" width={24} height={24} />
                                <p className='text-[#FFFFFF] text-[18px] leading-[24px]'> Enterprise-Grade Security</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-[60px]'>
                            <button className='rounded-[12px] h-11 px-4 bg-[#F79549] text-[18px]' style={{color: "white"}}>Get Talent Profiles</button>
                            <button className='rounded-[12px] h-11 px-4 border border-[#F79549] text-[18px]' style={{color: "white"}}>Book Free Consulataion</button>
                        </div>
                    </div>

                    <div className='relative h-[500px] w-[740px] '>
                        <Image src="/agumentation/banner.jpg" alt="arrow" fill objectFit='cover' objectPosition='center' />
                    </div>
                    
                </div>
            </div>
            <Image src="/agumentation/shape.png" alt="arrow" width={180} height={180} className='absolute -bottom-10 -right-10' />
        </div>
    );
};

export default TeamAgumentation;