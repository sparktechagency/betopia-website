"use client"
import { ConfigProvider, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';

interface IFormSelectProps {
    name: string;
    label: string;
    style?: string;
}

const FormSelect: React.FC<IFormSelectProps> = ({ name, label, style }) => {
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
            className={`${style}`}
            style={{marginBottom: 0}}
        >
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            colorBgContainer: "white",
                            colorBorder: "transparent",
                            borderRadius: 50,
                            hoverBorderColor: "transparent",
                            activeBorderColor: "transparent",
                            activeOutlineColor: "transparent"
                        }
                    }
                }}
            >
                <Select
                    defaultValue={`Select`}
                    style={{ height: "52px", borderRadius: 50, padding: "0 0 0 8px", width: "100%", backgroundColor: "white", border: "none" }}
                    className=' rounded-[10px] '>
                </Select>
            </ConfigProvider>
        </Form.Item>
    );
};

export default FormSelect;