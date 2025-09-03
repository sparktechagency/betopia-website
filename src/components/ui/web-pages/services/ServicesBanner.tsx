"use client"
import PageBanner from '@/components/shared/PageBanner';
import { useSearchParams } from 'next/navigation';
import React from 'react';


const cloudServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> Cloud   </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
    buttonName: "Partner With Us ",
    buttonLink: "/schedule"
}
const cybersecurityServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> Cybersecurity  </span> <span className="text-primary">  Services </span>  </p>,
    description: "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions ",
    buttonName: "Partner With Us",
    buttonLink: "/schedule" 
}
const aiServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> AI  </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
    buttonName: "Partner With Us",
    buttonLink: "/schedule"
}

const bannerDataMap: Record<string, typeof cloudServicesData> = {
    "cloud-services": cloudServicesData,
    "cybersecurity-services": cybersecurityServicesData,
    "ai-services": aiServicesData,
};


const ServicesBanner = () => {
    const params = useSearchParams();
    const service = params.get('service') 
    console.log(service);

    const serviceBannerData = bannerDataMap[service ?? "cloud-services"];

    return (
        <div>
            <PageBanner videoSrc={serviceBannerData?.videoSrc} title={serviceBannerData?.title}  description={serviceBannerData?.description} buttonName={serviceBannerData?.buttonName} buttonLink={serviceBannerData?.buttonLink} />
        </div>
    );
};

export default ServicesBanner;