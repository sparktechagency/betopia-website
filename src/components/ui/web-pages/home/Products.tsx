import React from 'react'
import RotatingOrbit from './RotatingOrbit'

const Products: React.FC = () => {
    return (
        <div className='my-20 container  border-2 border-[#EAEAEA] rounded-[39px] px-[75px] py-[60px] '>
            <h1 className='text-center text-[40px] leading-[52px]'>Betopia Products</h1>
            <div className='flex items-center justify-between'>
                <p className='text-[25px] w-[60%] leading-[43px] pt-7'> <span className='text-primary'>Betopia</span>  builds tools that grow with your business ERP connects finance, operations, and resources seamlessly.HRM makes people management simple, human, and productivity driven.Our POS turns sales into smart experiences, and together, these solutions accelerate growth with confidence.</p>
                <div className='w-[40%] flex-center'>
                    <RotatingOrbit />
                </div>
            </div>
        </div>
    )
}

export default Products
