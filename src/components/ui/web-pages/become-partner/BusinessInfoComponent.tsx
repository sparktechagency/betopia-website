import { Form, Grid, Select } from "antd";
import React from "react";
const { Option } = Select;

const businessTypes = ["Startup", "Enterprise", "Agency"];
const interestedAreas = ["Technology", "Finance", "Healthcare"];
const businessDomains = ["www.example1.com", "www.example2.com"];

const BusinessInfoComponent = () => {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="w-full">
        <Form.Item
          name={"buisness_type"}
          label={
            <p className=" text-lg text-[#404D61] font-medium">
              Business Type
            </p>
          }
        >
          <Select
            placeholder="Select business type"
            style={{ height: lg ? 56 : 40, borderRadius: "10px" }}
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
            <p className=" text-lg text-[#404D61] font-medium">
              {" "}
              Interested Area{" "}
            </p>
          }
        >
          <Select
            placeholder="Select Interested Area"
            style={{ height: lg ? 56 : 40, borderRadius: "10px" }}
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
            <p className=" text-lg text-[#404D61] font-medium">
              {" "}
              Your Business Domain/Websites{" "}
            </p>
          }
        >
          <Select
            placeholder="Select Your Business Domain/Websites"
            style={{ height: lg ? 56 : 40, borderRadius: "10px" }}
          >
            {businessDomains.map((type) => (
              <Option key={type.toLowerCase()} value={type.toLowerCase()}>
                {type}
              </Option>
            ))}
          </Select>
        </Form.Item>
    </div>
  );
};

export default BusinessInfoComponent;
