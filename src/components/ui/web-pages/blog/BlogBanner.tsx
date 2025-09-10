import PageBanner from '@/components/shared/PageBanner';
import React from 'react';

const BlogBanner: React.FC = () => {
    return (
        <PageBanner
            videoSrc="https://res.cloudinary.com/dreiyzj42/video/upload/v1757501387/blog_page_vtkluu.mp4"
            title={<p><span className='text-primary'>Spotlight</span> from</p>}
            subtitle="Betopia Limited"
            description="Uncover In-Depth Content and Strategies to Elevate Your Business with Our Latest Posts. Read Engaging Stories and Expert Insights."
            buttonName="Explore more about Betopia"
            buttonLink=""
        />
    );
};

export default BlogBanner;