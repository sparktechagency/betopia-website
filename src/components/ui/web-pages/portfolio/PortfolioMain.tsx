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

const PortfolioMain = () => {
    return (
        <div>
            <PortfolioBanner />
            <ProjectOverview />
            <FeatureFirst />
            <ChallengesWeFaced />
            <PortfolioImages />
            <FeatureSecond />
            <ManagementDashboard /> 
            <FeatureThree /> 
            <OthersPortfolio />
        </div>
    );
};

export default PortfolioMain;