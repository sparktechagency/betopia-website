import ComponentTitle from '@/components/shared/ComponentTitle';
import { serviceType } from '@/types';
import React from 'react';


const ServiceTitle = ({serviceData}:serviceType) => {
    return (
        <div className='flex flex-col justify-center items-center -mt-10'> 
            <ComponentTitle className=' pb-6'><span className='text-primary'> Betopia </span> <span> {serviceData?.title} </span> </ComponentTitle>
            <p className=' w-[40%] text-[#757575] text-lg font-normal text-center pb-10 '> {serviceData?.subtitle}</p> 
            <p className='text-lg font-normal  text-[#262626] w-[62%] text-center'>{serviceData?.description}</p>
        </div>
    );
};

export default ServiceTitle;