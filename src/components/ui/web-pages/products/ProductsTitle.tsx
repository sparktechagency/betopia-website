import ComponentTitle from '@/components/shared/ComponentTitle';
import { productType } from '@/types';
import React from 'react';

const ProductsTitle = ({productData}:productType) => { 
    console.log(productData);
    return (
        <div> 
            <div className=' flex-center'> 
             <div className=' w-[48%] flex flex-col  mb-10'> 
                <ComponentTitle className=' pb-6 flex-center'>Built for Excellence – {productData?.title} </ComponentTitle> 
                <p className='text-[#757575] text-xl text-center'>{productData?.description}</p>
             </div>
            </div>
        </div>
    );
};

export default ProductsTitle;