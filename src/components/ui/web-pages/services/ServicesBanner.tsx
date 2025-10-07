"use client";
import PageBanner from "@/components/shared/PageBanner";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServicesBanner = ({ serviceData }: { serviceData: any }) => {
  return (
    <div>
      <PageBanner
        videoSrc={serviceData?.videoSrc}
        title={serviceData?.title}
        description={serviceData?.description}
        buttonName={"Book Our Service"}
        buttonLink={"/contact"}
      />
    </div>
  );
};

export default ServicesBanner;
