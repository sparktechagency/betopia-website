"use client";
import React, { useEffect, useRef, useState } from "react";
import { pages } from "@/datas/sharedData/navbar";
import Image from "next/image";
import OutlineButton from "./OutlineButton";
import { Menu, X } from "lucide-react";
import NavItem from "../ui/shared-features/navbar/NavItem";
import MobileMenu from "../ui/shared-features/navbar/mobile-menu/MobileMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY; // avoid negative scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container 
        ${isScrolled ? "bg-black mt-0" : "bg-transparent lg:bg-transparent backdrop-blur-[44px] lg:backdrop-blur-none lg:mt-10 mt-2"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div
        className={`relative top-0 container h-[62px] flex justify-between items-center text-[#FDFDFD] z-50 lg:h-[80px]  transition-colors duration-300`}
      >
        <Link href="/home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            height={55}
            width={140}
            className="h-[40px] w-full lg:h-[50px] lg:w-[140px] mt-1"
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-[#F69348] text-white hover:bg-[#e5823d] transition-all duration-300"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
