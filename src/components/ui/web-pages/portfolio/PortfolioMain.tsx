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
import { portfolioData } from '@/datas/pages/PortfolioData';

const PortfolioMain = () => { 
    const isManagementDashboard = !!portfolioData?.managementDashboard;

    return (
        <div>
            <PortfolioBanner />
            <ProjectOverview />
            <FeatureFirst />
            <ChallengesWeFaced />
            <PortfolioImages />
            <FeatureSecond />
            {
                isManagementDashboard ? <ManagementDashboard /> : ""
            }
            <FeatureThree />
            <OthersPortfolio />
        </div>
    );
};

export default PortfolioMain;