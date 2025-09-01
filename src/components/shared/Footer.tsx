"use client";
import React from 'react';
import WorldMap from '../WorldMap';
import Image from 'next/image';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import FooterDetials from '../ui/shared-features/footer/FooterDetials';

const Footer: React.FC = () => {
    return (
        <div className='container bg-[#040404] my-10 p-10'>
            <FooterDetials />
            <div className=' pb-3'>
                <Image src="/betopia-large-logo.png" alt="Footer Background" width={1440} height={200} />
            </div>
            <div className='bg-[#181818] p-8 grid grid-cols-12 rounded-[8px]'>
                <div className='col-span-8 h-[460px]'>
                    <WorldMap />
                </div>
                <div className='col-span-4 ml-10 flex flex-col items-end'>
                    <Image src="/dubai.png" alt="Footer Background" width={500} height={400} />
                    <div className='mt-[47px]'>
                        <ul className='grid text-right text-[18px] leading-[24px] grid-cols-1 gap-2 text-white list-none'>
                            <li className='font-bold'>Dubai</li>
                            <li>P.O. Box: 17916, JEBEL ALI</li>
                            <li>FREE ZONE, DUBAI UAE</li>
                            <li>+97148833789</li>
                            <li>
                                <button className='bg-[#424242] h-[36px] mt-[10px] w-[116px] rounded-[6px]'>Contact Us</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <p className='text-[#F8F8F8] text-[18px] leading-[24px]'>© 2025, Betopia Ltd. | All Rights Reserved.</p>
                 <ul className='flex items-center gap-4 ml-10'>
                    <li className='w-10 h-10 bg-[#424242] flex items-center justify-center rounded-full'><Facebook  fill='white'/></li>
                    <li className='w-10 h-10 bg-[#424242] flex items-center justify-center rounded-full'><Instagram /></li>
                    <li className='w-10 h-10 bg-[#424242] flex items-center justify-center rounded-full'><Github /></li>
                    <li className='w-10 h-10 bg-[#424242] flex items-center justify-center rounded-full'><Linkedin /></li>
                 </ul>
            </div>
        </div>
    );
};

export default Footer;