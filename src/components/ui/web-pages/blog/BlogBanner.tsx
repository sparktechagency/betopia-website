import PageBanner from '@/components/shared/PageBanner';
import React from 'react';

const BlogBanner: React.FC = () => {
    return (
        <PageBanner
            videoSrc="https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4"
            title={<p><span className='text-primary'>Spotlight</span> from</p>}
            subtitle="Betopia Limited"
            description="Uncover In-Depth Content and Strategies to Elevate Your Business with Our Latest Posts. Read Engaging Stories and Expert Insights."
            buttonName="Explore more about Betopia"
            buttonLink=""
        />
    );
};

export default BlogBanner;