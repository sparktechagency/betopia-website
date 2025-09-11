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

export interface SocialLink {
    icon: React.ReactNode;
    url: string;
    bgColor?: string;
}

export interface PageBannerProps {
    videoSrc: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode | string;
    description: string;
    buttonName: string;
    buttonLink: string;
}

export interface serviceType {
    serviceData: servicesType
}

export interface servicesType {
    title: string;
    subtitle: string;
    description: string;
    services: {
        title: string;
        subtitle: string;
        categories: {
            categoryTitle: string;
            categorySubtitle: React.ReactNode;
            categoryBgImg: string;
            details: {
                name: string;
                description: string;
                videoUrl: string;
            };
        }[];
    };
}

export interface productType {
    productData: productsType
}

export interface productsType {
    title: string;
    description: string;
    solutionInnovative: {
        title: string;
        description: string;
        imgUrl: string;
    };
    facilities: {
        icon: string;
        title: string;
        description: string;
    }[];
}

export interface TransformingType {
    number: string;
    heading: string;
    accent: string;
    numberOnRight?: boolean;
}