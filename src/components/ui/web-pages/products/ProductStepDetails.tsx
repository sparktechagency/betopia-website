import OutlineButton from '@/components/shared/OutlineButton';
import { productType } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProductStepDetails = ({ productData }: productType) => {
    return (
        <div>
            <div
                className="relative group cursor-pointer rounded-2xl overflow-hidden flex-1 mb-10"
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6666661A]/10 to-[#000000E5]/90"></div>
                <Image
                    src={productData.solutionForInnovative?.imgUrl}
                    alt={productData.solutionForInnovative?.title}
                    height={320}
                    width={605}
                    className="h-[373px] w-full object-fill"
                />

                {/* Content overlay - same as left */}
                <div className="absolute bottom-[7%] text-[#858585] z-20 text-start w-full">
                    <div className="w-1/2 flex flex-col items-start ps-6">
                        <p className="text-2xl text-normal text-white pb-1">{productData.solutionForInnovative?.title}</p>
                    </div>
                </div>

                {/* Background decoration */}
                <div
                    className={`absolute inset-0 bg-gradient-to-b from-[#666666]/50 to-[#000000]/80`}
                ></div>
            </div>

            <div className='flex items-start gap-4.5 ps-5'>
                <p className=' w-3 h-[80px] bg-primary'> </p>
                <div className=' flex flex-col gap-5'>
                    <p className='text-2xl text-[#666666]'> {productData?.solutionForInnovative?.description}</p>
                    <div>
                        <OutlineButton className=' px-6 py-4'> Partner With Us</OutlineButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStepDetails;