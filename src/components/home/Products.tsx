import Image from 'next/image'
import React from 'react'

const Products:React.FC = () => {
    return (
        <div className='border border-[#EAEAEA] rounded-[39px] p-10'>
            <h1 className='text-center text-[40px] leading-[52px]'>Betopia Products</h1>
            <div className='grid grid-cols-2 gap-10'>
                <p className='text-[25px] leading-[43px] pt-7'> <span className='text-primary'>Betopia</span>  builds tools that grow with your business ERP connects finance, operations, and resources seamlessly.HRM makes people management simple, human, and productivity driven.Our POS turns sales into smart experiences, and together, these solutions accelerate growth with confidence.</p>
                <div className='flex items-center justify-center'>
                     <Image src="/images/products.png" alt="Footer Background" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Products