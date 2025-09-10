"use client"
import PageBanner from '@/components/shared/PageBanner';
import { aiServicesData, cloudServicesData, cybersecurityServicesData } from '@/datas/pages/services';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const bannerDataMap: Record<string, typeof cloudServicesData> = {
    "Cloud Services": cloudServicesData,
    "Cybersecurity Services": cybersecurityServicesData,
    "AI Services": aiServicesData,
};

const ServicesBanner = () => {
    const params = useSearchParams();
    const service = params.get('service')
    console.log(service);

    const serviceBannerData = bannerDataMap[service ?? "Cloud Services"];

    return (
        <div>
            <PageBanner videoSrc={serviceBannerData?.videoSrc} title={serviceBannerData?.title} description={serviceBannerData?.description} buttonName={serviceBannerData?.buttonName} buttonLink={serviceBannerData?.buttonLink} />
        </div>
    );
};

export default ServicesBanner;