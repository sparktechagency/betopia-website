"use client"
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IFormInputProps {
    name: string;
    label: string;
    style?: string;
}

const FormInput: React.FC<IFormInputProps> = ({ name, label, style }) => {

    const form = Form.useFormInstance();

    useEffect(() => {
        form.setFieldsValue({ name: '' });
    }, [form]);

    return (
        <Form.Item
            name={name}
            label={<p>{label}</p>}
            rules={[
                {
                    required: true,
                    message: `Please Enter ${label}`
                }
            ]}
            style={{marginBottom: 0}}
            className={`${style}`}
        >
            <Input
                placeholder={`Enter Your ${label}`}
                style={{
                    width: "100%",
                    height: 52,
                    boxShadow: "none",
                    outline: "none",
                    borderRadius: 50,
                    border: "none",
                    padding: "0 0 0 20px",
                    fontFamily: 'Poppins, sans-serif'
                }}
                className={`
                    placeholder:text-[#A2A3B1] 
                    placeholder:text-[14.4px] 
                    placeholder:leading-6 font-normal
                `}
            />
        </Form.Item>
    )
}

export default FormInput