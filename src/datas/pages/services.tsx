// banner  

import { servicesType } from "@/types"

export const cloudServicesData = {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4",
    title: <p> <span className="text-white"> Cloud   </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
    buttonName: "Partner With Us ",
    buttonLink: "/partner"
}
export const cybersecurityServicesData = {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
    title: <p> <span className="text-white"> Cybersecurity  </span> <span className="text-primary">  Services </span>  </p>,
    description: "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions ",
    buttonName: "Partner With Us",
    buttonLink: "/partner"
}
export const aiServicesData = {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
    title: <p> <span className="text-white"> AI  </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
    buttonName: "Partner With Us",
    buttonLink: "/partner"
}


// contents  

// Cloud Service  

export const CloudService:servicesType = {
    title: "Cloud Service",

    subtitle: "Agility, Security, and Cost-Efficiency for a Digital-First World",

    description: "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored solutions to migrate, manage, and optimize cloud infrastructure seamlessly. We ensure a secure, low-risk transition to the cloud with minimal downtime. Our expert team handles migration, governance, and performance optimization end-to-end reducing risk, preventing disruptions, and maximizing ROI.",

    services: {
        title: "Highly effective solutions",
        subtitle: "These solutions deliver tailored architectures, seamless migrations, and optimized infrastructure for peak performance and scalability.",
        categories: [
            {
                categoryTitle: "Enterprise",
                categorySubtitle: <p> <span className="text-primary"> Cloud </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cloudService/enterprise.png",
                details: {
                    name: "Enterprise Cloud Management",
                    description: "Take back control of your cloud — smarter, faster, and leaner. We bring FinOps-driven intelligence to optimize spend, boost performance, and automate operations with Infrastructure-as-Code. Gain airtight governance and visibility across accounts and clouds to transform cloud chaos into clarity, savings, and growth.",
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502272/cloud_page_-Enterprise_Cloud_Management_video_sute6n.mp4"
                }
            },
            {
                categoryTitle: "Hybrid/Multi",
                categorySubtitle: <p> <span className="text-primary"> Cloud </span>  <span className="text-white"> Platform Management </span>   </p>,
                categoryBgImg: "/cloudService/hybrid-cloud.png",
                details: {
                    name: "Hybrid/Multi Cloud Platform Management",
                    description: "Run anywhere — without the chaos. We design future-proof, multi-cloud architectures, place workloads where performance meets cost efficiency, and unify management under one dashboard. From secure data migration rock-solid connectivity, we make hybrid/multi-cloud a strategic advantage instead of a challenge.",
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502282/Cloud_-_Hybrid-Multi_Cloud_Platform_Management_jzeres.mp4"
                }
            },

            {
                categoryTitle: "Cloud Security",
                categorySubtitle: <p> <span className="text-primary"> Compliance </span>  <span className="text-white"> & Governance  </span>   </p>,
                categoryBgImg: "/cloudService/cloud-security.png",
                details: {
                    name: "Cloud Security, Compliance & Governance",
                    description: "Lock down your cloud — secure, compliant, and audit-ready. From IAM and Zero Trust frameworks to CSPM and evidence automation, we minimize attack surfaces and keep you ahead of compliance demands. Seamlessly integrated with SOC/SIEM, we turn security into a business enabler.",
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502274/cloud_page_-_CEnterprise_Cloud_Management_video_xybalf.mp4"
                }
            },

            {
                categoryTitle: "Cloud-Native",
                categorySubtitle: <p> <span className="text-primary"> Infrastructure </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cloudService/cloud-native.jpg",
                details: {
                    name: "Cloud-Native Infrastructure Management",
                    description: "Build smarter, not harder. We simplify Kubernetes, microservices, and CI/CD pipelines with automation-first platforms powered by GitOps, service mesh, observability, and DevSecOps. Accelerate releases, boost reliability, and empower teams to innovate without friction.",
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502273/Cloud_-_Cloud_native_Infrastructure_Management_gsdkfv.mp4"
                }
            }
        ]
    }
}

// Cybersecurity Services  
export const CybersecurityServices:servicesType = {
    title: "Cybersecurity Services",

    subtitle: "Building Digital Confidence with Next-Gen Protection",

    description: "Betopia Limited offers Cybersecurity Advisory & Managed Security Services that combine governance, resilience, and next-generation defense to keep your business secure while enabling innovation and growth. Backed by industry best practices and a proactive threat-hunting approach, we ensure you stay one step ahead of evolving cyber risks — turning security from a burden into a business advantage.",

    services: {
        title: "Uncompromising Security Solutions",
        subtitle: "Our solutions deliver end-to-end encryption, adaptive threat prevention, and scalable defenses designed for modern enterprises.",
        categories: [
            {
                categoryTitle: "Cyber Security",
                categorySubtitle: <p> <span className="text-primary"> Advisory </span>  <span className="text-white">  & Consulting  </span>   </p>,
                categoryBgImg: "/cyberSecurity/cyber.png",
                details: {
                    name: "Cybersecurity Advisory & Consulting",
                    description: "Shape your digital defense strategy with visionary, board-level guidance. We help you:",
                    list: [
                        "Identify risks and vulnerabilities",
                        "Design adaptive security architectures",
                        "Align with ISO 27001, NIST, GDPR, HIPAA, and SOX",
                        "Build a ready-to-act incident response playbook"
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503569/Cyber_Security_-_Cybersecurity_Advisory_consulting_g7kewk.mp4"
                }
            },
            {
                categoryTitle: "Managed",
                categorySubtitle: <p> <span className="text-primary"> Security </span>  <span className="text-white"> Operations </span>   </p>,
                categoryBgImg: "/cyberSecurity/managed.png",
                details: {
                    name: "Managed Security Operations",
                    description: "Stay protected with 24/7 monitoring, threat detection, and response — without building your own SOC.  We provide:",
                    list: [
                        "SIEM tuning & alert noise reduction",
                        "Vulnerability management",
                        "Threat intelligence & forensics",
                        "Transparent post-incident reporting"
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503567/Cybersecurity_-_Managed_Security_Operations_pzqwde.mp4"
                }
            },

            {
                categoryTitle: "Enterprise Cyber",
                categorySubtitle: <p> <span className="text-primary"> Resilience </span>  <span className="text-white"> & Governance  </span>   </p>,
                categoryBgImg: "/cyberSecurity/resilience.png",
                details: {
                    name: "Enterprise Cyber Resilience & Governance",
                    description: "Result: Cyber resilience becomes your competitive advantage.",
                    list: [
                        "BCP/DR blueprints to keep RTO/RPO targets realistic",
                        "Executive dashboards for real-time risk visibility",
                        "Battle tested training",
                        "Tabletop drills & resilience training"
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503569/Cybersecurity_-_Enterprise_Cyber_Resilience_Governance_ybxncg.mp4"
                }
            },

            {
                categoryTitle: "Cyber",
                categorySubtitle: <p> <span className="text-primary"> Risk </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cyberSecurity/cyberRisk.png",
                details: {
                    name: "Cyber Risk Management",
                    description: "Transform cyber risk into actionable boardroom insight. Our team:",
                    list: [
                        "Builds living risk registers",
                        "Runs scenario modeling & stress-tests controls",
                        "Creates optimized treatment plans & cyber insurance strategies",
                        "The result: Measurable risk reduction and predictable outcomes."
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503576/Cyber_Security_-_Cyber_Risk_Management_wg3mkb.mp4"
                }
            } 
        ]
    }
}

// AI Services  
export const AIServices:servicesType = {
    title: "AI Services",

    subtitle: "Empowering Enterprises with Intelligent, Scalable Solutions",

    description: "Betopia Limited offers AI-powered solutions & managed services, empowering businesses with tailored intelligent systems that transform data into action, drive innovation, and accelerate growth. Our engineers craft AI ecosystems that go beyond automation — building trust, governance, and responsibility into every solution. We help you create intelligent, adaptive systems that align with your vision and keep you ahead of the competition.",

    services: {
        title: "Uncompromising Security Solutions",
        subtitle: "From consulting to execution, our AI solutions are designed to be smart, secure, and scalable.",
        categories: [
            {
                categoryTitle: "Artificial Intelligence",
                categorySubtitle: <p> <span className="text-primary"> Consulting </span>  <span className="text-white">  & Implementation </span>   </p>,
                categoryBgImg: "/aiServices/consulting.png",
                details: {
                    name: "AI Consulting & Implementation",
                    description: "We craft AI roadmaps that move beyond theory, turning ambition into measurable outcomes. Our experts:",
                    list: [
                        "Evaluate your existing ecosystem",
                        "Select the right tools and technologies",
                        "Build pilots that prove value early",
                        "Deliver enterprise-grade scaling and integration",
                        "Result: AI that naturally extends your business, empowers teams, and accelerates growth."
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503567/Cybersecurity_-_Managed_Security_Operations_pzqwde.mp4 "
                }
            },
            {
                categoryTitle: "Enterprise",
                categorySubtitle: <p> <span className="text-primary"> Generative </span>  <span className="text-white">  AI Solutions </span>   </p>,
                categoryBgImg: "/aiServices/generative.png",
                details: {
                    name: "Enterprise Generative AI Solutions",
                    description: "Enterprise-ready GenAI for content, code, and conversations — secure, governed, and reliable. We integrate LLMs with RAG, guardrails, and real-time evaluation, ensuring compliance while boosting productivity. No compliance worries — just safe, scalable GenAI to unlock creativity and business value.",
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503753/AI_-_Enterprise_Generative_AI_Solutions_fharlk.mp4"
                }
            },

            {
                categoryTitle: "Intelligent Business",
                categorySubtitle: <p> <span className="text-primary"> Process  </span>  <span className="text-white"> Automation  </span>   </p>,
                categoryBgImg: "/aiServices/process.png",
                details: {
                    name: "Intelligent Business Process Automation",
                    description: "Go beyond simple automation — build automation that thinks. We combine:",
                    list: [
                        "AI + RPA",
                        "Process mining & smart bots",
                        "Intelligent document processing"
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503753/AI_-_Intelligent_Business_Process_Automation_ezzfmf.mp4"
                }
            },

            {
                categoryTitle: "Advanced",
                categorySubtitle: <p> <span className="text-primary"> Analytics </span>  <span className="text-white">  & Data Intelligence </span>   </p>,
                categoryBgImg: "/aiServices/analytics.jpg",
                details: {
                    name: "Advanced Analytics & Data Intelligence",
                    description: "We turn scattered data into actionable intelligence:",
                    list: [
                        "Adaptive ML models",
                        "Real-time data pipelines",
                        "Automated dashboards"
                    ],
                    videoUrl: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503756/AI_-_Advanced_Analytics_Data_Intelligence_stggyo.mp4"
                }
            }
        ]
    }
}

