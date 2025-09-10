import PageBanner from '@/components/shared/PageBanner';
import React from 'react';

const ApplicationBanner: React.FC = () => {
    return (
        <PageBanner
            videoSrc="https://res.cloudinary.com/dreiyzj42/video/upload/v1757501078/career_page_jtr5wl.mp4"
            title="Thrive with Betopia’s "
            subtitle={<div> <span className='text-primary'>Talent</span> Community </div>}
            description="Unleash Your Full Potential Within a Dynamic and Collaborative Environment That Drives Meaningful Global Impact Through Innovative Solutions"
            buttonName="Find Your Opportunity"
            buttonLink=""
        />
    );
};

export default ApplicationBanner;