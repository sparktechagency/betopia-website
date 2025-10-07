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
        <div className="bg-gradient-to-r from-[#080808]/90 to-[#585858]/90 backdrop-blur drop-shadow-2xl w-[880px] h-[340px] p-6">
          <div className="text-primary text-sm mb-3">Services</div>

          <div className="grid grid-cols-4 gap-6">
            {megaSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <div className="text-[#BEBEBE] text-[13px]">
                  {section.title}
                </div>

                <div className="space-y-3 ">
                  {section.items.map((it) => (
                    <button
                      key={it.key}
                      onClick={() => (window.location.href = it.link)}
                      className="w-full text-left group mb-2"
                    >
                      <div className="flex items-center justify-between bg-[#2B2B2B]/60 hover:bg-[#383838]/80 rounded-md px-3 py-2 transition-colors border border-gray-50/10 mb-3">
                        <div className="text-[13px] leading-5 text-[#D7D7D7] group-hover:text-[#F69348]">
                          {it.label}
                        </div>
                        <LuChevronRight className="text-white text-sm opacity-80" />
                      </div>
                    </button>
                  ))}
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
      style={{
        background: "#ffffff95",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
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
            >
              <div className="pb-2 border-b border-[#F69348] lg:pr-4  mb-4">
                <div className="hover:text-[#F69348] text-[#9B9B9B] text-lg font-normal flex items-center justify-between">
                  {item.label}
                  <LuChevronRight
                    color="#fffff"
                    className="text-[15px] text-white"
                  />
                </div>
              </div>
            </Menu.Item>
          ))}
        </div>

        {/* RIGHT SIDE: Only show hovered item’s description */}
        <div className="w-1/2 ">
          {hoveredKey && (
            <>
              <p className="text-2xl font-semibold text-[#9B9B9B] pb-3">
                {hoveredKey.label}
              </p>
              <div className="text-[#B3B0B0] text-[16px]  font-normal pb-2">
                {hoveredKey.description}
              </div>
              <div
                className="text-[#858585] text-lg font-normal flex items-center gap-0.5 cursor-pointer underline underline-offset-4"
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
