import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { ReactNode } from "react";
export interface DropdownItem {
  key: string;
  label: string;
  description: string;
  link: string;
}

export interface MegaSectionItem {
  key: string;
  label: string;
  link: string;
}

export interface MegaSection {
  title: string;
  items: MegaSectionItem[];
}

export interface BlogItem {
  title: string;
  description1: string;
  description2?: string;
  list: string[];
  list2?: string[];
  subFooter?: string;
}

export interface NavPage {
  name: string;
  link: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  megaSections?: MegaSection[];
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
        list?: string[];
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
    subTitle?: string;
    description2?: string;
    imgUrl: string;
  };
  facilities: {
    icon: string;
    title: string;
    subTitle?: string;
    list?: string[]
    description: string;
  }[];
}

export interface TransformingType {
  number: string;
  heading: string;
  accent: string;
  numberOnRight?: boolean;
}



export interface PortfolioSocialLink {
  icon: ReactNode;
  link: string;
}

export interface Banner {
  videoSrc: string;
  title: ReactNode;
  subtitle: string;
  description: string;
  buttonName: string;
  buttonLink: string;
}

export interface ProjectOverview {
  title: ReactNode;
  description: ReactNode;
  list?: string[];
  image: string;
  projectName: string;
  category: string;
  serviceWeProvide: string[];
  socialLinks: PortfolioSocialLink[];
}

export interface Feature {
  title: ReactNode;
  description: string;
  description2?: string;
  description3?: string;
  list?: string[];
  list2?: string[];
  imgUrl: string;
}

export interface Research {
  title: ReactNode;
  description: string;
  description2?: string;
  subTitle?: string;
  list?: string[];
  imgUrl: string;
}

export interface ManagementDashboard {
  title: ReactNode;
  description: string;
  imgUrl: string | StaticImport;
}

export interface OtherPortfolio {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  gradientClass: string;
  link: string;
}

export interface PortfolioData {
  banner: Banner;
  projectOverview: ProjectOverview;
  firstFeatures: Feature[];
  secondFeature: Feature[];
  thirdFeatures: Feature[];
  research: Research;
  images: string[];
  managementDashboard?: ManagementDashboard;
  otherPortfolio: OtherPortfolio[];
}

export interface portfolioDetailsType {
  portfolioDetails: PortfolioData;
}
