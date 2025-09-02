"use client"
import React from 'react';
import { Dropdown } from 'antd';
import { NavPage } from '@/types';
import DropdownMenu from './DropdownMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    page: NavPage;
    setHoveredDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

const NavItem: React.FC<NavItemProps> = ({ page, setHoveredDropdown }) => {
    const pathname = usePathname();
    const activePage = pathname.split("/")[1] || "";
    console.log(activePage); 

    if (page.hasDropdown && page.dropdownItems) {
        return (
            <Dropdown
                key={page.name}
                overlay={<DropdownMenu items={page.dropdownItems}  />}
                trigger={['hover']}
                placement="topCenter"
                overlayStyle={{ marginTop: '22px'  }}          
            >
                <Link
                    href={page.link}
                    className={`text-white hover:border-b hover:border-[#F69348]  transition-colors duration-200 text-lg leading-[24px]  cursor-pointer ${activePage === page.link && 'border-b border-[#F69348]'}`}
                    onMouseEnter={() => setHoveredDropdown(page.name)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                >
                    {page.name}
                  
                </Link>
            </Dropdown>
        );
    }

    return (
        <Link
            href={page.link}
            key={page.name}
            className={`text-white hover:border-b hover:border-[#F69348]  transition-colors duration-200 text-lg leading-[24px]  cursor-pointer ${activePage === page.link && 'border-b border-[#F69348]'}`}
        >
            {page.name}
        </Link>
    );
};

export default NavItem;
