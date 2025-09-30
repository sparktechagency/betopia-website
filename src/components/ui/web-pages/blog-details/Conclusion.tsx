import React from 'react';

interface IConclusionProps {
    conclusion1: string;
    conclusion2: string;
    conclusionList?: string[];
}

const Conclusion: React.FC<IConclusionProps> = ({ conclusion1, conclusion2 ,conclusionList}) => {
    return (
        <div>
            <h2 className='text-[#555555] text-[24px] leading-[32px] mb-4'>Conclusion</h2>
            <p className='text-[#555555] text-[18px] leading-[24px]'>{conclusion1}</p>
            {
                conclusion2 && <p className='text-[#555555] text-[18px] leading-[24px]'>{conclusion2}</p>
            }
            <div>
                {
                    conclusionList ?
                        <ul className='grid grid-cols-1 gap-2 list-disc pl-6  px-2 py-6 '>
                            {
                                conclusionList.map((item: string, index: number) => (
                                    <li key={index} className='text-[#555555] text-[18px] leading-[24px]'>{item}</li>
                                ))
                            }
                        </ul>
                        : ""
                }
            </div>
        </div>
    )
}

export default Conclusion