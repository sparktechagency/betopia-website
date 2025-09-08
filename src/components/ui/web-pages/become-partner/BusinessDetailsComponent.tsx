"use client"
import { Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import countryData from "world-countries";

const { Option } = Select;

const BusinessDetailsComponent = () => {

    const [countryCode, setCountryCode] = useState("+880");

    // Format country data for dropdown
    const options = countryData
        .filter((c) => c.idd.root)
        .map((c) => ({
            code: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
            flag: c.flag,
            name: c.name.common,
        }));

    return (
        <div className='w-full    '>  

    
            <Form layout='vertical' className='w-full '>
                <Form.Item label={<p className='text-[#404D61] text-lg font-medium '>Full Name of the Organization</p>}>
                    <Input style={{ height: 40, borderRadius: "10px", }} />
                </Form.Item>


                <Form.Item label={<p className='text-[#404D61] text-lg font-medium '>Email Address of the organization</p>}>
                    <Input style={{ height: 40, borderRadius: "10px", }} />
                </Form.Item>

                <Form.Item className="custom-input" label={<p className='text-[#404D61] text-lg font-medium' > Enter your What’s app </p>}>
                    <Input
                        addonBefore={
                            <Select
                                value={countryCode}
                                onChange={(value) => setCountryCode(value)}
                                className="min-w-[120px] min-h-[40px] cursor-pointer"
                                style={{ backgroundColor: "white", borderRadius: "10px 0px 0px 10px" }}
                                showSearch
                            >
                                {options.map((c) => (
                                    <Option key={c.code} value={`${c.code}`}>
                                      {c.flag}  {c.code}
                                    </Option>
                                ))}
                            </Select>
                        }
                        placeholder="(555) 000-0000"
                        style={{ height: 40, borderRadius: "0px" , }}
                        className='min-h-[40px]'
                    />
                </Form.Item>


            </Form>
        </div>
    );
};

export default BusinessDetailsComponent;