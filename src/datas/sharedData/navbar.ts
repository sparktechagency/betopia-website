// /datas/sharedData/navbar.ts
import { NavPage } from "@/types";

export const pages: NavPage[] = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  {
    name: "Products",
    link: "products",
    hasDropdown: true,
    dropdownItems: [
      {
        key: "HRM",
        label: "Human Resource Management (HRM)",
        description:
          "Betopia's HRM solution transforms human resource operations into a seamless, efficient process for modern businesses. It handles recruitment, onboarding, performance tracking, and payroll with intuitive automation. ",
        link: "/products?product=HRM",
      },
      {
        key: "POS",
        label: "Point of Sale Machine (POS)",
        description:
          "Betopia's POS system delivers fast, reliable point-of-sale operations tailored for retail and hospitality environments. It supports seamless inventory syncing, payment processing, and customer loyalty programs in one unified platform.",
        link: "/products?product=POS",
      },
      {
        key: "ERP",
        label: "Betopia ERP",
        description:
          " Betopia's ERP platform unifies core business functions like finance, supply chain, and operations into a single, intelligent system. It provides real-time visibility and automation to streamline workflows and reduce costs.",
        link: "/products?product=ERP",
      },
      {
        key: "Partner Program",
        label: "Partner Program",
        description:
          "In our B2B Partner Program, anyone can become a partner. Additionally, partners have the option to purchase our Partner Management Portal, which is an essential tool for efficiently managing all partners from a single platform. It allows you to oversee communications, performance, and collaboration seamlessly in one place.",
        link: "/partner",
      },
    ],
  },
  {
    name: "Services",
    link: "services",
    hasDropdown: true,

    // keep the simple list (unchanged) so existing code paths still work if needed
    dropdownItems: [
      {
        key: "cloud-services",
        label: "Cloud Services",
        description:
          "Betopia Limited's Cloud Modernization & Managed Services streamline business operations by transforming legacy systems into scalable, cloud-native solutions. Their expert team ensures seamless migration and optimization management for enhanced performance and security.",
        link: "/services?service=Cloud Services",
      },
      {
        key: "cybersecurity-services",
        label: "Cybersecurity Services",
        description:
          "Advanced cybersecurity solutions to protect your digital assets and ensure compliance.",
        link: "/services?service=Cybersecurity Services",
      },
      {
        key: "ai-services",
        label: "AI Services",
        description:
          "Cutting-edge AI and machine learning services to transform your business operations.",
        link: "/services?service=AI Services",
      },
    ],

    // NEW: mega menu sections for Services (used only by the new condition)
    megaSections: [
      {
        title: "Endpoint, Identity & Productivity Solutions",
        items: [
          {
            key: "endpoint-mgmt-security",
            label: "Endpoint Management & Security Solutions",
            link: "/services?service=endpoint-management-security",
          },
          {
            key: "identity-mgmt-security",
            label: "Identity Management & Security Solutions",
            link: "/services?service=identity-management-security",
          },
          {
            key: "secure-business-productivity",
            label: "Secure Business Productivity Solutions",
            link: "/services?service=secure-business-productivity",
          },
        ],
      },
      {
        title: "Cloud Solutions",
        items: [
          {
            key: "enterprise-infrastructure",
            label: "Enterprise Infrastructure Solutions",
            link: "/services?service=enterprise-infrastructure",
          },
          {
            key: "enterprise-networking",
            label: "Enterprise Networking Solutions",
            link: "/services?service=enterprise-networking",
          },
          {
            key: "cloud-infra-networking",
            label: "Cloud Infrastructure & Networking Solutions",
            link: "/services?service=cloud-infrastructure-networking",
          },
        ],
      },
      {
        title: "Cyber Security Solutions",
        items: [
          {
            key: "cyber-security-solutions",
            label: "Cyber Security Solutions",
            link: "/services?service=cyber-security-solutions",
          },
          {
            key: "cyber-security-services",
            label: "Cyber Security Services",
            link: "/services?service=cyber-security-services",
          },
        ],
      },
      {
        title: "AI Solutions",
        items: [
          {
            key: "digital-app-innovation",
            label: "Digital & App Innovation Solutions",
            link: "/services?service=digital-app-innovation",
          },
          {
            key: "data-solutions",
            label: "Data Solutions",
            link: "/services?service=data-solutions",
          },
          {
            key: "ai-solutions",
            label: "AI Solutions",
            link: "/services?service=ai-solutions",
          },
        ],
      },
    ],
  },
  { name: "Career", link: "career" },
  { name: "Blog", link: "blog" },
  { name: "Team Augmentation", link: "team-augmentation" },
];
