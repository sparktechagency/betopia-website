/* eslint-disable @next/next/no-img-element */
import React from 'react';

const OfferCard = ({ item }: { item: { imgUrl: string, title: string, description: string } }) => {
    return (
        <div className='border border-[#47474731] rounded-xl bg-white p-5  min-h-[180px] shadow'>
            <div className=' flex flex-col gap-y-3'>
                <div className='flex items-center  gap-x-3'>
                    <img src={item?.imgUrl} alt="" className=' h-9 w-9' />
                    <h3 className='text-xl font-medium text-primary'>{item?.title}</h3>
                </div>

                <p className='text-[#757575] text-[16px] font-normal'>{item?.description}</p>

            </div>
        </div>
    );
};

export default OfferCard;