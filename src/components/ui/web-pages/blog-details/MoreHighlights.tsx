import { HighlightsData } from '@/datas/pages/blog'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const MoreHighlights = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-6'>
                {
                    HighlightsData.map((data, index) => (
                        <div key={index} className='bg-[#ECE9E9] rounded-[20px] p-[30px]'>
                            <div className="h-[48px] overflow-hidden flex-center w-[48px] mb-[15px] rounded-[8px] drop-shadow-2xl">
                                <Image style={{ borderRadius: "8px" }} src={data.img} alt="Dubai" width={60} height={60} />
                            </div>
                            <p className='text-[#000000] text-[25px] leading-[130%]'>{data.title}</p>
                            <p className='pb-8 text-[#000000] text-[25px] leading-[130%]'>{data.subTitle}</p>

                            <p className='text-[#000000] text-[20px] leading-[130%]'>{data.content}</p>
                            <Link href={`/blog-details?blog=${data.linkName}`} className='flex items-center justify-end gap-2'>
                                <p className='text-[#858585]'>Learn more</p>
                                <MoveRight size={15} color='#F69348' />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoreHighlights