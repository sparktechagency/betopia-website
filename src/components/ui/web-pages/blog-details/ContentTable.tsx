import React from 'react';

interface IContentTableProps {
    list: string[];
}

const ContentTable: React.FC<IContentTableProps> = ({ list }) => {
    return (
        <div>
            <h2 className='text-[#666666] text-[28px] leading-[100%] mb-6'>Table of Contents</h2>
            <ul className='grid grid-cols-1 gap-2 list-disc pl-6'>
                {
                    list.map((item, index) => (
                        <li key={index} className='text-[#181818] text-[18px] leading-[24px]'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContentTable