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
                key: 'HRM',
                label: 'Human Resource Management (HRM)',
                description: 'Betopia\'s HRM solution transforms human resource operations into a seamless, efficient process for modern businesses. It handles recruitment, onboarding, performance tracking, and payroll with intuitive automation. ',
                link: '/products?product=HRM'
            },
            {
                key: 'POS',
                label: 'Point of Sale Machine (POS)',
                description: 'Betopia\'s POS system delivers fast, reliable point-of-sale operations tailored for retail and hospitality environments. It supports seamless inventory syncing, payment processing, and customer loyalty programs in one unified platform.',
                link: '/products?product=POS' 
            },
            {
                key: 'ERP',
                label: 'Betopia ERP',
                description: ' Betopia\'s ERP platform unifies core business functions like finance, supply chain, and operations into a single, intelligent system. It provides real-time visibility and automation to streamline workflows and reduce costs.',
                link: '/products?product=ERP'
            }
        ]
    },
    { 
        name: "Services", 
        link: "services",
        hasDropdown: true,
        dropdownItems: [
            {
                key: 'cloud-services',
                label: 'Cloud Services',
                description: 'Betopia Limited\'s Cloud Modernization & Managed Services streamline business operations by transforming legacy systems into scalable, cloud-native solutions. Their expert team ensures seamless migration and optimization management for enhanced performance and security.',
                link: '/services?service=Cloud Services'
            },
            {
                key: 'cybersecurity-services',
                label: 'Cybersecurity Services',
                description: 'Advanced cybersecurity solutions to protect your digital assets and ensure compliance.',
                link: '/services?service=Cybersecurity Services'
            },
            {
                key: 'ai-services',
                label: 'AI Services',
                description: 'Cutting-edge AI and machine learning services to transform your business operations.',
                link: '/services?service=AI Services'
            }
        ]
    },
    { name: "Career", link: "career" },
    { name: "Blog", link: "blog" }
];