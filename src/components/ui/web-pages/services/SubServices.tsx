import React, { useState } from 'react';
import ComponentTitle from '@/components/shared/ComponentTitle';
import { serviceType } from '@/types';
import ServiceOverview from './ServiceOverview';

// Define the CategoryDetails interface
export interface CategoryDetails {
    name: string;
    description: string;
    videoUrl: string;
}

const SubServices = ({ serviceData }: serviceType) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [selectedCategory, setSelectedCategory] = useState<CategoryDetails | null>(serviceData?.services?.categories?.[0]?.details);

    const handleCardClick = (index: number, categoryDetails: CategoryDetails | null) => {
        setActiveIndex(activeIndex === index ? null : index);
        setSelectedCategory(categoryDetails);
    };

    return (
        <div className="my-20 container w-full">
            <ComponentTitle className="pb-3 justify-center">
                {serviceData?.services?.title}
            </ComponentTitle>
            <p className="text-center text-xl text-[#757575]">
                {serviceData?.services?.subtitle}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {serviceData?.services?.categories?.map((value, index) => (
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
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-500" />

                        {/* Text */}
                        <div className="relative z-10 flex flex-col items-start justify-center gap-2 min-h-[240px] max-h-[290px] px-6 text-white transition-all duration-500">
                            <p className=" font-semibold drop-shadow-md">
                                {value?.categoryTitle}
                            </p>
                            <p className="text-xl opacity-90">
                                {value?.categorySubtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className='w-full'>
                <ServiceOverview selectedCategory={selectedCategory} />
            </div> 
          
        </div>
    );
};

export default SubServices;
