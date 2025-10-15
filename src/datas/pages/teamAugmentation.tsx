import { PiShoppingCart } from "react-icons/pi";
import { IoCloudOutline } from "react-icons/io5";
import { LiaHandHoldingHeartSolid, LiaUniversitySolid } from "react-icons/lia";

export const talentCategoriesData = [
    {
        categoryTitle: "Developers",
        categorySubtitle: " Full-Stack, Backend, Frontend, Mobile (iOS, Android, Flutter)",
        categoryBgImg: "/augmentation/talentCategory1.png",
        details: [{
            jobTitle: "Software Development & Engineering", 
            jobImg: "/augmentation/talentCategory.png",
            priceRange: "$20,000 – $70,000 ",
            keyRoles: [
                "Full-Stack", "ERP/CRM Specialists", "Scrum Masters", "Integration Engineers", " ERP/CRM Specialists",
                "Tech Leads", "Backend ", "Frontend ", "Mobile (iOS, Android, Flutter)",],
            keySkills: [
                "Java", "Python", "Java", "Node.js", "React", "Flutter", "ERP", "Platforms", "API integrations"],
            enterprises: ["Web & mobile platforms", "SaaS", "ERP/CRM", "Enterprise Apps"],
        }]
    },
    {
        categoryTitle: "Engineers",
        categorySubtitle: "DevOps, Cybersecurity, Data & AI Specialists",
        categoryBgImg: "/augmentation/talentCategory2.png",
        details: [
            {
            jobTitle: "Cloud, DevOps & Platform Engineering", 
            jobImg: "/cloudService/cloudInfrastructure1.png",
            priceRange: "$30,000 – $90,000 ",
            keyRoles: [
                "Cloud Engineers (AWS, Azure, GCP)", "DevOps & Platform Engineers", "SRE/DBRE", "FinOps", "DevSecOps"],
            keySkills: [
                "Kubernetes", "Terraform", "CI/CD", "Monitoring & Observability", "Cost-optimization", "Policy/Security"],
            enterprises: ["Cloud migration", "Reliability", "Platform automation", "Secure infra"],
        } ,
            {
            jobTitle: "Security, Risk & Compliance", 
            jobImg: "/cloudService/cloudInfrastructure2.png",
            priceRange: "$30,000 – $90,000 ",
            keyRoles: [
                "Cybersecurity Engineers", "IAM Specialists", " DevSecOps Specialists", "Privacy & AI Ethics Specialists", "GRC Analysts",],
            keySkills: [
                " Security tools", "Compliance standards (SOC2, ISO, GDPR)", "Auditing", "Policy Code"],
            enterprises: ["Security posture", "Audit readiness", "Data privacy", "Regulatory risk"],
        } ,
            {
            jobTitle: "Data, AI & Analytics", 
            jobImg: "/cloudService/cloudInfrastructure3.png",
            priceRange: "$35,000 – $100,000+",
            keyRoles: [
                "Data Engineers", "Data Scientists", "ML / MLOps / LLMOps Engineers", "Data Platform & Governance Specialists", "Analytics Engineers",],
            keySkills: [
                "Data Engineers","R" , "Spark", "MLflow", "TensorFlow" , "Data governance", "BI tools (Tableau, Power BI, Looker)",],
            enterprises: ["AI/ML deployment", "Predictive analytics", "BI", "Data governance & pipelines"],
        } ,
    
    ]
    },

    {
        categoryTitle: "Design & Product",
        categorySubtitle: " UI/UX Designers, Product Managers, QA Testers",
        categoryBgImg: "/augmentation/talentCategory3.png",
        details: [{
            jobTitle: "Product, Design & Quality", 
            jobImg: "/cloudService/cloudInfrastructure6.png",
            priceRange: "$25,000 – $80,000",
            keyRoles: [
                "Product Managers", "Product Ops Managers", "UI/UX Designers", "UX Researchers", "TPM",
                "Business Analysts", "QA / Automation / Performance / Security Testing",],
            keySkills: [
                "Figma", "Design Thinking", "Agile", "Product Strategy", "Testing frameworks", "Automation tools"],
            enterprises: ["Product strategy", "Quality assurance", "UX", "Program management "],
        }]
    },

    {
        categoryTitle: "Project Delivery",
        categorySubtitle: "Scrum Masters, Technical Leads, Solution Architects",
        categoryBgImg: "/augmentation/talentCategory4.png",
        details: [{
            jobTitle: "Customer & Business Enablement", 
            jobImg: "/cloudService/cloudInfrastructure5.png",
            priceRange: "$25,000 – $70,000",
            keyRoles: [
                "Solutions Engineers (Pre-Sales Architects)", "Technical Account Managers", "Customer Success Engineers", "Scrum Masters", "Change & Release Managers",],
            keySkills: [
                "Pre-sales demos", "SLA management", "Customer engagement", "change management"],
            enterprises: ["Pre-sales technical support", "Adoption", "SLAs", "Client retention"],
        }]
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