'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';
import Image from 'next/image';

interface Country {
  name: string;
  image: string;
  code: string;
  short: string;
}

const countries: Country[] = [
  {
    name: "United Arab Emirates (Dubai)",
    image: "https://flagcdn.com/w40/ae.png",
    code: "+971",
    short: "AE"
  },
  {
    name: "United States",
    image: "https://flagcdn.com/w40/us.png",
    code: "+1",
    short: "US"
  },
  {
    name: "Bangladesh",
    image: "https://flagcdn.com/w40/bd.png",
    code: "+880",
    short: "BD"
  },
  {
    name: "Philippines",
    image: "https://flagcdn.com/w40/ph.png",
    code: "+63",
    short: "PH"
  }
];


const BusinessDetails = ({ register, errors }: any) => {

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const [businessType, setBusinessType] = useState("");
  const [interestedArea, setInterestedArea] = useState("");
  const [businessDomain, setBusinessDomain] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="mb-6">

  
      <div className="w-[306px] rounded-4xl flex items-center gap-2 p-2 mb-9 bg-linear-to-r from-[#E0E0E0] to-[#F6F6F6]">
        <div className="w-10 h-10 bg-[#F69348] rounded-full flex items-center justify-center text-white font-semibold">
          1
        </div>
        <h2 className="text-[28px] text-[#414042] pt-2">Business</h2>
      </div>

    {/* business details  */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="size-4 bg-[#F6934866] rounded-full"></div>
          <h3 className="text-[22px] font-semibold text-[#414042] pt-2">
            Business Details
          </h3>
        </div>

        <div className="md:flex gap-8">

      
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">Full Name of the Organization</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              {...register("fullName", { minLength: { value: 3, message: "Name must be at least 3 characters" } })}
              className={`w-full md:w-[248px] px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.fullName ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

       
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">Email Address of the organization</label>
            <input
              type="email"
              placeholder="Enter Company Email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full md:w-[248px] px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.email ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

         
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">Enter your WhatsApp Number</label>

            <div className="flex gap-2">

              
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-3 h-12 border border-[#E1E3E6] rounded-lg bg-white hover:border-gray-300"
                >
                  <Image src={selectedCountry.image} alt='' width={24} height={24} className="w-6 h-6 rounded" />
                  <span className="text-sm text-[#404D61]">{selectedCountry.code}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-10">
                    {countries.map((country) => (
                      <button
                        key={country.short}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 text-left"
                      >
                        <Image src={country.image} alt='' width={24} height={24} className="w-6 h-6 rounded" />
                        <div className="flex-1 flex justify-between">
                          <span className="text-sm text-[#2D3748]">{country.name}</span>
                          <span className="text-sm text-gray-500">{country.code}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="tel"
                placeholder="+1 (555) 000-000"
                {...register('phoneNumber', {
                  pattern: { value: /^[0-9+\-() ]+$/, message: 'Invalid phone number' }
                })}
                className={`flex-1 px-4 py-3 border rounded-lg bg-white focus:outline-none ${
                  errors.phoneNumber ? "border-red-400" : "border-[#E1E3E6]"
                }`}
              />
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
          </div>
        </div>
      </div>


    {/* business info  */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="size-4 bg-[#F6934866] rounded-full"></div>
          <h3 className="text-[22px] font-semibold text-[#414042] pt-2">Business Information</h3>
        </div>

        <div className="md:flex gap-8">

          {/* Business Type */}
          <CustomDropdown
            label="Business Type"
            items={["Retail", "Wholesale", "Service"]}
            selected={businessType}
            setSelected={setBusinessType}
            registerName="businessType"
            register={register}
            errors={errors}
          />

          {/* Interested Area */}
          <CustomDropdown
            label="Interested Area"
            items={["Technology", "Finance", "Healthcare"]}
            selected={interestedArea}
            setSelected={setInterestedArea}
            registerName="interestedArea"
            register={register}
            errors={errors}
          />

          {/* Business Domain */}
          <CustomDropdown
            label="Your Business Domain/Website"
            items={["E-commerce", "SaaS", "Marketplace"]}
            selected={businessDomain}
            setSelected={setBusinessDomain}
            registerName="businessDomain"
            register={register}
            errors={errors}
            width="md:w-[369px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
