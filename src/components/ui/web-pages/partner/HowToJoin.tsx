import ComponentTitle from '@/components/shared/ComponentTitle';
import OutlineButton from '@/components/shared/OutlineButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const datas = [
    {
        name: "Step #1",
        description: <div>Click on the “<span className='font-medium'>Apply to become partner</span>” Button to take you to the form section.</div>,
        img: "/application/step1.png"
    },
    {
        name: "Step #2",
        description: <div>Fill up all the information mentioned in the “<span className='font-medium'>form</span>” to become a partner.</div>,
        img: "/application/step2.png"
    },
    {
        name: "Step #3",
        description: <div>After filling all the information on the form, click “<span className='font-medium'>Submit</span>” button.</div>,
        img: "/application/step3.png"
    }
]

const HowToJoin: React.FC = () => {
    return (
        <div className='container my-20'>
            <ComponentTitle className='text-[#5A5A5A] flex-center pb-6 ' > How to  <span className='text-primary'>join</span> </ComponentTitle> 
            <div className=' w-full flex-center flex-col gap-7'> 

            <p className='text-center text-[22px] leading-[140%] text-[#2D4E75] w-1/2'>Learn about the straightforward steps to become a partner and start the collaboration process.</p>  
            <Link href={"/become-partner"} > 
            <OutlineButton className=' px-6 py-4 !text-[#616161] !text-lg ' > Apply to Become a Partner </OutlineButton>
            </Link>
            </div> 
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] my-[52px]">
                {
                    datas.map((data, index) => (
                        <div key={index} className="bg-[#F693481A]/90 h-[239px] rounded-[12px]">
                            <div className="flex items-center justify-center h-full w-full px-[32px]">
                                <div>
                                    <div className="h-[48px] overflow-hidden flex-center w-[48px] mb-[32px] bg-white rounded-[8px] drop-shadow-2xl">
                                        <Image style={{ borderRadius: "8px" }} src={data.img} alt="Dubai" width={60} height={60} />
                                    </div>

                                    <h2 className="text-[21px] font-bold mb-5">{data.name}</h2>
                                    <p className="text-[18px] text-[#737373] leading-[160%]">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowToJoin;