"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import BusinessDetailsComponent from './BusinessDetailsComponent';
import BusinessInfoComponent from './BusinessInfoComponent';
import LocationComponent from './LocationComponent';

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
            setCurrentStep(currentStep - 1);
        }
    };

    const handleDone = () => {

        console.log("Process completed");
    };

    return (
        <div>
            <div className="flex flex-row gap-x-[62px]">
                {/* Step indicators */}
                <div className='flex flex-col items-center justify-center gap-y-[52px] p-2 py-4 w-20 bg-gradient-to-b from-[#F6F6F6] to-[#E0E0E0] rounded-full'>
                    {steps.map((step, index) => (
                        <Link
                            key={step.name}
                            href={`/products?product=${step.name}`}
                            className={`group flex items-center rounded-full transition-all duration-300`}
                        >
                            <div
                                className={`w-[52px] h-[52px] rounded-full flex-center transition-all duration-300 ease-in-out bg-white text-black
                                ${completedSteps.includes(index) ? 'bg-primary text-white' : ''} 
                                ${currentStep === index ? 'bg-primary text-white scale-110 shadow-md' : 'bg-white text-black'}`}
                            >
                                {index + 1}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Step labels */}
                <div className='flex flex-col items-start justify-center gap-y-[52px] p-2 py-3'>
                    {steps.map((step, index) => (
                        <Link
                            key={index}
                            href={`/products?product=${step.name}`}
                            className={`group flex items-center rounded-full transition-all duration-300`}
                        >
                            <div
                                className={`flex-center text-[22px] font-normal min-h-[52px] text-[#959595]
                                ${currentStep === index ? 'text-[#4A4A4A]' : 'text-[#959595]'}`}
                            >
                                {step.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <div className="step-content">
                <h2>{steps[currentStep].label}</h2>
                {steps[currentStep].component}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-x-4">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="py-2 px-4 bg-gray-400 text-white rounded"
                >
                    Back
                </button>
                {currentStep === steps.length - 1 ? (
                    <button
                        onClick={handleDone}
                        className="py-2 px-4 bg-primary text-white rounded"
                    >
                        Done
                    </button>
                ) : (
                    <button
                        onClick={handleContinue}
                        className="py-2 px-4 bg-primary text-white rounded"
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
};

export default PartnerSteps;
