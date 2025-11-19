'use client'

import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown';

const Location = ({ register, errors }: any) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <div className="w-[306px] rounded-4xl flex items-center gap-2 p-2 mb-9 bg-linear-to-r from-[#E0E0E0] to-[#F6F6F6]">
        <div className="w-10 h-10 bg-[#F69348] rounded-full flex items-center justify-center text-white font-semibold">
          2
        </div>
        <h2 className="text-[28px] text-[#414042] pt-2">Location</h2>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="size-4 bg-[#F6934866] rounded-full"></div>
          <h3 className="text-[22px] font-semibold text-[#414042] pt-2">
            Address Details
          </h3>
        </div>

        <p className="text-sm md:text-base text-[#737373] pb-4">
          Enter address details for better management.
        </p>

   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

          {/* country */}
          <CustomDropdown
            label="Country"
            items={["UAE", "USA", "UK"]}
            selected={country}
            setSelected={setCountry}
            register={register}
            registerName="country"
            errors={errors}
          />

          {/* state */}
          <CustomDropdown
            label="State"
            items={country === "UAE" ? ["Dubai", "Abu Dhabi"] 
                 : country === "USA" ? ["California", "New York"]
                 : ["London", "Manchester"]}
            selected={state}
            setSelected={setState}
            register={register}
            registerName="state"
            errors={errors}
          />

          {/* city */}
          <CustomDropdown
            label="City"
            items={["Downtown", "Marina", "Business Bay"]}
            selected={city}
            setSelected={setCity}
            register={register}
            registerName="city"
            errors={errors}
          />

     
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">ZIP Code</label>
            <input
              type="text"
              placeholder="Enter zip code"
              {...register("zipCode", { required: "ZIP code is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.zipCode ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">
              Area <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Enter area"
              {...register("area")}
              className="w-full px-4 py-3 border border-[#E1E3E6] rounded-lg focus:outline-none bg-white"
            />
          </div>

        
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">
              Community/Building
            </label>
            <input
              type="text"
              placeholder="Enter Building name"
              {...register("building", { required: "Building is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.building ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.building && (
              <p className="text-red-500 text-xs mt-1">{errors.building.message}</p>
            )}
          </div>

         
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">Street</label>
            <input
              type="text"
              placeholder="Enter street/road name"
              {...register("street", { required: "Street is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.street ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.street && (
              <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>
            )}
          </div>

       
          <div>
            <label className="block text-sm md:text-lg text-[#404D61] mb-4">Block No.</label>
            <input
              type="text"
              placeholder="Enter block name"
              {...register("blockNo", { required: "Block number is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white ${
                errors.blockNo ? "border-red-400" : "border-[#E1E3E6]"
              }`}
            />
            {errors.blockNo && (
              <p className="text-red-500 text-xs mt-1">{errors.blockNo.message}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Location
