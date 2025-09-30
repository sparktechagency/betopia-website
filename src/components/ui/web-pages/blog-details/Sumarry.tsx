import React from 'react';

interface ISumarryProps {
    publishingDate: string;
    category: string;
    readingTime: string;
    authorName: string;

}


const Sumarry: React.FC<ISumarryProps> = ( {publishingDate, category, readingTime, authorName} ) => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex items-center justify-center flex-col'>
                <p className='text-[#555555] text-lg'>Publication Date</p>
                <p>{publishingDate}</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <p className='text-[#555555] text-lg'>Category</p>
                <p>{category}</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <p className='text-[#555555] text-lg'>Reading Time</p>
                <p>{readingTime}</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <p className='text-[#555555] text-lg'>Author Name</p>
                <p>{authorName}</p>
            </div>
        </div>
    );
};

export default Sumarry;