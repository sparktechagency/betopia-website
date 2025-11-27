// components/ui/shared-features/navbar/DropdownMenu.tsx
"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import { DropdownItem, megaSections } from "@/types";
import { LuChevronRight } from "react-icons/lu";


interface DropdownMenuProps {
  items: DropdownItem[];
  variant?: "default" | "services";
  megaSections?: megaSections[]; // only for services
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  variant = "default",
  megaSections = [],
}) => {
  const [hoveredKey, setHoveredKey] = useState<DropdownItem>(items[0]);

  if (variant === "services") {
    return (
      <Menu
        className="border-0 shadow-lg navMenu"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <div className="bg-[#262626]/95 backdrop-blur drop-shadow-2xl max-w-7xl h-auto p-8 py-14 border border-[#262626]">
          <div className="text-primary text-sm mb-8 uppercase font-normal">Service</div>

          <div className="grid grid-cols-4 gap-10">
            {megaSections.map((section, index) => (
              <div key={section.title} className="flex gap-3 items-start group">
                <div className="text-[#BEBEBE] group-hover:text-[#F79549] text-2xl pt-1">
                  <p>{section.icons}</p>
                </div>

                <div className={`space-y-4`}>
                  <div className="font-normal flex flex-col justify-top">
                    {/* Title */}
                    <span className="text-lg min-h-[50px] text-[#BEBEBE] group-hover:text-[#F79549] transition-colors duration-300">
                      {section.title}
                    </span>
                    {/* Subtitle */}
                    <span className="text-xs text-white/40">{section.subtitle}</span>
                  </div>

                  <div className={`space-y-2  pr-10 ${index !== megaSections.length - 1 ? "border-r border-gray-50/10" : ""
                    } `}>
                    {section.items.map((it) => (
                      <button
                        key={it.key}
                        onClick={() => (window.location.href = it.link)}
                        className="w-full text-left  mb-2"
                      >
                        <div className="flex items-center justify-between bg-[#2B2B2B]/60 hover:bg-[#383838]/80 rounded-md px-3 py-2 transition-colors border border-gray-50/10 min-h-[60px] mb-3">
                          <div className="text-[13px] leading-5 text-[#D7D7D7] hover:text-[#F69348]">
                            {it.label}
                          </div>
                          <LuChevronRight className="text-white text-sm opacity-80" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Menu>
    );
  }

  return (
    <Menu
      className="border-0 shadow-lg navMenu"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <div className="bg-[#262626]/95 backdrop-blur drop-shadow-2xl flex  max-w-4xl h-auto gap-7 p-8 border border-[#262626]">
        {/* LEFT SIDE: Menu Items */}
        <div className="w-[40%]  min-h-[60px] flex flex-col ">
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              onClick={() => (window.location.href = item.link)}
              className="navMenu"
              onMouseEnter={() => setHoveredKey(item)}
            >
              <div className=" border border-gray-50/10 rounded-md  p-3  h-[54px] flex items-center  justify-between ">
                <div className="hover:text-[#F69348] text-[#D7D7D7] h-[54px]  text-[14px] font-normal flex items-center justify-between">
                  <span>   {item.label} </span>
                  {/* <span>
                    <LuChevronRight
                      color="#fffff"
                      className="text-[15px] text-white"
                    />

                  </span> */}
                </div>
              </div>
            </Menu.Item>
          ))}
        </div>

        {/* RIGHT SIDE: Only show hovered item’s description */}
        <div className="w-[60%] ">
          {hoveredKey && (
            <>
              <p className="text-2xl font-semibold text-[#9B9B9B] pb-3">
                {hoveredKey.label}
              </p>
              <div className="text-[#B3B0B0] text-[16px]  font-normal pb-2">
                {hoveredKey.description}
              </div>
              <div
                className="text-[#858585] text-sm font-normal flex items-center gap-0.5 cursor-pointer underline underline-offset-4"
                onClick={() => (window.location.href = hoveredKey.link)}
              >
                Learn more
              </div>
            </>
          )}
        </div>
      </div>
    </Menu>
  );
};

export default DropdownMenu;
