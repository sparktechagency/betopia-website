"use client";
import React from "react";
import { useForm} from "react-hook-form";
import Location from "./Location";
import Submit from "./Submit";
import BusinessDetails from "./BusinessDetails";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessType: string;
  interestedArea: string;
  businessDomain: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  area: string;
  building: string;
  street: string;
  blockNo: string;
  documentConfirmed: boolean;
  document: FileList | null;
}

const PartnerRegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      businessType: "",
      interestedArea: "",
      businessDomain: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      area: "",
      building: "",
      street: "",
      blockNo: "",
      documentConfirmed: false,
      document: null,
    },
  });

  return (
    <div className="">
      <div className="">
        <div>
          {/* Step 1: Business */}

         <BusinessDetails errors={errors} register={register}/>

          {/* Step 2: Location */}

          <Location errors={errors} register={register} />

          {/* Step 3: Submit Document */}
          <Submit
            errors={errors}
            watch={watch}
            control={control}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerRegisterForm;
