"use client"
import { ERP, HRM, POS } from '@/datas/pages/products';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import ProductsTitle from './ProductsTitle';
import ProductSteps from './ProductSteps';
import ProductStepDetails from './ProductStepDetails';
import ProductFacilities from './ProductFacilities';

const Data: Record<string, typeof HRM> = {
    "HRM": HRM,
    "POS": POS,
    "ERP": ERP,
};

const ProductsDetails = () => {
    const params = useSearchParams();
    const product = params.get('product')
    const productData = Data[product ?? "HRM"];
    return (
        <div className=' container'>
            <ProductsTitle productData={productData} />

            <div className=' flex gap-[56px] w-full mb-20'>
                <div className=' w-1/4 '>
                    <ProductSteps product={product} />
                </div>
                    <span className='w-0.5 h-[260px] bg-primary mt-7'> </span>
                <div className=' w-3/4 ps-10'>
                    <ProductStepDetails productData={productData} />
                </div>
            </div> 

            <ProductFacilities productData={productData} />

        </div>
    );
};

export default ProductsDetails;