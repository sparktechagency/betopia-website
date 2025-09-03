import Image from "next/image";
import React from "react";


const datas = [
    {
        name: "Collaboration",
        description: "At Betopia Limited, we believe the best innovations come from diverse perspectives working together toward a common goal to enhance our HRM, POS, and ERP solutions.",
        img: "/vision/step1.png"
    },
    {
        name: "Step #2",
        description: "We strive for excellence in everything we do at Betopia Limited, continuously learning and improving our craft to deliver top-tier business technology.",
        img: "/vision/step2.png"
    },
    {
        name: "Step #3",
        description: "We focus on creating meaningful impact for our users, our team at Betopia Limited, and the broader community through our transformative products.",
        img: "/vision/step3.png"
    }
]


const BetopiaVision: React.FC = () => {
    return (
        <div className='container mt-[52px]'>
            <h1 className='text-[50px] text-center leading-[120%]'>Grow with <span className='text-primary'>Betopia’s Vision</span></h1>
            <p className='text-center text-[22px] leading-[140%] text-[#797979]'>Principles guide everything we do and help us build a culture where everyone can <br /> thrive and excel professionally.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[52px]">
                {
                    datas.map((data, index) => (
                        <div key={index} className="bg-[#FEF4ED] h-[322.4px] rounded-[12px]">
                            <div className="flex items-center justify-center h-full w-full px-[32px]">
                                <div>
                                    <div className="h-[48px] overflow-hidden mx-auto flex-center w-[48px] mb-[15px] bg-white rounded-[8px] shadow-2xl">
                                        <Image style={{borderRadius: "8px"}} src={data.img} alt="Dubai" width={60} height={60} />
                                    </div>

                                    <h2 className="text-[30px] font-semibold mb-[15px] text-center">{data.name}</h2>
                                    <p className="text-[18px] text-center text-[#797979] leading-[160%]">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BetopiaVision;