import { productType } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProductFacilities = ({ productData }: productType) => {
    return (
        <div className=' mb-20  pt-5'>
            <div className=' grid grid-cols-4 gap-x-[65px]'> 
                {
                    productData?.facilities?.map((item , index)=>(
                        <div key={index} className=' flex flex-col '> 
                                <div className=' bg-[#F0F0F0] w-[71px] h-[71px] rounded-full flex-center mb-6'> 
                                    <Image src={item?.icon} alt="" height={30} width={30} className=' w-[30px] h-[30px]' />
                                </div> 
                                <p className='text-2xl text-[#1E1E1E] pb-3'>{item?.title}</p> 
                                <p className='text-[#686868] font-normal text-lg'>{item?.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductFacilities;