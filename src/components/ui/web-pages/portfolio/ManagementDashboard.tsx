import ComponentTitle from '@/components/shared/ComponentTitle';
import { portfolioDetailsType } from '@/types';
import Image from 'next/image';
import React from 'react';

const ManagementDashboard = ({ portfolioDetails }: portfolioDetailsType) => {
    const managementDashboardDetails = portfolioDetails?.managementDashboard

    return (
        <div className='my-20 w-full'>

            <div className='bg-gradient-to-r from-[#E8761F]/40   to-[#FFA460]/0 py-6'>
                <div className=' container mx-auto'>
                    <ComponentTitle className=' flex-center pb-6'> {managementDashboardDetails?.title} </ComponentTitle> 
                    <p className=' text-xl font-normal text-[#818181] text-center'>{managementDashboardDetails?.description}</p>
                </div>
            </div> 
            <Image src={managementDashboardDetails?.imgUrl ?? '/portfolio/chaseTheCashSa/managementDashboard.png'} alt='' height={1000} width={1400} className=' h-[1000px] w-full -mt-3'/>

        </div>
    );
};

export default ManagementDashboard;