import { Input } from 'antd';
import { Search } from 'lucide-react';
import React from 'react';

const BetopiaVision: React.FC = () => {
    return (
        <div className='container mt-[52px]'>
            <h1 className='text-[50px] text-center leading-[120%]'>Current <span className='text-primary'>Openings</span> at Betopia</h1>
            <p className='text-center text-[22px] leading-[140%] text-[#797979]'>Discover a Range of Exciting Roles Across Our HRM, POS, and ERP Divisions— <br /> Apply Now to Start Making an Impact.</p>

            <div className='mt-[52px]'>
                <Input prefix={<Search/>} placeholder="Search Jobs" style={{backgroundColor: "#F3F3F5", border: "none", width: "274px"}} className=' h-[37px] rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.05)]' />
            </div>
        </div>
    );
};

export default BetopiaVision;