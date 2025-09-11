"use client"
import React, { useState } from 'react';
import BusinessDetailsComponent from './BusinessDetailsComponent';
import BusinessInfoComponent from './BusinessInfoComponent';
import LocationComponent from './LocationComponent';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const steps = [
    { name: "business", label: "Business", component: <BusinessDetailsComponent /> },
    { name: "business-details", label: "Business Details", component: <BusinessDetailsComponent /> },
    { name: "business-info", label: "Business Information", component: <BusinessInfoComponent /> },
    { name: "location", label: "Location", component: <LocationComponent /> },
];

const PartnerSteps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([0]);

    const handleContinue = () => {
        if (currentStep < steps.length - 1) {
            setCompletedSteps([...completedSteps, currentStep]);
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCompletedSteps((prev) => prev.filter((i) => i !== currentStep - 1));
            setCurrentStep(currentStep - 1);
        }
    };

    const handleDone = () => {
    };

    return (
        <div className=' flex flex-row items-start gap-x-20 h-[500px]'>
            <div className="flex flex-row gap-x-[32px] w-2/5 ">
                {/* Step indicators */}
                <div className=' w-[56px]  flex-center'>
                    <div className='flex flex-col items-center justify-center gap-y-[32px] p-2 bg-[#D9D9D9]/44  rounded-full '>
                        {steps.map((step, index) => (
                            <div
                                key={step.name}
                                // href={`/products?product=${step.name}`} 
                                className={`group flex items-center rounded-full transition-all duration-300`}
                            >
                                <div
                                    className={`w-[40px] h-[40px] rounded-full flex-center transition-all duration-300 ease-in-out bg-white text-black
                                ${completedSteps.includes(index) ? 'bg-primary text-white' : ''} 
                                ${currentStep === index ? 'bg-primary text-white scale-110 shadow-md' : 'bg-white text-black'}`}
                                >
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step labels */}
                <div className='flex flex-col items-start justify-center gap-y-[32px] p-2 '>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            // href={`/products?product=${step.name}`} 
                            className={`group flex items-center rounded-full transition-all duration-300`}
                        >
                            <div
                                className={`flex-center text-xl font-normal min-h-[40px] text-[#959595]
                                ${currentStep === index ? 'text-[#4A4A4A]' : 'text-[#959595]'}`}
                            >
                                {step.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=' flex flex-col w-3/5 ' >
                <div className="step-content flex-center ">
                    {steps[currentStep].component}
                </div>

                <div className="flex-center ">
                    <div className=' w-full  flex flex-col   gap-4 pt-4'>


                        {currentStep === steps.length - 1 ? (
                            <button
                                onClick={handleDone}
                                className="py-2 px-4 bg-primary !text-white rounded w-full h-[36px] flex-center gap-1"
                            >
                                <span> Submit </span>   <span> <IoMdArrowForward /> </span>
                            </button>
                        ) : (
                            <button
                                onClick={handleContinue}
                                className="py-2 px-4 bg-primary !text-white rounded w-full h-[36px] flex-center gap-1"
                            >
                                <span> Continue </span>   <span> <IoMdArrowForward /> </span>
                            </button>
                        )}
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className="py-2 px-4 bg-[#F69348]/40 !text-white rounded w-full h-[36px] flex-center gap-1 border border-primary"
                        >
                            <span> <IoMdArrowBack /> </span>   <span> Back </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSteps;
