"use client";
import React from 'react'
import BlogDetailsBanner from './BlogDetailsBanner'
import { useSearchParams } from 'next/navigation';
import { Blog1, Blog2 } from '@/datas/pages/blog';
import BlogDetailsIntro from './BlogDetailsIntro';
import ContentTable from './ContentTable';
import Conclusion from './Conclusion';

const portfolioDataMap: any = {
    "enterprise-resource-planning": Blog1,
    "SG60IPS-SBF": Blog2,
    "transforming-industry": Blog1,
    "enhancing-collaboration": Blog1,
    "joint-workshop": Blog1,
    "sales-training": Blog1,
};

const BlogDetailsMain: React.FC = () => {
    const params = useSearchParams();
    const blog = params.get('blog');
    const blogDetails = portfolioDataMap[blog ?? "enterprise-resource-planning"]; 
    console.log(blogDetails)
    return (
        <div> 
            <BlogDetailsBanner {...blogDetails.banner}  />
            <BlogDetailsIntro introduction1={blogDetails.introduction1} introduction2={blogDetails.introduction2} introduction3={blogDetails.introduction3} />
            <ContentTable list={blogDetails.contentTable} />
            <Conclusion conclusion1={blogDetails.conclusion1} conclusion2={blogDetails.conclusion2} />
        </div>
    )
}

export default BlogDetailsMain