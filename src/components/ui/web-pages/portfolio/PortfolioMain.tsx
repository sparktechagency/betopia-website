"use client"
import React from 'react';
import PortfolioBanner from './PortfolioBanner';
import ProjectOverview from './ProjectOverview';
import FeatureFirst from './FeatureFirst';
import ChallengesWeFaced from './ChallengesWeFaced';
import PortfolioImages from './PortfolioImages';
import FeatureSecond from './FeatureSecond';
import ManagementDashboard from './ManagementDashboard';
import FeatureThree from './FeatureThree';
import OthersPortfolio from './OthersPortfolio';
import { NutriAIData, portfolioData, umrahGuideData } from '@/datas/pages/PortfolioData';
import { useSearchParams } from 'next/navigation';

const portfolioDataMap: Record<string, typeof portfolioData | typeof NutriAIData> = {
    "Chase The Cash SA": portfolioData,
    "Umrah Guide": umrahGuideData,
    "Nutri AI": NutriAIData,
};
const PortfolioMain = () => {
    const params = useSearchParams();
    const portfolio = params.get('portfolio')

    const portfolioDetails = portfolioDataMap[portfolio ?? "Chase The Cash SA"];


    return (
        <div>
            <PortfolioBanner portfolioDetails={portfolioDetails} />
            <ProjectOverview portfolioDetails={portfolioDetails}/>
            <FeatureFirst portfolioDetails={portfolioDetails} />
            <ChallengesWeFaced portfolioDetails={portfolioDetails}  />
            <PortfolioImages  portfolioDetails={portfolioDetails} />
            <FeatureSecond  portfolioDetails={portfolioDetails} />
            {portfolioDetails?.managementDashboard && (
                <ManagementDashboard portfolioDetails={portfolioDetails} />
            )}
            <FeatureThree portfolioDetails={portfolioDetails} />
            <OthersPortfolio portfolioDetails={portfolioDetails}  />
        </div>
    );
};

export default PortfolioMain;