import Link from 'next/link';
import React from 'react';


interface ProductStepsProps {
    product: string | null;
}

const ProductSteps: React.FC<ProductStepsProps> = ({ product }) => {

    const steps = [
        { name: "HRM", label: "Human Resource Management (HRM)" },
        { name: "POS", label: "Point of Sale Machine (POS)" },
        { name: "ERP", label: "Betopia ERP" },
    ];

    return (
        <div>
            <div className="flex flex-row gap-x-[62px]">

                <div className=' flex flex-col items-center justify-center gap-y-[52px] p-2 py-4 w-20 bg-gradient-to-b from-[#F6F6F6] to-[#E0E0E0] rounded-full'>
                    {steps.map((step, index) => (
                        <Link
                            key={step.name}
                            href={`/products?product=${step.name}`}
                            className={`group flex items-center  rounded-full transition-all duration-300 
                            `}
                        >
                            <div
                                className={`w-[52px] h-[52px] rounded-full flex-center  transition-all duration-300 ease-in-out
                                ${product === step.name ? 'bg-primary text-white  scale-110 shadow-md  ' : 'bg-white text-black'}`}
                            >
                                {index + 1}
                            </div>
                        </Link>
                    ))}
                    
                </div>


                <div className=' flex flex-col items-start justify-center gap-y-[52px] p-2 py-3 border border-red-500'>
                    {steps.map((step, index) => (
                        <Link
                            key={index}
                            href={`/products?product=${step.name}`}
                            className={`group flex items-center  rounded-full transition-all duration-300 
                            `}
                        >
                            <div
                                className={` flex-center text-[22px] font-normal min-h-[52px] 
                                ${product === step.name ? ' text-[#4A4A4A] ' : ' text-[#959595]'}`}
                            >
                                {step?.label}
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default ProductSteps;