import Image from 'next/image';
import React from 'react';

interface partnershipFrameworkType {
    icon: string;
    title: string;
    list: string[];
    bgColor: string;
}

const PartnershipFramework = ({ partnershipFramework }: { partnershipFramework: partnershipFrameworkType[] }) => {
    return (
        <section className=" px-4 container mx-auto text-center lg:pb-20 pb-10">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                Partnership <span className="text-primary">Framework</span>
            </h2>


            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-5">
                {partnershipFramework?.map((feature, index) => (
                    <div
                        key={index}
                        className={`${feature.bgColor} rounded-2xl p-4 lg:p-8 text-left shadow-sm hover:shadow-md transition-all duration-300`}
                    > 
                    <div className=' flex lg:flex-row flex-col gap-2 items-center mb-6'> 
                        <Image
                            width={56}
                            height={56}
                            src={feature.icon}
                            alt="arrow"
                            className="rounded-[12px]"
                        />
                        <p className="text-2xl font-semibold  text-primary">{feature.title}</p>
                    </div>
                        {feature?.list && (
                            <ul className="list-disc pl-5 grid grid-cols-1 gap-2 text-[#757575]">
                                {feature.list?.map((item: string, index: number) => (
                                    <li className="text-[#757575] text-[18px]" key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnershipFramework;