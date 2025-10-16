import React from 'react';

interface IContentTableProps {
    list: string[];
}

const ContentTable: React.FC<IContentTableProps> = ({ list }) => {
    return (
        <div className=' py-10'>
            <h2 className='text-[#666666] text-[28px] font-light leading-[100%] pb-4'>Table of Contents</h2> 
            <div className='bg-gradient-to-b from-[#FFF4E9] to-[#F69348]/70 border border-primary rounded-2xl'> 
            <ul className='grid grid-cols-1 gap-2 list-disc pl-12  px-2 py-6 '>
                {
                    list.map((item, index) => (
                        <li key={index} className='text-[#181818] text-[18px] leading-[24px]'>{item}</li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

export default ContentTable