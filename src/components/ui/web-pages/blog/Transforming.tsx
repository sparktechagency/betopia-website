import { TransformingData } from '@/datas/pages/blog';
import React from 'react';
import TransformingCard from './TransformingCard';
import ComponentTitle from '@/components/shared/ComponentTitle';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const Transforming: React.FC = () => {
    return (
        <div className='container mb-20'>
            <ComponentTitle className=' text-[#535353] pb-2'>Transforming Business  </ComponentTitle>
            <ComponentTitle className='flex items-center gap-2'>
                <span className=' text-[#535353]'>with</span>
                <span className='text-primary !text-[40px]'>Betopia Limited</span>
            </ComponentTitle>

            <div className="mx-auto pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {TransformingData.map((item) => (
                        <div key={item.number} >
                            <TransformingCard items={item} />
                        </div>
                    ))}
                </div>
                <Link href={`/products`} className="flex items-end mt-3 justify-end gap-2 cursor-pointer text-[16px] hover:underline">
                    <span>  Explore Our Solutions</span>  <span> <RiArrowRightLine className='text-primary' /> </span>
                </Link>
            </div>

        </div>
    );
};

export default Transforming;