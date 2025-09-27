import React from 'react';

interface IConclusionProps {
    conclusion1: string;
    conclusion2: string;
}

const Conclusion:React.FC<IConclusionProps> = ({conclusion1, conclusion2}) => {
    return (
        <div>
            <h2 className='text-[#181818] text-[24px] leading-[32px] mb-4'>Conclusion</h2>
            <p className='text-[#181818] text-[18px] leading-[24px]'>{conclusion1}</p>
            {
                conclusion2 && <p className='text-[#181818] text-[18px] leading-[24px]'>{conclusion2}</p>
            }
        </div>
    )
}

export default Conclusion