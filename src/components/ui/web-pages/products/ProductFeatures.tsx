import Image from 'next/image';
import React from 'react';

interface IFeatureProps {
    title: React.ReactNode;
    description?: string;
    list?: string[];
    icon: string;
}

interface IProductFeaturesProps {
    features: IFeatureProps[]
}


const ProductFeatures: React.FC<IProductFeaturesProps> = ({ features }) => {
    return (
        <div className='bg-[#F693480D]/95 py-[100px]'>
            <div className='container'>
                <h1 className='text-[#414042] text-[45px] leading-[40px] text-center'>Our Comprehensive <span className='text-[#FF9233]'>features</span></h1>
                <p className='text-[#757575] text-[18px] leading-[24px] text-center'>All-in-One HR Solution Built for Modern Team</p>

                <div className='grid grid-cols-4 gap-5 mt-10'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='border bg-white border-[#4747474F]/69 rounded-[12px] py-10 px-4'>
                                <div className='mb-[29px] flex items-center gap-2'>
                                    <Image width={36} height={36} src={feature.icon} alt="arrow" className='rounded-[12px]' />
                                    <p className='text-[#FF7700] font-medium'>{feature.title}</p>
                                </div>

                                {
                                    feature.list &&
                                    <ul className='list-disc pl-5 grid grid-cols-1 gap-2 text-[#757575]'>
                                        {
                                            feature.list?.map((item: string, index: number) => (
                                                <li className='text-[#757575] text-[18px]' key={index}>{item}</li>
                                            ))
                                        }
                                    </ul >
                                }

                                {
                                    feature.description &&
                                    <p className='text-[#757575] text-[18px]'>{feature.description}</p>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;