import { MoveRight } from 'lucide-react';
import React from 'react';


const data = [
    {
        name : "Cloud Services",
        content : "Betopia Limited's Cloud Modernization & Managed Services empower businesses with tailored cloud solutions, optimizing performance, security",
        image :  "/images/cloud.png"
    },
    {
        name : "Cybersecurity Services",
        content : "Betopia Limited's Cybersecurity & Compliance Solutions ensure robust digital protection and regulatory adherence for businesses.",
        image :  "/images/cyber.png"
    },
    {
        name : "AI services",
        content : "Betopia Limited's Data, AI & Analytics Engineering services empower businesses by transforming raw data into actionable insights",
        image :  "/images/ai.png"
    }
]

const Services: React.FC = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-[36px] leading-[40px]'>Highly effective <span className='text-primary'>solutions</span></h1>
            <p className='text-center w-[418px] mx-auto text-[16px] leading-[24px]'>Betopia Limited offers innovative cloud modernization and managed services to enhance business efficiency.</p>

            <div className='grid grid-cols-3 gap-5 mt-10'>
                {
                    data?.map((item, index) =>{
                        return (
                            <div
                                key={index}
                                className="w-[360px] h-[504px] border rounded-xl overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="w-full h-full bg-black/60 flex flex-col justify-end p-4 text-white">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <p className="text-sm">{item.content}</p>
                                    <p className="flex items-center gap-1 mt-2 cursor-pointer">
                                        Learn More <MoveRight />
                                    </p>
                                </div>
                            </div>

                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Services