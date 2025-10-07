"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { pages } from "@/datas/sharedData/navbar";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

import { Menu } from "lucide-react";
import NavItem from "../ui/shared-features/navbar/NavItem";
import MobileMenu from "../ui/shared-features/navbar/mobile-menu/MobileMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="sticky top-4  z-50  px-4   ">
      <div
        className={`relative top-0 container mt-10 h-[62px] flex justify-between items-center text-[#FDFDFD] z-50 
        lg:h-[74px]  md:mx-auto rounded-2xl  
        transition-colors duration-300
        ${
          isScrolled
            ? "bg-black/70 backdrop-blur-[44px] "
            : "bg-transparent lg:bg-transparent lg:rounded-none backdrop-blur-[44px] lg:backdrop-blur-none"
        }`}
      >
        <Link href="/home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            height={55}
            width={140}
            className="h-[40px] w-full lg:h-[55px] lg:w-[140px]  mt-1 "
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          <div className="flex items-center gap-9">
            {pages?.map((page) => (
              <NavItem
                key={page.name}
                page={page}
                setHoveredDropdown={setHoveredDropdown}
              />
            ))}
          </div>

          <Link href={"/contact"}>
            <OutlineButton className="">Try Consultant</OutlineButton>
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-[#F69348] text-white hover:bg-[#e5823d] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
