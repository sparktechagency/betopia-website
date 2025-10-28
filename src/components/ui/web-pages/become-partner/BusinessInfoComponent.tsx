import { Form, Grid, Input, Select } from "antd";
import React from "react";
const { Option } = Select;

const businessTypes = ["Startup", "Enterprise", "Agency"];
const interestedAreas = ["Technology", "Finance", "Healthcare"];

const BusinessInfoComponent = () => {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between gap-x-5">
      <Form.Item
        name={"buisness_type"}
        label={
          <p className="text-lg text-[#404D61] font-medium">
            Business Type
          </p>
        }
        className="w-full"
        rules={[
          { required: true, message: "Please select a business type" },
        ]}
      >
        <Select
          placeholder="Select business type"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        >
          {businessTypes.map((type) => (
            <Option key={type.toLowerCase()} value={type.toLowerCase()}>
              {type}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={"intersted_area"}
        label={
          <p className="text-lg text-[#404D61] font-medium">
            Interested Area
          </p>
        }
        className="w-full"
        rules={[
          { required: true, message: "Please select an interested area" },
        ]}
      >
        <Select
          placeholder="Select Interested Area"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        >
          {interestedAreas.map((type) => (
            <Option key={type.toLowerCase()} value={type.toLowerCase()}>
              {type}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={"buisness_website"}
        label={
          <p className="text-lg text-[#404D61] font-medium">
            Your Business Domain/Websites
          </p>
        }
        className="w-full"
        rules={[
          { required: true, message: "Please enter your business website" },
          {
            type: "url",
            message: "Please enter a valid website URL (e.g., https://example.com)",
          },
        ]}
      >
        <Input
          placeholder="Select Your Business Domain/Websites"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>
    </div>
  );
};

export default BusinessInfoComponent;
