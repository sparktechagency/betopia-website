// banner  

import { servicesType } from "@/types"

export const cloudServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> Cloud   </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
    buttonName: "Partner With Us ",
    buttonLink: "/schedule"
}
export const cybersecurityServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> Cybersecurity  </span> <span className="text-primary">  Services </span>  </p>,
    description: "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions ",
    buttonName: "Partner With Us",
    buttonLink: "/schedule"
}
export const aiServicesData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4",
    title: <p> <span className="text-white"> AI  </span> <span className="text-primary"> Services </span>  </p>,
    description: "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
    buttonName: "Partner With Us",
    buttonLink: "/schedule"
}


// contents  

// Cloud Service  

export const CloudService:servicesType = {
    title: "Cloud Service",

    subtitle: "Betopia’s cloud services are designed to deliver agility, security, and cost-efficiency, enabling your business to scale seamlessly in a digital first world",

    description: "Betopia Limited ensures a secure and seamless shift to the cloud with minimal downtime. Our expert team manages the entire process, reducing risks, preventing disruptions, and maximizing the benefits of cloud technology. With end-to-end support, we help businesses achieve agility, cost savings, and future-ready infrastructure.",

    services: {
        title: "Highly effective solutions",
        subtitle: "tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability.",
        categories: [
            {
                categoryTitle: "Enterprise",
                categorySubtitle: <p> <span className="text-primary"> Cloud </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cloudService/enterprise.png",
                details: {
                    name: "Enterprise Cloud Management",
                    description: "Take back control of your cloud smarter, faster, leaner. We bring FinOps driven intelligence to optimize spend, boost performance, and automate everything with Infrastructure‑as‑Code. From airtight governance to        	crystal clear visibility across accounts and clouds, we empower your finance and tech leaders to turn cloud chaos into clarity, savings, and growth. ",
                    imgUrl: "/cloudService/cloud1.png"
                }
            },
            {
                categoryTitle: "Hybrid/Multi",
                categorySubtitle: <p> <span className="text-primary"> Cloud </span>  <span className="text-white"> Platform Management </span>   </p>,
                categoryBgImg: "/cloudService/hybrid-cloud.png",
                details: {
                    name: "Hybrid/Multi Cloud Platform Management",
                    description: "Run anywhere, without the chaos. We design future‑proof multi‑cloud architectures, place workloads where performance meets cost efficiency, and unify management into one clear view. From secure data migration to 	rock‑solid connectivity and resilience, we make hybrid and multi‑cloud not just manageable but a strategic advantage.",
                    imgUrl: "/cloudService/cloud2.png"
                }
            },

            {
                categoryTitle: "Cloud Security",
                categorySubtitle: <p> <span className="text-primary"> Compliance </span>  <span className="text-white"> & Governance  </span>   </p>,
                categoryBgImg: "/cloudService/cloud-security.png",
                details: {
                    name: "Cloud Security, Compliance & Governance",
                    description: "Lock down your cloud secure, compliant, and battle-ready by default. From IAM and Zero Trust frameworks to CSPM and evidence automation, we shrink your attack surface and keep you ahead of regulators. Seamlessly  	integrated with your SOC/SIEM, we transform cloud security from a headache into a business enabler you can trust.",
                    imgUrl: "/cloudService/cloud3.png"
                }
            },

            {
                categoryTitle: "Cloud-Native",
                categorySubtitle: <p> <span className="text-primary"> Infrastructure </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cloudService/cloud-native.jpg",
                details: {
                    name: "Cloud-Native Infrastructure Management",
                    description: "Build smarter, not harder. We take the complexity out of Kubernetes, microservices, and CI/CD so your teams innovate without friction. With automation first platforms powered by GitOps, service mesh, observability, 	and DevSecOps, we accelerate releases and strengthen reliability.",
                    imgUrl: "/cloudService/cloud4.png"
                }
            }
        ]
    }
}

// Cybersecurity Services  
export const CybersecurityServices:servicesType = {
    title: "Cybersecurity Services",

    subtitle: "Betopia’s cloud services are designed to deliver agility, security, and cost-efficiency, enabling your business to scale seamlessly in a digital first world",

    description: "We build digital confidence. Our cybersecurity solutions combine governance, resilience, and next-gen defense to keep your business secure while fueling innovation and growth. Backed by decades of expertise, industry best practices, and a proactive threat-hunting approach, we ensure you always stay one step ahead of evolving cyber risks.",

    services: {
        title: "Uncompromising Security Solutions",
        subtitle: "End-to-end encryption, adaptive threat prevention, and scalable defense systems.",
        categories: [
            {
                categoryTitle: "Cyber Security",
                categorySubtitle: <p> <span className="text-primary"> Advisory </span>  <span className="text-white">  & Consulting  </span>   </p>,
                categoryBgImg: "/cyberSecurity/cyber.png",
                details: {
                    name: "Cybersecurity Advisory & Consulting",
                    description: "Shape your digital defense with visionary, board-level guidance. We identify risks, craft adaptive security architectures, and align you with global standards like ISO, NIST, GDPR, HIPAA, and SOX. Our roadmap equips 	you with proactive strategies and a ready-to-act incident response playbook.",
                    imgUrl: "/cyberSecurity/cyber1.png"
                }
            },
            {
                categoryTitle: "Managed",
                categorySubtitle: <p> <span className="text-primary"> Security </span>  <span className="text-white"> Operations </span>   </p>,
                categoryBgImg: "/cyberSecurity/managed.png",
                details: {
                    name: "Managed Security Operations",
                    description: "Stay protected with always-on monitoring, lightning-fast threat detection, and instant response without the cost of building your own SOC.We fine-tune your SIEM, eliminate alert noise, and manage vulnerabilities 	end-to-end with clear playbooks and transparent post-incident reporting.Turn complex security into confidence, trust, and peace of mind.",
                    imgUrl: "/cyberSecurity/cyber2.png"
                }
            },

            {
                categoryTitle: "Enterprise Cyber",
                categorySubtitle: <p> <span className="text-primary"> Resilience </span>  <span className="text-white"> & Governance  </span>   </p>,
                categoryBgImg: "/cyberSecurity/resilience.png",
                details: {
                    name: "Enterprise Cyber Resilience & Governance",
                    description: "Disruption doesn’t decide your future, we do. We engineer resilience into your DNA with bulletproof BCP/DR blueprints, clear executive dashboards, and battle tested training.From third-party risk control to high 	impact tabletop drills, we turn RTO/RPO targets into kept promises making resilience your ultimate unfair advantage.",
                    imgUrl: "/cyberSecurity/cyber3.png"
                }
            },

            {
                categoryTitle: "Cyber",
                categorySubtitle: <p> <span className="text-primary"> Risk </span>  <span className="text-white"> Management </span>   </p>,
                categoryBgImg: "/cyberSecurity/cyberRisk.png",
                details: {
                    name: "Cyber Risk Management",
                    description: "We turn cyber risk into clear business insight your board can act on. Our team builds living risk registers, runs scenario modeling, and pressure tests your controls to expose real weaknesses before attackers do. 	From smart treatment plans to optimized cyber insurance, we cut through uncertainty and reduce expected loss, transforming risk into strategy.",
                    imgUrl: "/cyberSecurity/cyber4.png"
                }
            }
        ]
    }
}

// AI Services  
export const AIServices:servicesType = {
    title: "AI Services",

    subtitle: "Betopia’s cloud services are designed to deliver agility, security, and cost-efficiency, enabling your business to scale seamlessly in a digital first world",

    description: "Our engineers' intelligence that redefines how businesses grow. Our tailored solutions turn complex data into smart actions, powering innovation and agility at scale.With a foundation of trust, governance, and responsibility, we ensure AI aligns seamlessly with your vision.Let us help you move beyond automation to create intelligent ecosystems that set you ahead of the competition. ",

    services: {
        title: "Uncompromising Security Solutions",
        subtitle: "From consulting to execution smart, secure, and scalable solutions.",
        categories: [
            {
                categoryTitle: "Artificial Intelligence",
                categorySubtitle: <p> <span className="text-primary"> Consulting </span>  <span className="text-white">  & Implementation </span>   </p>,
                categoryBgImg: "/aiServices/consulting.png",
                details: {
                    name: "AI Consulting & Implementation",
                    description: "We craft AI roadmaps that go beyond theory turning ambition into measurable outcomes. Our team evaluates your ecosystem, selects the perfect tools, and builds pilots that prove value early. With frictionless integration and enterprise grade scaling, AI becomes a natural extension of your business. From vision to execution, we deliver intelligence that empowers your people and accelerates your growth. ",
                    imgUrl: "/aiServices/ai1.png"
                }
            },
            {
                categoryTitle: "Enterprise",
                categorySubtitle: <p> <span className="text-primary"> Generative </span>  <span className="text-white">  AI Solutions </span>   </p>,
                categoryBgImg: "/aiServices/generative.png",
                details: {
                    name: "Enterprise Generative AI Solutions",
                    description: "We deliver enterprise-ready GenAI for content, code, and conversations secure, governed, and reliable. With LLMs enhanced by RAG, guardrails, and real time evaluations, your teams innovate faster with confidence. No compliance worries just safe, scalable GenAI that drives productivity and unlocks new possibilities. ",
                    imgUrl: "/aiServices/ai2.png"
                }
            },

            {
                categoryTitle: "Intelligent Business",
                categorySubtitle: <p> <span className="text-primary"> Process  </span>  <span className="text-white"> Automation  </span>   </p>,
                categoryBgImg: "/aiServices/process.png",
                details: {
                    name: "Intelligent Business Process Automation",
                    description: "Smarter than automation automation that thinks.We combine AI + RPA with process  mining, smar t bots, and intelligent document processing to eliminate waste, accelerate workflows, and raise accuracy to new heights.From finance to operations, we turn repetitive tasks into intelligent systems that learn, adapt, and deliver measurable business impact.",
                    imgUrl: "/aiServices/ai3.png"
                }
            },

            {
                categoryTitle: "Advanced",
                categorySubtitle: <p> <span className="text-primary"> Analytics </span>  <span className="text-white">  & Data Intelligence </span>   </p>,
                categoryBgImg: "/aiServices/analytics.jpg",
                details: {
                    name: "Advanced Analytics & Data Intelligence",
                    description: " We transform scattered data into powerful intelligence that spots opportunities before they surface.Our team architects smart strategies, adaptive ML models, and real-time pipelines that keep decisions crystal 	clear.Backed by resilient MLOps, your analytics stay future-proof, scalable, and always ready to fuel growth.",
                    imgUrl: "/aiServices/ai4.png"
                }
            }
        ]
    }
}

