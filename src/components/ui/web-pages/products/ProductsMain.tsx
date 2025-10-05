/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import { ERP, HRM, POS } from '@/datas/pages/newProducts';
import { useSearchParams } from 'next/navigation';
import ProductDetailsBanner from './ProductDetailsBanner';
import ProductInfo from './ProductInfo';
import ProductFeatures from './ProductFeatures';
import TrustedBy from '../home/TrustedBy';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import Image from 'next/image';

const Data: Record<string, typeof HRM | typeof POS | typeof ERP> = {
    "HRM": HRM,
    "POS": POS,
    "ERP": ERP,
};


const ProductsMain = () => {
    const params = useSearchParams();
    const product = params.get('product')
    const productData = Data[product ?? "HRM"];

    return (
        <div>
            <ProductDetailsBanner banner={productData.header} />
            <ProductInfo info={productData.info} />
            <ProductFeatures features={productData.features} />
            <WhyChooseUs 
                description={productData.whyChooseUs.description}
                imgUrl={(productData.whyChooseUs as any)?.imgUrl}
                features={productData.whyChooseUs.features} 
            />
            <TrustedBy /> 
            <FAQ/>

            <div className='container bg-[#F79549] rounded-[25px] p-10 flex items-center justify-between mb-[80px]'>
                
                <div>
                    <p className='text-white font-semibold text-[50px]'>Looking For a complete</p>
                    <div className='flex items-center gap4 relative'>
                        <p className='text-white font-semibold text-[50px]'>ERP  Solution?</p>
                          <Image className='ml-4 -mt-2' width={100} height={100} src={"/productDetails/shape.png"} alt="arrow" />
                    </div>
                </div>
                <button className='py-3 bg-[#040404] w-[265px] rounded-[11px]' style={{color: "white"}}>Book Now</button>
            </div>
        </div>
    );
};

export default ProductsMain;