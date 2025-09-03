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
                key: 'cloud-services',
                label: 'Cloud Services',
                description: 'Betopia Limited\'s Cloud Modernization & Managed Services streamline business operations by transforming legacy systems into scalable, cloud-native solutions. Their expert team ensures seamless migration and optimization management for enhanced performance and security.',
                link: '#cloud-services'
            },
            {
                key: 'cybersecurity-services',
                label: 'Cybersecurity Services',
                description: 'Betopia Limited\'s Cloud Modernization & Managed Services streamline business operations by transforming legacy systems into scalable, cloud-native solutions. Their expert team ensures seamless migration and optimization management for enhanced performance and security.',
                link: '#cybersecurity-services'
            },
            {
                key: 'ai-services',
                label: 'AI Services',
                description: ' Betopia Limited\'s Cloud Modernization & Managed Services streamline business operations by transforming legacy systems into scalable, cloud-native solutions. Their expert team ensures seamless migration and optimization management for enhanced performance and security.',
                link: '#ai-services'
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
                link: '/services?cloud-services'
            },
            {
                key: 'cybersecurity-services',
                label: 'Cybersecurity Services',
                description: 'Advanced cybersecurity solutions to protect your digital assets and ensure compliance.',
                link: '/services?cybersecurity-services'
            },
            {
                key: 'ai-services',
                label: 'AI Services',
                description: 'Cutting-edge AI and machine learning services to transform your business operations.',
                link: '/services?ai-services'
            }
        ]
    },
    { name: "Career", link: "career" },
    { name: "Blog", link: "blog" }
];