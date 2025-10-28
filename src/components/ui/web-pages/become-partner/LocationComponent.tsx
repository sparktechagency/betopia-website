import { Form, Grid, Input } from "antd";
import React from "react";

const LocationComponent = () => {
  const { lg } = Grid.useBreakpoint();

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 !pb-0 ">
      <Form.Item
        name={"country"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            Address
          </p>
        }
        className="partner-input"
        rules={[{ required: true, message: "Please enter your country" }]}
      >
        <Input
          placeholder="Enter Your Country"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"state"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            State
          </p>
        }
        className="partner-input"
        rules={[{ required: true, message: "Please enter your state" }]}
      >
        <Input
          placeholder="Enter Your State"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"city"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            City
          </p>
        }
        className="partner-input"
        rules={[{ required: true, message: "Please enter your city" }]}
      >
        <Input
          placeholder="Enter Your City"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"zip_code"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            ZIP Code
          </p>
        }
        className="partner-input"
        rules={[
          { required: true, message: "Please enter your ZIP code" },
          {
            pattern: /^[0-9]{3,10}$/,
            message: "Please enter a valid ZIP code",
          },
        ]}
      >
        <Input
          placeholder="Enter Your ZIP Code"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"area"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            Area <span className="text-[16px] font-normal">(optional)</span>
          </p>
        }
        className="partner-input"
      >
        <Input
          placeholder="Enter Your Area"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"building"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            Community/Building
          </p>
        }
        className="partner-input"
        rules={[
          { required: true, message: "Please enter your community/building" },
        ]}
      >
        <Input
          placeholder="Enter Your Community/Building"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"street"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            Street
          </p>
        }
        className="partner-input"
        rules={[{ required: true, message: "Please enter your street" }]}
      >
        <Input
          placeholder="Enter Your Street"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>

      <Form.Item
        name={"block_no"}
        label={
          <p className="text-[16px] text-[#404D61] font-medium">
            Block No.
          </p>
        }
        className="partner-input"
        rules={[{ required: true, message: "Please enter your block number" }]}
      >
        <Input
          placeholder="Enter block name"
          style={{ height: lg ? 48 : 40, borderRadius: "10px" }}
        />
      </Form.Item>
    </div>
  );
};

export default LocationComponent;
