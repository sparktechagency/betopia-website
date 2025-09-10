import PageBanner from '@/components/shared/PageBanner';
import { portfolioData } from '@/datas/pages/PortfolioData';
import React from 'react';

const PortfolioBanner = () => {
    const bannerDetails = portfolioData?.banner
    return (
        <div>
            <PageBanner videoSrc={bannerDetails?.videoSrc} title={bannerDetails?.title} subtitle={bannerDetails?.subtitle} description={bannerDetails?.description} buttonName={bannerDetails?.buttonName} buttonLink={bannerDetails?.buttonLink} />
        </div>
    );
};

export default PortfolioBanner;