import { ConfigProvider, Input, Select } from 'antd';
import { Clock, DollarSign, MapPinned, Search, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const datas = [
    {
        title: "Senior Frontend Developer",
        department: "Engineering",
        posted: "1 hour ago",
        boudget : "$200- $300",
        description : "Join the Betopia Limited frontend team to build amazing user experiences using React, TypeScript, and modern web technologies.",
        requirements : [
            "5+ years of React experience",
            "Strong TypeScript skills",
            "Experience with modern CSS frameworks",
        ]
    },
    {
        title: "Sales Manager",
        department: "Telesales",
        posted: "1 day ago",
        boudget : "$100k - $140k",
        description : "Join Betopia Limited to drive sales growth for our POS and ERP solutions, leading a high-performing sales team.",
        requirements : [
            "5+ years of sales experience",
            "Proven leadership skills",
            "Experience with CRM software",
        ]
    },
    {
        title: "Product Manager",
        department: "Software",
        posted: "4 days ago",
        boudget : "$300k - $400k",
        description : "Join Betopia Limited to lead the roadmap for our HRM and ERP enhancements, shaping the future of our products.",
        requirements : [
            "4+ years of product management experience",
            "Strong analytical skills",
            "Experience with agile methodologies",
        ]
    },
]


const Opennings: React.FC = () => {
    return (
        <div className='container mt-[52px]'>
            <h1 className='text-[50px] text-center leading-[120%]'>Current <span className='text-primary'>Openings</span> at Betopia</h1>
            <p className='text-center text-[22px] leading-[140%] text-[#797979]'>Discover a Range of Exciting Roles Across Our HRM, POS, and ERP Divisions— <br /> Apply Now to Start Making an Impact.</p>

            <div className='border border-[#4747474F]/31 rounded-[9px]  mt-[52px] px-[37px] py-[27px] flex items-center justify-between gap-[15px] flex-wrap'>
                <Input
                    prefix={<Search />}
                    placeholder="Search Jobs"
                    style={{ backgroundColor: "#F3F3F5", border: "none", width: "274px" }}
                    className=' h-[37px] rounded-[10px]'
                />
                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                colorBgContainer: "#F3F3F5",
                                colorBorder: "transparent",
                            }
                        }
                    }}
                >
                    <Select
                        defaultValue="All Departments"
                        style={{ height: "37px", width: "206px", backgroundColor: "#F3F3F5", border: "none" }}
                        className=' rounded-[10px] '>
                    </Select>
                </ConfigProvider>

                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                colorBgContainer: "#F3F3F5",
                                colorBorder: "transparent",
                            }
                        }
                    }}
                >
                    <Select
                        defaultValue="All Locations"
                        style={{ height: "37px", width: "175px", backgroundColor: "#F3F3F5", border: "none" }}
                        className=' rounded-[10px] '>
                    </Select>
                </ConfigProvider>


                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                colorBgContainer: "#F3F3F5",
                                colorBorder: "transparent",
                            }
                        }
                    }}
                >
                    <Select
                        defaultValue="All Types"
                        style={{ height: "37px", width: "175px", backgroundColor: "#F3F3F5", border: "none" }}
                        className=' rounded-[10px] '>
                    </Select>
                </ConfigProvider>

                <div className='w-[163px] px-[15px] flex items-center justify-between h-[37px] border border-[#C6C6C6] rounded-[6px]'>
                    <button className=' text-white rounded-[10px]'><span className='text-[#6B6B6B]'>Clear</span></button>
                    <X />
                </div>
            </div>

            <div>
                {datas.map((data, index) => (
                    <div key={index} className='border border-[#4747474F]/31 rounded-[9px]  mt-[30px] px-[37px] py-[27px]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[22px] font-semibold leading-[120%]'>{data.title}</h2>
                            <p className='text-[15px] rounded-[6px] px-[15px] text-[#3D3D3D] bg-[#E9E9E9] leading-[140%] mt-[5px]'>{data.department}</p>
                        </div>

                        <div className='flex items-center justify-baseline gap-2'>
                            <p className='flex items-center gap-1'> <MapPinned size={16} className='text-[#4747474F]' /> On-Site</p>
                            <p className='flex items-center gap-1'> <Clock size={16} className='text-[#4747474F]' /> Full - Time</p>
                            <p className='flex items-center gap-1'><DollarSign size={16} className='text-[#4747474F]' /> {data.boudget}</p>
                        </div>

                        <p className='text-[16px] text-[#797979] leading-[140%] mt-[15px]'>{data.description}</p>


                         <h2 className='text-[22px] font-semibold leading-[120%]'>Key Requirements:</h2>
                        <ul className='list-disc list-inside mt-[10px]'>
                            {data.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className='text-[16px] text-[#797979] leading-[140%]'>{req}</li>
                            ))}
                        </ul>

                        <div className='flex items-center justify-between'>
                            <p className='text-[#787878] text-[11px]'>{data.posted}</p>
                            <Link href="/contact">
                                <button className='bg-primary cursor-pointer rounded-[6px] mt-[15px] w-[123px] h-[37px]'> <span className='text-white'>Apply Now</span> </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='py-[100px] flex items-center justify-center'>
                <button className='bg-[#F6934842]/78 cursor-pointer  w-[123px] h-[37px] rounded-[6px]'> <span className='text-[#5B5959] text-[18px]'>Explore More</span> </button>
            </div>
        </div>
    );
};

export default Opennings;