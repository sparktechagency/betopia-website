"use client";
import { Form, Grid, Input, Select } from "antd";
import React from "react";
import countryData from "world-countries";

const { Option } = Select;

const BusinessDetailsComponent = ({
  countryCode,
  setCountryCode,
}: {
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
}) => {
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
    <div className="w-full flex lg:flex-row flex-col justify-between gap-x-5">
      <Form.Item
        name={"name"}
        label={
          <p className="text-[#404D61] text-[16px] font-medium ">
            Full Name of the Organization
          </p>
        }
        className="w-full"
        rules={[
          { required: true, message: "Please enter the full name of the organization" },
        ]}
      >
        <Input
          style={{ height: lg ? 48 : 40, borderRadius: "10px", width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name={"email"}
        label={
          <p className="text-[#404D61] text-[16px] font-medium ">
            Email Address of the organization
          </p>
        }
        className="w-full"
        rules={[
          { required: true, message: "Please enter an email address" },
          { type: "email", message: "Please enter a valid email address" },
        ]}
      >
        <Input style={{ height: lg ? 48 : 40, borderRadius: "10px" }} />
      </Form.Item>

      <Form.Item
        className="custom-input w-full"
        name={"whatsapp"}
        label={
          <p className="text-[#404D61] text-[16px] font-medium">
            Enter your What’s app
          </p>
        }
        rules={[
          { required: true, message: "Please enter your WhatsApp number" },
          {
            min: 6,
            message: "WhatsApp number must be at least 6 digits long",
          },
        ]}
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
                height: lg ? 48 : 40,
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
        >
          <Input
            addonBefore={
              <Select
                value={countryCode}
                onChange={(value) => setCountryCode(value)}
                className="min-w-[120px] min-h-10 cursor-pointer"
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
            className="min-h-10"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default BusinessDetailsComponent;
