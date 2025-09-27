import React from 'react'

interface IBlogDetailsIntroProps {
  introduction1: string;
  introduction2?: string;
  introduction3?: string;
}

const BlogDetailsIntro: React.FC<IBlogDetailsIntroProps> = ({ introduction1, introduction2, introduction3 }) => {
  return (
    <div>
      <h2 className='text-[#181818] text-[24px] leading-[32px] pb-4'>Introduction</h2>
      <p className='text-[#555555] text-[18px] leading-[24px]'> {introduction1}</p>
      {
        introduction2 && <p className='text-[#555555] text-[18px] leading-[24px] py-2'> {introduction2}</p>
      }
      {
        introduction3 && <p className='text-[#555555] text-[18px] leading-[24px] py-2'> {introduction3}</p>
      }
    </div>
  )
}

export default BlogDetailsIntro;