import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const JoinTeam: React.FC = () => {
    return (
        <div className=' w-[896px] mx-auto'>
            <div className='flex-center gap-[6.28px] bg-[#EDEDED] rounded-[11px] px-[17px] py-[7px] w-fit mx-auto mb-[44px]'>
                <Image src='/images/join-team.png' alt='Join Team' width={22} height={22} />
                <h2 className='text-lg leading-6 text-[#434343] !mb-0'>Join Our Growing Team</h2>
            </div>
            <h1 className='text-[25px] text-center leading-6 text-[#616161] mb-[38px]'>Build the Future with Us</h1>
            <p className='text-[27px] text-center leading-8 text-[#424242]'>Explore a Vast and Exciting World of Career Opportunities at Betopia and <br />
                Take Your Time to Browse Our Diverse Range of Open Positions </p>


            <div className='mt-[42px] flex-center gap-3'>
                <button className='w-[251px] h-[36px] bg-[#F69348] text-lg leading-6 px-[13px] py-[6px] rounded-[6px] flex-center gap-[10px]'>
                    <span className='text-white'>View Open Positions</span>
                    <MoveRight color='white' />
                </button>
                <button className='bg-[#FFDDC4] h-[36px] text-[#545454] text-lg leading-6 px-[13px] py-[6px] rounded-[6px]'>Learn More about our Culture</button>
            </div>
        </div>
    );
};

export default JoinTeam;