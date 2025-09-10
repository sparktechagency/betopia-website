// components/ServiceOverview.tsx
import React from "react";
import { CategoryDetails } from "./SubServices";
import OutlineButton from "@/components/shared/OutlineButton";
import Link from "next/link";

const ServiceOverview = ({
    selectedCategory,
}: {
    selectedCategory: CategoryDetails | null;
}) => {
    if (!selectedCategory) {
        return null;
    }

    console.log(selectedCategory, "selectedCategory");
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full my-20 px-4 lg:px-0">
            {/* Left Content */}
            <div className="space-y-6">
                <h2 className="font-medium text-[32px] lg:text-[40px] text-[#414141] pb-3">
                    <span className="border-b-2 border-primary">Service </span> Overview
                </h2>

                <p className="font-normal text-[28px] lg:text-[36px] text-[#414141] pb-4">
                    {selectedCategory?.name}
                </p>

                <p className="text-lg lg:text-2xl text-[#666666] leading-relaxed pb-6">
                    {selectedCategory?.description}
                </p>

                <Link href="/partner">
                    <OutlineButton className="!px-6 !py-4 text-lg">
                        Partner With Us
                    </OutlineButton>
                </Link>
            </div>

            {/* Right Video */}
            <div className="relative w-full h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <video
                    key={selectedCategory?.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={selectedCategory?.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default ServiceOverview;
