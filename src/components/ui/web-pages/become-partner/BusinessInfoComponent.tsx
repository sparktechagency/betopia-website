import { Form, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const businessTypes = ["Startup", "Enterprise", "Agency"];
const interestedAreas = ["Technology", "Finance", "Healthcare"];
const businessDomains = ["www.example1.com", "www.example2.com"];

const BusinessInfoComponent = () => {
    return ( 
        <div className='w-full'> 
        <Form className='' layout='vertical'>
            <Form.Item label={<p className=' text-lg text-[#404D61] font-medium'> Business Type </p>} >
                <Select
                    placeholder="Select business type"
                    style={{ height: 40, borderRadius: "10px" }}
                >
                    {businessTypes.map((type) => (
                        <Option key={type.toLowerCase()} value={type.toLowerCase()}>
                            {type}
                        </Option>
                    ))}
                </Select>
            </Form.Item> 

            <Form.Item label={<p className=' text-lg text-[#404D61] font-medium'> Interested Area </p>} >
                <Select
                    placeholder="Select Interested Area"
                    style={{ height: 40, borderRadius: "10px" }}
                >
                    {interestedAreas.map((type) => (
                        <Option key={type.toLowerCase()} value={type.toLowerCase()}>
                            {type}
                        </Option>
                    ))}
                </Select>
            </Form.Item> 

            <Form.Item label={<p className=' text-lg text-[#404D61] font-medium'> Your Business Domain/Websites </p>} >
                <Select
                    placeholder="Select Your Business Domain/Websites"
                    style={{ height: 40, borderRadius: "10px" }}
                >
                    {businessDomains.map((type) => (
                        <Option key={type.toLowerCase()} value={type.toLowerCase()}>
                            {type}
                        </Option>
                    ))}
                </Select>
            </Form.Item> 



        </Form> 
        </div>
    );
};

export default BusinessInfoComponent;