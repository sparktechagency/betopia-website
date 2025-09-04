"use client"
import React from 'react';
import { Form, Input } from "antd"
import FormInput from '@/components/shared/FormInput';
import FormSelect from '@/components/shared/FormSelect';
import { MoveRight } from 'lucide-react';

const ApplicationForm: React.FC = () => {
    return (
        <div className='w-[1070px] mx-auto mt-[43px] mb-[90px]'>
            <Form
                layout='vertical'
            >

                <div className='bg-[#F6934817]/91 rounded-[30px] py-[40px]'>
                    <p className='text-[#000000] text-xl leading-[24px] text-center'>Upload Your Resume for Analysis</p>
                    <div className='mt-[32px]'>
                        <Input name='doc' type="file" id='img' style={{ display: "none" }} />
                        <div className='relative w-fit mx-auto' >
                            <label
                                htmlFor="img"
                                className='flex-center bg-white w-[240px] h-[52px] rounded-[40px] border border-[#F69348] shadow-xl shadow-[#C063634D]/70'
                            >
                                Upload PDF/Doc
                            </label>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F6934817]/91 rounded-[30px] my-[43px] grid grid-cols-3 gap-10 p-[30px]'>
                    <FormInput
                        name="firstName"
                        label="First Name"
                    />
                    <FormInput
                        name="lastName"
                        label="Last Name"
                    />
                    <FormInput
                        name="middleName"
                        label="Middle Name"
                    />
                    <FormSelect
                        name="gender"
                        label="Gender"
                    />
                    <FormSelect
                        name="dateofbirth"
                        label="Date of Birth"
                    />
                    <FormSelect
                        name="location"
                        label="Site Location"
                    />
                </div>

                <div className='bg-[#F6934817]/91 rounded-[30px] my-[43px] p-[30px]'>
                    <p className='text-[22px] leading-[24px] text-[#000000]'>*Parent/Guardian</p>

                    <div className='grid grid-cols-3 gap-10 mt-[24px]'>
                        <FormSelect
                            name="location"
                            label="Site Location"
                        />
                        <FormInput
                            name="fatherfirstName"
                            label="Father First Name"
                        />
                        <FormInput
                            name="fatherLastName"
                            label="Father Last Name"
                        />
                        <FormInput
                            name="email"
                            label="Email"
                        />
                        <FormInput
                            name="phoneNumber"
                            label="Phone Number"
                        />
                        <FormSelect
                            name="qualification"
                            label="Education Qualification"
                        />

                        <Form.Item
                            name="address"
                            label="Residential Address of the Parent/Guardian"
                            rules={[
                                {
                                    required: true,
                                    message: `Please Enter `
                                }
                            ]}
                            style={{ marginBottom: 0 }}
                            className='col-span-3'
                        >
                            <Input.TextArea
                                style={{
                                    border: "none",
                                    height: 156,
                                }}
                            />
                        </Form.Item>
                    </div>
                </div>
                
                <button className='flex-center gap-2 bg-[#FF7162] w-[240px] h-[52px] rounded-[40px] border border-[#F69348] shadow-xl shadow-[#C063634D]/70'>
                    <span className='font-bold text-[18px] leading-[24px] text-white'>Apply Now</span>
                    <MoveRight color='white' />
                </button>

                <p className='pt-8 text-[#333333] text-[18px] leading-[32px]'>Note: Please make sure you put the information which is relevant to your actual informatoion.</p>
            </Form>

        </div>
    );
};

export default ApplicationForm;