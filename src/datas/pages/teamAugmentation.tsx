import { PiShoppingCart } from "react-icons/pi";
import { IoCloudOutline } from "react-icons/io5";
import { LiaHandHoldingHeartSolid, LiaUniversitySolid } from "react-icons/lia";

export const talentCategoriesData = [
    {
        categoryTitle: "Developers",
        categorySubtitle: " Full-Stack, Backend, Frontend, Mobile (iOS, Android, Flutter)",
        categoryBgImg: "/augmentation/talentCategory1.png",
        details: {
            jobTitle: "Software Development & Engineering",
            priceRange: "$20,000 – $70,000 ",
            keyRoles: [
                "Full-Stack", "ERP/CRM Specialists", "Scrum Masters", "Integration Engineers", " ERP/CRM Specialists",
                "Tech Leads", "Backend ", "Frontend ", "Mobile (iOS, Android, Flutter)",],
            keySkills: [
                "JavaScript", "Python", "Java", "PHP", "Node.js", "React", "Flutter", "Platforms", "API integrations"],
            enterprises: ["Web & mobile platforms", "SaaS", "ERP/CRM", "Enterprise Apps"],
        }
    },
    {
        categoryTitle: "Engineers",
        categorySubtitle: "DevOps, Cybersecurity, Data & AI Specialists",
        categoryBgImg: "/augmentation/talentCategory2.png",
        details: {
            jobTitle: "DevOps Engineering & Cloud Management",
            priceRange: "$20,000 – $70,000 ",
            keyRoles: [
                "Full-Stack", "ERP/CRM Specialists", "Scrum Masters", "Integration Engineers", " ERP/CRM Specialists",
                "Tech Leads", "Backend ", "Frontend ", "Mobile (iOS, Android, Flutter)",],
            keySkills: [
                "JavaScript", "Python", "Java", "PHP", "Node.js", "React", "Flutter", "Platforms", "API integrations"],
            enterprises: ["Web & mobile platforms", "SaaS", "ERP/CRM", "Enterprise Apps"],
        }
    },

    {
        categoryTitle: "Design & Product",
        categorySubtitle: " UI/UX Designers, Product Managers, QA Testers",
        categoryBgImg: "/augmentation/talentCategory3.png",
        details: {
            jobTitle: "Product Management & Design",
            priceRange: "$20,000 – $70,000 ",
            keyRoles: [
                "Full-Stack", "ERP/CRM Specialists", "Scrum Masters", "Integration Engineers", " ERP/CRM Specialists",
                "Tech Leads", "Backend ", "Frontend ", "Mobile (iOS, Android, Flutter)",],
            keySkills: [
                "JavaScript", "Python", "Java", "PHP", "Node.js", "React", "Flutter", "Platforms", "API integrations"],
            enterprises: ["Web & mobile platforms", "SaaS", "ERP/CRM", "Enterprise Apps"],
        }
    },

    {
        categoryTitle: "Project Delivery",
        categorySubtitle: "Scrum Masters, Technical Leads, Solution Architects",
        categoryBgImg: "/augmentation/talentCategory4.png",
        details: {
            jobTitle: "Scrum Masters & Agile Coaches",
            priceRange: "$20,000 – $70,000 ",
            keyRoles: [
                "Full-Stack", "ERP/CRM Specialists", "Scrum Masters", "Integration Engineers", " ERP/CRM Specialists",
                "Tech Leads", "Backend ", "Frontend ", "Mobile (iOS, Android, Flutter)",],
            keySkills: [
                "JavaScript", "Python", "Java", "PHP", "Node.js", "React", "Flutter", "Platforms", "API integrations"],
            enterprises: ["Web & mobile platforms", "SaaS", "ERP/CRM", "Enterprise Apps"],
        }
    }
]

export const OurEngagementModalsData = [
    {
        id: "03",
        title: "Staff Augmentation",
        description: "On-demand experts for skill gaps",
        imgUrl: "/augmentation/ourEngagement2.jpg",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
    },
    {
        id: "04",
        title: "Build-Operate-Transfer (BOT) ",
        description:
            "Build your offshore team, we manage it, then transfer ownership",
        imgUrl: "/augmentation/ourEngagement3.jpg",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
    },
];

export const ChooseBetopiaReasons = [
    {
        imgUrl: "/augmentation/point1.png",
        title: "Access to Global Talent",
        description: "Text: Hire from 40+ countries, pre-vetted professionals."
    },
    {
        imgUrl: "/augmentation/point2.png",
        title: "Faster Time-to-Hire",
        description: "Reduce recruitment cycles from months to weeks."
    },
    {
        imgUrl: "/augmentation/point3.png",
        title: "Scalable & Flexible",
        description: "Easily adjust your team size as projects evolve."
    },
    {
        imgUrl: "/augmentation/point4.png",
        title: "Enterprise-Grade Security",
        description: "Text: GDPR, ISO 27001 & NDA compliance guaranteed."
    },
    {
        imgUrl: "/augmentation/point5.png",
        title: "Cost Optimization",
        description: "Save up to 60% vs. traditional hiring costs."
    },
]

export const servicesData = [
    { id: 1, title: "SaaS AI Team Scaling", description: "12-member AI team in 3 weeks, -55% hiring cost", image: "/augmentation/caseStudy2.png", textColor: "text-white" },
    { id: 2, title: "ERP Implementation for Retail", description: "Hybrid offshore team completed project 20% under budget.", image: "/augmentation/caseStudy1.png", textColor: "text-gray-900" },
    { id: 3, title: "Fortune 500 Cloud Migration", description: "Migrated 50+ apps with zero downtime, cut operational costs by 35%.", image: "/augmentation/caseStudy3.png", textColor: "text-white" },
    { id: 4, title: "Fortune 500 Cloud Migration", description: "Migrated 50+ apps with zero downtime, cut operational costs by 35%.", image: "/augmentation/caseStudy2.png", textColor: "text-white" },
]

export const provenProcessSteps = [
    {
        id: 1,
        imgUrl: "/augmentation/provenProcess1.png",
        title: "Discovery & Requirement Analysis",
        description: "Understand your needs"
    },
    {
        id: 2,
        imgUrl: "/augmentation/provenProcess2.png",
        title: "Talent Shortlisting",
        description: " Present candidates within 72 hours"
    },
    {
        id: 3,
        imgUrl: "/augmentation/provenProcess3.png",
        title: "Seamless Onboarding",
        description: "Integrate resources within days"
    },
    {
        id: 4,
        imgUrl: "/augmentation/provenProcess4.png",
        title: "Continuous Management",
        description: " Performance tracking & scaling support"
    },
]


export const industriesWeServeData = [
    {
        id: "1",
        title: "SaaS & Product Companies",
        bgImgUrl: "/augmentation/industriesWeServe1.jpg",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
        icon: <span className="text-[72px] text-primary"> <IoCloudOutline /> </span>
    },
    {
        id: "2",
        title: "BFSI (Banking, Financial Service & Insurance)",
        bgImgUrl: "/augmentation/industriesWeServe2.png",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
        icon: <span className="text-[72px] text-primary"> <LiaUniversitySolid /> </span>
    },
    {
        id: "3",
        title: "Healthcare & MedTech",
        bgImgUrl: "/augmentation/industriesWeServe3.jpg",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
        icon: <span className="text-[72px] text-primary"> <LiaHandHoldingHeartSolid /> </span>
    },
    {
        id: "4",
        title: "eCommerce & Retail",
        bgImgUrl: "/augmentation/industriesWeServe4.jpg",
        gradientClass: "from-[#666666]/50 to-[#000000]/80",
        icon: <span className="text-[72px] text-primary"> <PiShoppingCart /> </span>
    },
]