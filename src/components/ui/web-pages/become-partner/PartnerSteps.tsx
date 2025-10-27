/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import BusinessDetailsComponent from "./BusinessDetailsComponent";
import BusinessInfoComponent from "./BusinessInfoComponent";
import LocationComponent from "./LocationComponent";
import SubmitDocumentComponent from "./SubmitDocument";
import StepperFooterButton from "./StepperFooterButton";
import StepperNavigation from "./StepperNavigation";
import { Form } from "antd";

const PartnerSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [form] = Form.useForm();
  const [allFormValues, setAllFormValues] = useState<any>();
  const [countryCode, setCountryCode] = useState("+880");

  const isStepCompleted = (index: number) => completedSteps.includes(index);
  const isStepCurrent = (index: number) => currentStep === index;


  const handleFinish = (values: any) => {
 const whatsappNumber = allFormValues.whatsapp ? `${countryCode}${allFormValues.whatsapp}` : "";

  const formValues = {
    ...allFormValues,
    ...values,
    whatsapp_number: whatsappNumber,
  };

  delete formValues.whatsapp;

  console.log("✅ Final Form Values:", formValues);
  }

  const steps = [
    {
      name: "business-details",
      label: "Business Details",
      component: <BusinessDetailsComponent setCountryCode={setCountryCode} countryCode={countryCode} />,
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

  const stepLength = steps.length;

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-12 xl:gap-20 w-full  p-4 md:p-6">
      {/* Stepper Navigation */}
      <StepperNavigation
        steps={steps}
        currentStep={currentStep}
        isStepCompleted={isStepCompleted}
        isStepCurrent={isStepCurrent}
        setCurrentStep={setCurrentStep}
      />

      {/* Content Area */}
      <Form layout="vertical" form={form} onFinish={handleFinish} className=" flex-1 w-full lg:max-w-2xl xl:max-w-3xl mb-5 ">
        <div className="mb-6 lg:mb-8">{steps[currentStep].component}</div>
        {/* Navigation Buttons */}
        <StepperFooterButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          totalSteps={steps.length}
          setCompletedSteps={setCompletedSteps}
          form={form}
          stepLength={stepLength}
          setAllFormValues={setAllFormValues}
        />
      </Form>
    </div>
  );
};

export default PartnerSteps;
