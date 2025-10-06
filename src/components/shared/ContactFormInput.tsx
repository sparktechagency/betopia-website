"use client"
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IContactFormInputProps {
    name: string;
    label: string;
    style?: string;
}

const ContactFormInput: React.FC<IContactFormInputProps> = ({ name, label, style }) => {

    const form = Form.useFormInstance();

    useEffect(() => {
        form.setFieldsValue({ name: '' });
    }, [form]);

    return (
        <Form.Item
            name={name}
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
                    borderRadius: 12,
                    border: "1px solid #47474731",
                    padding: "0 0 0 20px",
                    fontFamily: 'Poppins, sans-serif'
                }}
                className={`
                    placeholder:text-[#6D6C74] 
                    placeholder:text-[14.4px] 
                    placeholder:leading-6 font-normal
                `}
            />
        </Form.Item>
    )
}

export default ContactFormInput