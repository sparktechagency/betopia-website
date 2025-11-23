/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import BusinessDetailsComponent from "./BusinessDetailsComponent";
import BusinessInfoComponent from "./BusinessInfoComponent";
import LocationComponent from "./LocationComponent";
import SubmitDocumentComponent from "./SubmitDocument";
import { Form } from "antd";
import { myFetch } from "@/helpers/myFetch";
import { useRouter } from "next/navigation"; 
import toast from "react-hot-toast";

const Title = ({ num, label }: { num: number; label: string }) => (
  <div className=" flex items-center gap-3 mb-4 lg:mb-6 bg-gradient-to-l from-[#eeded1] to-[#e9d1c0]  px-4 py-2 rounded-full w-fit ">
    <p className="lg:w-9 lg:h-9  w-8 h-8  rounded-full flex items-center justify-center font-medium text-sm md:text-base bg-primary text-white "> {num} </p>
    <p className=" lg:text-lg text-[16px] font-medium text-gray-700"> {label}</p>
  </div>
);

const PartnerSteps = () => {
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState("+880");
  const router = useRouter();

  const handleFinish = async (values: any) => {
    const whatsappNumber = values.whatsapp
      ? `${countryCode}${values.whatsapp}`
      : "";

    const formValues = {
      ...values,
      whatsapp_number: whatsappNumber, 
      role: "PARTNER",
    };

    delete formValues.whatsapp;

    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      if (key === "document" && formValues.document) {
        formData.append("doc", formValues.document);
      } else {
        formData.append(key, formValues[key]);
      }
    });

    try {
      const res = await myFetch("/user", {
        method: "POST",
        body: formData,
      }); 
      console.log("submit res" , res);
      if (res?.success) {
        toast.success(res?.message || "Submitted successfully", { id: "login" });
        router.push("/partner")
      } else {
        if (res?.error && Array.isArray(res.error)) {
          res.error.forEach((err: { message: string }) => {
            toast.error(err.message, { id: "login" });
          });
        } else {
          toast.error(res?.message || "Something went wrong!", { id: "login" });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleFinish} className="  w-full  ">

        <div className="mb-8">
          <Title num={1} label="Business Details" />
          <BusinessDetailsComponent setCountryCode={setCountryCode} countryCode={countryCode} />
        </div>

        <div className="mb-8">
          <Title num={2} label="Business Information" />
          <BusinessInfoComponent />
        </div>

        <div className="mb-8">
          <Title num={3} label="Location Info" />
          <LocationComponent />
        </div>

        <div className=" mb-8">
          <Title num={4} label="Submit Document" />
          <Form.Item
            name="document"
            valuePropName="value"
            getValueFromEvent={(file) => file}
            rules={[{ required: true, message: "Please upload your document" }]}
          >
            <SubmitDocumentComponent />
          </Form.Item>
        </div>

        <Form.Item className=" w-full flex-center ">
          <button
            className="flex-1 py-3  bg-primary  text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none  w-[300px] "
            type="submit"
          >
            <span>Submit </span>

          </button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default PartnerSteps;
