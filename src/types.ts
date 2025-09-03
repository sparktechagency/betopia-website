import React from "react";

export interface DropdownItem {
    key: string;
    label: string;
    description: string;
    link: string;
}

export interface NavPage {
    name: string;
    link: string;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
} 

export  interface SocialLink {
  icon: React.ReactNode;
  url: string;
  bgColor?: string;
} 

export  interface PageBannerProps {
    videoSrc: string;
    title: React.ReactNode;
    subtitle ?: string;
    description: string;
    buttonName: string;
    buttonLink: string;
}