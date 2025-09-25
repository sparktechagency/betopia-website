import PageBanner from '@/components/shared/PageBanner';
import { portfolioDetailsType } from '@/types';
import React from 'react';

const PortfolioBanner = ({ portfolioDetails }: portfolioDetailsType) => { 

    const bannerDetails = portfolioDetails?.banner 

    return (
        <div>
            <PageBanner videoSrc={bannerDetails?.videoSrc} title={bannerDetails?.title} subtitle={bannerDetails?.subtitle} description={bannerDetails?.description} buttonName={bannerDetails?.buttonName} buttonLink={bannerDetails?.buttonLink} />
        </div>
    );
};

export default PortfolioBanner;