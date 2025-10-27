"use client";
import { Form, Grid, Input, Select } from "antd";
import React from "react";
import countryData from "world-countries";

const { Option } = Select;

const BusinessDetailsComponent = ({countryCode , setCountryCode}:{countryCode:string , setCountryCode:(countryCode:string)=>void}) => {
  const { lg } = Grid.useBreakpoint();

  // Format country data for dropdown
  const options = countryData
    .filter((c) => c.idd.root)
    .map((c) => ({
      code: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
      flag: c.flag,
      name: c.name.common,
    }));

  return (
    <div className="w-full    ">
 
        <Form.Item 
        name={"name"}
          label={
            <p className="text-[#404D61] text-lg font-medium ">
              Full Name of the Organization
            </p>
          }
        >
          <Input style={{ height: lg ? 56 : 40, borderRadius: "10px" }} />
        </Form.Item>

        <Form.Item 
        name={"email"}
          label={
            <p className="text-[#404D61] text-lg font-medium ">
              Email Address of the organization
            </p>
          }
        >
          <Input style={{ height: lg ? 56 : 40, borderRadius: "10px" }} />
        </Form.Item>

        <Form.Item
          className="custom-input" 
          name={"whatsapp"}
          label={
            <p className="text-[#404D61] text-lg font-medium">
              {" "}
              Enter your What’s app{" "}
            </p>
          }
        >
          <Input 
          type="number"
            addonBefore={
              <Select
                value={countryCode}
                onChange={(value) => setCountryCode(value)}
                className="min-w-[120px] min-h-[40px] cursor-pointer"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px 0px 0px 10px",
                }}
                showSearch
              >
                {options.map((c) => (
                  <Option key={c.code} value={`${c.code}`}>
                    {c.flag} {c.code}
                  </Option>
                ))}
              </Select>
            }
            placeholder="(555) 000-0000"
            style={{ height: lg ? 56 : 40, borderRadius: "0px" }}
            className="min-h-[40px]"
          />
        </Form.Item>
   
    </div>
  );
};

export default BusinessDetailsComponent;
