import Image from 'next/image';
import React from 'react';

const productPreviewsFirst = [
    "/productDetails/productPreview1.png",
    "/productDetails/productPreview2.png",
    "/productDetails/productPreview3.png",
    "/productDetails/productPreview4.png",
]

const productPreviewsSecond = [
    "/productDetails/productPreview5.png",
    "/productDetails/productPreview6.png",
]

const ProductPreview = () => {
    return (
        <div className=' bg-[#F693480F] py-20'>
            <div className=' container '>
                <h1 className="text-[#414042] section-title md:leading-10 text-center">
                    Product <span className="text-[#FF9233]">Preview</span>
                </h1>
                <p className="text-[#757575]  section-subtitle leading-6 text-center pb-10">
                    A unified workspace to onboard, train, and empower your partners for faster growth.
                </p>

                <div className=' flex flex-col gap-y-8'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            productPreviewsFirst.map((item, index) => (
                                <Image key={index} src={item} height={400} width={800} alt="" className=' w-full h-[400px]' />
                            ))
                        }
                    </div>

                    <div className=' grid grid-cols-12  gap-8'>
                        <div className='col-span-12 lg:col-span-5'>
                            <Image src={productPreviewsSecond?.[0]} height={400} width={800} alt="" className=' w-full h-[400px]' />
                        </div>

                        <div className='col-span-12 lg:col-span-7'>
                            <Image src={productPreviewsSecond?.[1]} height={400} width={800} alt="" className=' w-full h-[400px]' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductPreview;