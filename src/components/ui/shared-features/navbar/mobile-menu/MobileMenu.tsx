"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { pages } from "@/datas/sharedData/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, X } from "lucide-react";
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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

    if (page.hasDropdown && page.dropdownItems) {
      return (
        <div key={page.name}>
          <div
            onClick={() => toggleExpand(page.name)}
            className={`flex items-center justify-between py-2.5 cursor-pointer ${
              isActive ? "text-[#F69348]" : "text-gray-900"
            }`}
          >
            <span className="text-[15px] font-normal">{page.name}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-900" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-900" />
            )}
          </div>
          {isExpanded && (
            <div className="ml-4 space-y-0.5 mb-1">
              {page.dropdownItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 text-[14px] text-gray-700 hover:text-[#F69348]"
                >
                  {item.label}
                </Link>
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
        <span className="text-[15px] font-normal">{page.name}</span>
      </Link>
    );
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#F5F5F5] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F69348] text-white hover:bg-[#e5823d] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              {pages.map((page) => renderMenuItem(page))}
            </div>
          </nav>

          <div className="pt-6 border-t border-gray-300">
            <OutlineButton className="w-full">Try Consultant</OutlineButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
