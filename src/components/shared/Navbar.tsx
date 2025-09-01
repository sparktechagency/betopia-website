"use client"
import React, { useState } from 'react';
import { Button } from 'antd';
import { pages } from '@/datas/sharedData/navbar';
import NavItem from '../ui/shared-features/navbar/NavItem';
import Image from 'next/image';
import OutlineButton from './OutlineButton';


const Navbar: React.FC = () => {
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

    return (
        <div className="container h-[70px] flex justify-between items-center py-4 bg-[#0f1419] text-[#FDFDFD] px-8">
            <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" height={60} width={140} className="" />
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
