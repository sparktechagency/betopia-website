"use client";
import React from "react";
import BlogDetailsBanner from "./BlogDetailsBanner";
import { useSearchParams } from "next/navigation";
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from "@/datas/pages/blog";
import BlogDetailsIntro from "./BlogDetailsIntro";
import ContentTable from "./ContentTable";
import Conclusion from "./Conclusion";
import MoreHighlights from "./MoreHighlights";
import Sumarry from "./Sumarry";
import SGConference from "../blog/SGConference";
import BlogDetailsContent from "./BlogDetailsContent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const portfolioDataMap: any = {
  "enterprise-resource-planning": Blog1,
  "SG60IPS-SBF": Blog2,
  "enhancing-collaboration": Blog3,
  "joint-workshop": Blog4,
  "sales-training": Blog5,
};

const BlogDetailsMain: React.FC = () => {
  const params = useSearchParams();
  const blog = params.get("blog");
  const blogDetails = portfolioDataMap[blog ?? "enterprise-resource-planning"];

  return (
    <div>
      <BlogDetailsBanner {...blogDetails.banner} />
      <div className="container grid lg:grid-cols-12 mb-8 ">
        <div className="lg:col-span-4 border-t border-r border-[#F79549]  ">
          <div className="py-5 border-b border-[#F79549]">
            <Sumarry
              publishingDate={blogDetails.publishDate}
              category={blogDetails.category}
              readingTime={blogDetails.readingTime}
              authorName={blogDetails.authorName}
            />
          </div>
          <div className=" pr-10 hidden lg:block">
            <ContentTable list={blogDetails.contentTable} />
            <MoreHighlights />
          </div>
        </div>
        <div className="lg:col-span-8 border-t border-[#F79549]">
          <div className="lg:pl-10 py-10 border-b border-[#F79549]">
            <BlogDetailsIntro
              introduction1={blogDetails.introduction1}
              introduction2={blogDetails.introduction2}
              introduction3={blogDetails.introduction3}
            />
          </div>
          <div className=" lg:pl-10 pt-10">
            <BlogDetailsContent contents={blogDetails.content} />
          </div>
          <div className=" lg:pl-10 pt-5">
            <Conclusion
              conclusion1={blogDetails.conclusion1}
              conclusion2={blogDetails.conclusion2}
              conclusionList={blogDetails.conclusionList}
            />
          </div>
        </div>
      </div>

      <p className=" text-xl text-blue-900 text-center pb-8  ">
        Good or bad, we’d love to hear your thoughts. Find us on Linkedin{" "}
        <span className="text-primary">(@Linkedin) </span>{" "}
      </p>
      <div className=" container mb-12">
        <SGConference />
      </div>
    </div>
  );
};

export default BlogDetailsMain;
