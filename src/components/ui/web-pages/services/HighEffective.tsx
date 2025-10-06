import ComponentTitle from '@/components/shared/ComponentTitle';
import React from 'react';
import ServiceCard from './ServiceCard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HighEffective = ({ serviceData }: { serviceData: any }) => {
    return (
        <div className='container '>
            <div className=' flex flex-col items-center justify-center gap-1 my-8  '>
                <ComponentTitle className=' !text-center pb-2'> <span className=' text-[#000000]'> Highly Effective  </span> <span className='text-primary'>Solutions</span> </ComponentTitle>
                <div className=' w-full flex-center flex-col gap-0.5'>
                    <p className='text-[20px] text-[#757575] text-center  w-[40%] leading-8'>tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability.</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-[30px]'>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    serviceData?.highlyEffectiveData?.map((item: any, index: number) => (
                        <div key={index}>
                            <ServiceCard item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HighEffective;