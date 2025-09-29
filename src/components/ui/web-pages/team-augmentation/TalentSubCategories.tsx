"use client";
import { talentCategoriesData } from '@/datas/pages/teamAugmentation';
import React, { useState } from 'react';
import TalentCategoriesDetails from './TalentCategoriesDetails';

export interface CategoryDetails {
    jobTitle: string;
    priceRange: string;
    keyRoles: string[];
    keySkills: string[];
    enterprises: string[];
}


const TalentSubCategories = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [selectedCategory, setSelectedCategory] = useState<CategoryDetails>(talentCategoriesData?.[0]?.details);

    const handleCardClick = (index: number, categoryDetails: CategoryDetails) => {
        setActiveIndex(activeIndex === index ? null : index);
        setSelectedCategory(categoryDetails);
    };
    return (
        <div>
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {talentCategoriesData?.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(index, value?.details)}
                        className={`relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out  
                            ${activeIndex === index
                                ? "scale-105 shadow-2xl h-[290px] bg-red flex flex-col items-start justify-center"
                                : "scale-100 shadow-md min-h-[240px] "
                            }`}
                        style={{ minHeight: "240px" }}
                    >
                        {/* Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                            style={{ backgroundImage: `url(${value?.categoryBgImg})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-colors duration-500" />

                        {/* Text */}
                        <div className="relative z-10 flex flex-col items-start justify-center gap-2 min-h-[240px] max-h-[290px] px-6 text-white transition-all duration-500">
                            <p className=" font-medium  text-xl text-primary">
                                {value?.categoryTitle}
                            </p>
                            <p className="text-sm opacity-90">
                                {value?.categorySubtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div> 
            <TalentCategoriesDetails selectedCategory={selectedCategory} />
        </div>
    );
};

export default TalentSubCategories;