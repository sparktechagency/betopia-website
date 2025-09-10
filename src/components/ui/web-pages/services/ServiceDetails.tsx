"use client"
import { AIServices, CloudService, CybersecurityServices } from '@/datas/pages/services';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import ServiceTitle from './ServiceTitle';
import SubServices from './SubServices';
// import FeaturedProducts from './FeaturedProducts';

const Data: Record<string, typeof CloudService> = {
    "Cloud Services": CloudService,
    "Cybersecurity Services": CybersecurityServices,
    "AI Services": AIServices,
};
const ServiceDetails = () => {
    const params = useSearchParams();
    const service = params.get('service')
    console.log(service);

    const serviceData = Data[service ?? "Cloud Services"];
    return (
        <div className=' '>
            <ServiceTitle serviceData={serviceData} />
            <SubServices serviceData={serviceData} />
            {/* <FeaturedProducts />  */}
        </div>
    );
};

export default ServiceDetails;