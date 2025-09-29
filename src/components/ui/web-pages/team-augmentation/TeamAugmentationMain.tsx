import React from 'react';
import TeamAugmentationBanner from './TeamAugmentationBanner';
import WhatWeOffer from './WhatWeOffer';
import TalentCategories from './TalentCategories';
import OurEngagementModals from './OurEngagementModals';
import CompanyChoose from './CompanyChoose';
import CaseStudies from './CaseStudies';

const TeamAugmentationMain = () => {
    return (
        <div>
            <TeamAugmentationBanner />
            <WhatWeOffer />
            <TalentCategories />
            <OurEngagementModals />
            <CompanyChoose />
            <CaseStudies />
        </div>
    );
};

export default TeamAugmentationMain;