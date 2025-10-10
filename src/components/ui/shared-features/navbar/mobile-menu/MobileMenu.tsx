"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { pages } from "@/datas/sharedData/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { NavPage } from "@/types";
import OutlineButton from "./OutlineButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1] || "";
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const toggleExpand = (pageName: string) => {
    setExpandedItems((prev) =>
      prev.includes(pageName)
        ? prev.filter((item) => item !== pageName)
        : [...prev, pageName]
    );
  };

  const renderMenuItem = (page: NavPage) => {
    const isExpanded = expandedItems.includes(page.name);
    const isActive = activePage === page.link;

    if (page.hasDropdown && (page.dropdownItems || page.megaSections)) {
      return (
        <div key={page.name} className="overflow-y-auto">
          <div
            onClick={() => toggleExpand(page.name)}
            className={`flex items-center justify-between py-2.5 cursor-pointer  ${
              isActive ? "text-[#F69348]" : "text-gray-900"
            }`}
          >
            <span className="text-xl font-normal">{page.name}</span>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-900" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-900" />
            )}
          </div>

          {isExpanded && (
            <div className="p-4 space-y-4 mb-1 transition-all duration-300 ease-in-out bg-white py-6">
              {page.dropdownItems?.map((item) => (
                <Link
                  key={item.key}
                  href={item.link}
                  onClick={onClose}
                  className="block  text-[16px] text-gray-700 hover:text-[#F69348] px-2 bg-[#BEBEBE]/30 rounded-md py-3.5 w-full"
                >
                  {item.label}
                </Link>
              ))}
              {page.megaSections?.map((section) => (
                <div
                  key={section.title}
                  className="flex gap-2 items-start group"
                >
                  <div className="text-[#BEBEBE] group-hover:text-[#F79549] text-xl pt-2">
                    <p>{section.icons}</p>
                  </div>
                  <div key={section.title} className="mt-2 ">
                    <p className="text-[16px] font-medium !mb-2 group-hover:text-[#F79549] pb-3">
                      {section.title}
                    </p>

                    <div className=" flex flex-col gap-y-2 w-full">
                      {section.items?.map((item) => (
                        <Link
                          key={item.key}
                          href={item.link}
                          onClick={onClose}
                          className="block py-2.5 w-full text-sm text-gray-700 hover:text-[#F69348] px-2 bg-[#BEBEBE]/30 rounded-md"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={page.name}
        href={page.link}
        onClick={onClose}
        className={`block py-2.5 ${
          isActive ? "text-[#F69348]" : "text-gray-900"
        }`}
      >
        <span className="text-xl font-normal">{page.name}</span>
      </Link>
    );
  };

  return (
    <div
      className={`absolute left-0 right-0 w-full bg-[#ebeef0] z-40 shadow-2xl  transform transition-all duration-500  ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-y-auto h-[calc(100vh-64px)] ${
        open
          ? "translate-y-0 opacity-100 "
          : "-translate-y-3 opacity-0  pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-full p-6 ">
        <nav className="flex-1 overflow-y-auto">
          <div className="space-y-1">
            {pages.map((page) => renderMenuItem(page))}
          </div>
        </nav>

        <div className="pt-6 ">
          <OutlineButton className="w-full py-3 font-medium !text-gray-700 ">
            Try Consultant
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
