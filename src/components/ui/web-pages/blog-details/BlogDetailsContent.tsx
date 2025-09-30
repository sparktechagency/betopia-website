import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetailsContent = ({ contents }: any) => { 
    console.log(contents);
    return (
        <div className=' flex flex-col gap-5 '> 

            {
                contents?.map((section:{title: string, description: string, description2: string, list: string[], list2: string[], subFooter: string}, index: number) => (<div key={index} className=' text-[#555555]'>
                    <p className=' text-2xl font-semibold pb-2 '>{section?.title}</p>
                    <p className='text-lg pb-1'> {section?.description ? section.description : ""} </p>
                    <div>
                        {
                            section?.list ?
                                <ul className='grid grid-cols-1 gap-2 list-disc pl-6  px-2  '>
                                    {
                                        section?.list.map((item: string, index: number) => (
                                            <li key={index} className='text-[#555555] text-[16px] leading-[24px]'>{item}</li>
                                        ))
                                    }
                                </ul>
                                : ""
                        }
                    </div>
                    <p className='text-lg'> {section?.description2 ? section.description2 : ""}</p>
                    <div>
                        {
                            section?.list2 ?
                                <ul className='grid grid-cols-1 gap-2 list-disc pl-6  px-2 py-6 '>
                                    {
                                        section?.list2.map((item: string, index: number) => (
                                            <li key={index} className='text-[#555555] text-[18px] leading-[24px]'>{item}</li>
                                        ))
                                    }
                                </ul>
                                : ""
                        }
                    </div>
                    <p className='text-lg'> {section?.subFooter ? section.subFooter : ""}</p>
                </div>
                ))
            }
        </div>
    );
};

export default BlogDetailsContent;