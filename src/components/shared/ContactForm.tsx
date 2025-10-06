import { Form } from 'antd';
import React from 'react';
import ContactFormInput from './ContactFormInput';
import TextArea from 'antd/es/input/TextArea';
import OutlineButton from './OutlineButton';

const ContactForm = () => {
    return (
        <div>
            <Form layout='vertical' className=' flex flex-col gap-3'>
                <ContactFormInput name="name" label="Full Name" />
                <ContactFormInput name="email" label="Email" />
                <ContactFormInput name="phone" label="Phone Number" />
                <ContactFormInput name="company" label="Company Name" />
                <Form.Item>
                    <TextArea rows={6} placeholder=" Write Message" style={{
                        width: "100%",
                        boxShadow: "none",
                        outline: "none",
                        borderRadius: 12,
                        border: "1px solid #47474731",
                        padding: "10px 0 0 20px",
                        fontFamily: 'Poppins, sans-serif'
                    }}
                        className={`
                    placeholder:text-[#6D6C74] 
                    placeholder:text-[14.4px] 
                    placeholder:leading-6 font-normal 
                `}
                    />
                </Form.Item>

                <Form.Item className='w-[200px]'>
                    <OutlineButton className='w-full !text-lg font-semibold !text-[#656565] ' type="submit">Send Message</OutlineButton>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;