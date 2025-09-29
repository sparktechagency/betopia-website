"use client";
import React from 'react'
import BlogDetailsBanner from './BlogDetailsBanner'
import { useSearchParams } from 'next/navigation';
import { Blog1, Blog2 } from '@/datas/pages/blog';
import BlogDetailsIntro from './BlogDetailsIntro';
import ContentTable from './ContentTable';
import Conclusion from './Conclusion';
import MoreHighlights from './MoreHighlights';
import Sumarry from './Sumarry';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <BlogDetailsBanner {...blogDetails.banner} />
            <div className='container grid grid-cols-12 '>
                <div className='col-span-4 border-t border-r border-[#F79549] pr-10 pt-10'>
                    <Sumarry publishingDate={blogDetails.publishingDate} category={blogDetails.category} readingTime={blogDetails.readingTime} authorName={blogDetails.authorName} />
                    <ContentTable list={blogDetails.contentTable} />
                    <MoreHighlights />

                </div>
                <div className='col-span-8 border-t border-[#F79549]'>
                    <div className='pl-10 py-10 border-b border-[#F79549]'>
                        <BlogDetailsIntro introduction1={blogDetails.introduction1} introduction2={blogDetails.introduction2} introduction3={blogDetails.introduction3} />
                    </div>
                    <div className=' pl-10 pt-10'>

                        <Conclusion conclusion1={blogDetails.conclusion1} conclusion2={blogDetails.conclusion2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsMain