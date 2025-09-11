import React, { useState } from 'react';
import { Menu } from 'antd';
import { DropdownItem } from '@/types'; 
import { LuChevronRight } from "react-icons/lu";

interface DropdownMenuProps {
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [hoveredKey, setHoveredKey] = useState<DropdownItem>(items[0]); 

  return (
    <Menu
      className="border-0 shadow-lg navMenu"
      style={{
        background: '#ffffff95',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="bg-gradient-to-r from-[#080808]/90 to-[#585858]/90 backdrop-blur drop-shadow-2xl flex  w-[760px] h-[320px] gap-7 p-8">
        
        {/* LEFT SIDE: Menu Items */}
        <div className="w-1/2">
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              onClick={() => (window.location.href = item.link)}
              className="navMenu"
              onMouseEnter={() => setHoveredKey(item)}
            //   onMouseLeave={() => setHoveredKey(null)}
            >
              <div className="pb-2 border-b border-[#F69348] lg:pr-4  mb-4">
                <div className="hover:text-[#F69348] text-[#9B9B9B] text-lg font-normal flex items-center justify-between">
                  {item.label}
                  <LuChevronRight color='#fffff' className="text-[15px] text-white" />
                </div>
              </div>
            </Menu.Item>
          ))}
        </div>

        {/* RIGHT SIDE: Only show hovered item’s description */}
        <div className="w-1/2 ">
          {hoveredKey && (
            <> 
            <p className='text-2xl font-semibold text-[#9B9B9B] pb-3'>
                {hoveredKey.label}
            </p>
              <div className="text-[#B3B0B0] text-[16px]  font-normal pb-2">
                {hoveredKey.description}
              </div>
              <div className="text-[#858585] text-lg font-normal flex items-center gap-0.5 cursor-pointer underline underline-offset-4"  onClick={() => (window.location.href = hoveredKey.link)}>
                Learn more
                {/* <LuChevronRight color='#F69348' size={18} className=" text-lg" /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </Menu>
  );
};

export default DropdownMenu;
