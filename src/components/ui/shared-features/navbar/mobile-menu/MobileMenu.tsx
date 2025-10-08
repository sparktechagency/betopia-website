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
            className={`flex items-center justify-between py-2.5 cursor-pointer ${
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
            <div className="ml-4 space-y-0.5 mb-1 transition-all duration-300 ease-in-out">
              {page.dropdownItems?.map((item) => (
                <Link
                  key={item.key}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 text-[16px] text-gray-700 hover:text-[#F69348]"
                >
                  {item.label}
                </Link>
              ))}
              {page.megaSections?.map((section) => (
                <div key={section.title} className="mt-2">
                  <p className="text-[16px] font-medium !mb-2">{section.title}</p>
                  {section.items?.map((item) => (
                    <Link
                      key={item.key}
                      href={item.link}
                      onClick={onClose}
                      className="block py-1 text-sm text-gray-700 hover:text-[#F69348]"
                    >
                      {item.label}
                    </Link>
                  ))}
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
      className={`absolute left-0 right-0 w-full bg-[#F5F5F5] z-40 shadow-2xl rounded-b-2xl  transform transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-y-auto ${
        open ? "translate-y-0 opacity-100  max-h-[calc(100vh-64px)]  overflow-y-auto" : "-translate-y-3 opacity-0 max-h-0"
      }`}
    >
      <div className="flex flex-col h-full p-6 ">
        <nav className="flex-1 overflow-y-auto">
          <div className="space-y-1">{pages.map((page) => renderMenuItem(page))}</div>
        </nav>

        <div className="pt-6 ">
          <OutlineButton className="w-full py-3 ">Try Consultant</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
