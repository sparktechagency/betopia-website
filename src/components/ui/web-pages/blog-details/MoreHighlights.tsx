import { HighlightsData } from '@/datas/pages/blog'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MoreHighlights = () => {
    return (
        <div>
            <div>
                <h2 className='text-[#666666] text-[28px] font-light leading-[100%] pb-4 text-center'>
                    More <span className='text-primary'>Highlights</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                {HighlightsData.map((data, index) => (
                    <div
                        key={index}
                        className='relative rounded-[20px] overflow-hidden p-[30px] bg-cover bg-center h-[300px]'
                        style={{ backgroundImage: `url(${data.img})` }}
                    >
                        {/* Overlay */}
                        <div className='absolute inset-0 bg-black/70'></div>

                        {/* Content */} 
                        <div className='absolute bottom-3 pe-3 '> 
                        <div className=' z-10'>
                            <p className='text-white text-[25px] pb-2'>{data.title}</p>

                            <p className='text-gray-300 text-lg '>{data.content}</p>

                            <Link
                                href={`/blog-details?blog=${data.linkName}`}
                                className='flex items-center justify-start gap-2 mt-3 hover:underline hover:underline-offset-2 cursor-pointer'
                            >
                                <p className='text-[#F0F0F0]'>Learn more</p>
                                <MoveRight size={15} color='#F69348' />
                            </Link>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoreHighlights
