// components/ServiceOverview.tsx
import Image from 'next/image';
import React from 'react';
import { CategoryDetails } from './SubServices';
import OutlineButton from '@/components/shared/OutlineButton';

const ServiceOverview = ({ selectedCategory }: { selectedCategory: CategoryDetails|null }) => {
    if (!selectedCategory) {
        return null;  
    }

    return (
        <div className=" flex items-center justify-between w-full my-20 ">
            <div className="w-full"> 
                <p className='font-medium text-[40px] text-[#414141] pb-9 '> <span className='border-b-2 border-primary '>Service </span> Overview</p>
                <p className="font-normal text-[40px] text-[#414141] pb-4">{selectedCategory?.name}</p>
                <p className="text-2xl text-[#666666] pb-14">
                    {selectedCategory?.description}
                </p>
              <div className=' '> 
                <OutlineButton className=' !px-4 !py-4'> Partner With Us</OutlineButton>
              </div>
            </div>
            <div className=" w-full flex  justify-end">
                <Image
                    src={selectedCategory?.imgUrl}  
                    alt={selectedCategory?.name}
                    width={600}
                    height={300}
                    className="rounded-lg "
                />
            </div>
        </div>
    );
};

export default ServiceOverview;
