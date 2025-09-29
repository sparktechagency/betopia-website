import React from 'react';
import TeamAugmentationBanner from './TeamAugmentationBanner';
import WhatWeOffer from './WhatWeOffer';
import TalentCategories from './TalentCategories';
import OurEngagementModals from './OurEngagementModals';
import CompanyChoose from './CompanyChoose';
import CaseStudies from './CaseStudies';
import OurProvenProcess from './OurProvenProcess';
import IndustriesWeServe from './IndustriesWeServe';
import LookingToScale from './LookingToScale';

const TeamAugmentationMain = () => {
    return (
        <div>
            <TeamAugmentationBanner />
            <WhatWeOffer />
            <TalentCategories />
            <OurEngagementModals />
            <CompanyChoose />
            <CaseStudies />
            <OurProvenProcess />
            <IndustriesWeServe /> 
            <LookingToScale />
        </div>
    );
};

export default TeamAugmentationMain;