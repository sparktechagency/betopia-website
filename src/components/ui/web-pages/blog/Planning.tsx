import React from 'react';

const Planning: React.FC = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-[60px] leading-[130%]'> Enterprise Resource <span>Planning (ERP)</span></h1>
            <p className='text-[20px] leading-[1 ]'>In today&apos;s fast-paced business landscape, ERP systems integrate core processes to streamline operations and drive growth.</p>

            <div className='mt-[43px] flex-center gap-[30px] mb-[100px]'>
                <button className='bg-[#F69348] rounded-[5px] w-[296px] h-[50px]'><span className='text-white'>Deep Drive into the Spotlight</span></button>
                <button className='bg-white rounded-[5px] border border-black w-[180px] h-[50px]'>Learn More</button>
            </div>

            <div className=" mb-[92px]  w-auto h-[770px] rounded-[22px]"
                style={{
                    backgroundImage: `url(/images/planning.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 22
                }}
            >
                <div className="w-full h-full bg-gradient-to-t from-[#000000E5] from-10%  to-[#6666661A] to-90% rounded-[22px] p-[74px] flex items-end">
                    <h4 className="text-2xl font-light text-white">Enterprise Resource <br /> Planning (ERP)</h4>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-10'>
                <div className="col-span-7  mb-[92px]  w-full h-[462px] rounded-[22px]"
                    style={{
                        backgroundImage: `url(/images/conference.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 22
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-t from-[#000000E5] from-10%  to-[#6666661A] to-90% rounded-[22px] p-[74px] flex items-end"></div>
                </div>
                <div className='col-span-5'>
                    <p className='text-[24px] leading-[140%]'>A delegation of AmCham Bangladesh, led by its President 𝐌𝐫. 𝐒𝐲𝐞𝐝 𝐄𝐫𝐬𝐡𝐚𝐝 𝐀𝐡𝐦𝐞𝐝, attended the 𝐒𝐆𝟔𝟎 𝐈𝐏𝐒-𝐒𝐁𝐅 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 on 29 July 2025 at the Sands Grand Ballroom, Singapore, on an invitation from AmCham Singapore.
                        The conference brought together global leaders and thinkers to discuss the future of the global economy amid rising uncertainty. It began with a dialogue between 𝐏𝐫𝐢𝐦𝐞 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐚𝐧𝐝 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐟𝐨𝐫 𝐅𝐢𝐧𝐚𝐧𝐜𝐞, 𝐌𝐫. 𝐋𝐚𝐰𝐫𝐞𝐧𝐜𝐞 𝐖𝐨𝐧𝐠, and IPS Director 𝐌𝐫. 𝐉𝐚𝐧𝐚𝐝𝐚𝐬 𝐃𝐞𝐯𝐚𝐧, focusing on Singapore’s role in an evolving international landscape.</p>
                </div>
            </div>
        </div>
    );
};

export default Planning;