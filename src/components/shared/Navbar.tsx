"use client"
import React, { useState } from 'react';
import { pages } from '@/datas/sharedData/navbar';
import NavItem from '../ui/shared-features/navbar/NavItem';
import Image from 'next/image';
import OutlineButton from './OutlineButton';


const Navbar: React.FC = () => {
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null); 
    console.log(hoveredDropdown);

    return (
        <div className=" relative  top-0 container mt-10 h-[62px] flex justify-between items-center bg-transparent text-[#FDFDFD]  z-50  ">
            <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" height={55} width={140} className="" />
            </div> 

            <div className="flex items-center gap-9">
                <div className="flex items-center gap-9">
                    {pages.map((page) => (
                        <NavItem
                            key={page.name}
                            page={page}
                            setHoveredDropdown={setHoveredDropdown} 
                        />
                    ))}
                </div>

                <div>
                    <OutlineButton className="">Try Consultant</OutlineButton>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
