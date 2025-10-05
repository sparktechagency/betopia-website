import { ProductArray } from '@/datas/pages/home'
import Image from 'next/image'
import React from 'react'

const Products: React.FC = () => {
    return (
        <div className='my-20 container py-[60px] '>
            <h1 className='text-center text-[#262626] text-[40px] leading-[52px]'>Betopia Products</h1>
            <h3 className='text-center text-[#262626] text-[25px] leading-[13px]'>Betopia builds tools that grow with your business.</h3>

            <div className='mt-[47px] grid grid-cols-3 gap-5 '>
                {
                    ProductArray.map((product, index) => (
                        <div key={index} className=' rounded-[16px] bg-[#F795491F]/88 p-2'>
                            <div className='w-full h-[200px] relative  mb-4'>
                                <Image src={product.imgUrl} alt="arrow" fill objectFit='cover' objectPosition='center' className='rounded-[12px]' />
                            </div>
                            <h2 className='text-[#414042] text-[24px] leading-[32px] font-medium mt-4'>{product.title}</h2>
                            <p className='text-[#9B9B9B] text-[18px] leading-[24px] mt-2 mb-4'>{product.description}</p>

                            <div className='mt-4'>
                                <button className='bg-[#F69348] w-[145px] block h-[44px] rounded-[8px]'> <span className='text-white'>View Product</span> </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
