"use client";
import React, { useState } from "react";
import BusinessDetailsComponent from "./BusinessDetailsComponent";
import BusinessInfoComponent from "./BusinessInfoComponent";
import LocationComponent from "./LocationComponent";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import SubmitDocumentComponent from "./SubmitDocument";

const steps = [
  {
    name: "business-details",
    label: "Business Details",
    component: <BusinessDetailsComponent />,
  },
  {
    name: "business-info",
    label: "Business Information",
    component: <BusinessInfoComponent />,
  },
  {
    name: "location",
    label: "Location",
    component: <LocationComponent />,
  },
  {
    name: "submit-document",
    label: "Submit Document",
    component: <SubmitDocumentComponent />,
  },
];

const PartnerSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) =>
        prev.includes(currentStep) ? prev : [...prev, currentStep]
      );
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  const isStepCompleted = (index: number) => completedSteps.includes(index);
  const isStepCurrent = (index: number) => currentStep === index;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-12 xl:gap-20 w-full  p-4 md:p-6">
      {/* Stepper Navigation */}
      <div className="w-full lg:w-auto lg:min-w-[280px] xl:min-w-[320px]">
        <div className="flex lg:flex-row gap-4 lg:gap-8">
          {/* Step indicators */}
          <div className="flex flex-row md:flex-col justify-center lg:justify-start  items-center lg:items-start w-full lg:w-auto">
            <div className="flex flex-row md:flex-col items-center gap-4 lg:gap-8 p-3 lg:p-4 bg-gray-200/40 rounded-full">
              {steps.map((step, index) => {
                const isCompleted = isStepCompleted(index);
                const isCurrent = isStepCurrent(index);
                const isDisabled = !isCompleted && index > currentStep;

                let buttonClass =
                  "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out font-medium text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ";
                if (isCompleted)
                  buttonClass += "bg-primary text-white hover:bg-orange-600 ";
                else if (isCurrent)
                  buttonClass +=
                    "bg-primary text-white scale-110 shadow-lg ring-2 ring-orange-300 ";
                else if (isDisabled)
                  buttonClass +=
                    "bg-white text-gray-600 opacity-50 cursor-not-allowed ";
                else buttonClass += "bg-white text-gray-600 hover:bg-gray-50 ";

                return (
                  <React.Fragment key={step.name}>
                    <button
                      onClick={() => {
                        if (isCompleted || index < currentStep)
                          setCurrentStep(index);
                      }}
                      disabled={isDisabled}
                      className={buttonClass}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 md:w-6 md:h-6" />
                      ) : (
                        index + 1
                      )}
                    </button>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-6 bg-gray-300" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Step labels */}
          <div className="hidden md:flex flex-col gap-8 lg:gap-[82px] pl-4 pt-2">
            {steps.map((step, index) => {
              const isCurrent = isStepCurrent(index);
              const labelClass = isCurrent
                ? "text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A]"
                : "text-sm md:text-base lg:text-lg font-medium text-[#959595]";

              return (
                <div key={index} className="flex items-center h-12 lg:h-14">
                  <span className={labelClass}>{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current step label for mobile */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-sm font-medium text-[#4A4A4A]">
            {steps[currentStep].label}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full lg:max-w-2xl xl:max-w-3xl">
        <div className="mb-6 lg:mb-8">{steps[currentStep].component}</div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {isLastStep ? (
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span>Submit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className="flex-1 py-3 px-6 bg-primary hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex-1 py-3 px-6 bg-orange-100 text-orange-600 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
              currentStep === 0
                ? "opacity-50 cursor-not-allowed hover:bg-orange-100"
                : "hover:bg-orange-200"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSteps;
