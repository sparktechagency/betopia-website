import React from 'react'
import RotatingOrbit from './RotatingOrbit'
import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

const Products: React.FC = () => {
    return (
        <div className='my-20 container  border-2 border-[#EAEAEA] rounded-[39px] px-[75px] py-[60px] '>
            <h1 className='text-center text-[40px] leading-[52px]'>Betopia Products</h1>
            <div className='flex items-center justify-between'>
                <div className='w-[60%]'>
                    <p className='text-[25px] leading-[43px] pt-7 pb-6'> <span className='text-primary'>Betopia</span>   builds tools that grow with your business.</p>
                    <ul className='grid grid-cols-1 gap-2 list-disc pl-4'>
                        <li> <span className='font-bold'>ERP</span> – Connect finance, operations, and resources seamlessly</li>
                        <li> <span className='font-bold'>HRM</span> – Make people management simple, human, and productivity-driven.</li>
                        <li> <span className='font-bold'>POS</span> – Turn sales into smart, data-driven experiences.</li>
                    </ul>
                    <Link href={`/products`} className="flex items-center gap-2 cursor-pointer text-[16px] hover:underline">
                        <span>  Learn More </span>  <span> <RiArrowRightLine className='text-primary' /> </span>
                    </Link>
                </div>
                <div className='w-[40%] flex-center'>
                    <RotatingOrbit />
                </div>
            </div>
        </div>
    )
}

export default Products
