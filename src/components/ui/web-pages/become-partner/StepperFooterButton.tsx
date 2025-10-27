/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormInstance } from "antd";

interface StepButtonsProps {
    currentStep: number;
    totalSteps: number;
    setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
    setCurrentStep: (currentStep: number) => void;
    form: FormInstance;
    stepLength: number;
    setAllFormValues: React.Dispatch<React.SetStateAction<any>>;
}

const StepperFooterButton: React.FC<StepButtonsProps> = ({
    currentStep,
    setCurrentStep,
    totalSteps,
    form,
    setCompletedSteps,
    stepLength,
    setAllFormValues
}) => {
    const isLastStep = currentStep === totalSteps - 1;

    const handleContinue = async () => {
        try {
            await form.validateFields();
            const currentValues = await form.validateFields();
            console.log("current value ", currentValues);
            setAllFormValues((prev:any) => ({
                ...prev,
                ...currentValues,
            }));
            if (currentStep < stepLength - 1) {
                setCompletedSteps((prev) =>
                    prev.includes(currentStep) ? prev : [...prev, currentStep]
                );
                setCurrentStep(currentStep + 1);
            }
        } catch (error) {
            console.log("Validation failed", error);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
                onClick={handleContinue}
                className="flex-1 py-3 px-6 bg-primary  text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none "
            >
                <span>{isLastStep ? "Submit" : "Continue"}</span>
                <ArrowRight className="w-5 h-5" />
            </button>

            <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex-1 py-3 px-6 bg-orange-100 text-primary rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-orange-300  ${currentStep === 0
                    ? "opacity-50 cursor-not-allowed hover:bg-orange-100"
                    : "hover:bg-orange-200"
                    }`}
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
            </button>
        </div>
    );
};

export default StepperFooterButton;
