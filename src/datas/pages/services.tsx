// banner

import { servicesType } from "@/types";

export const cloudServicesData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Cloud </span>{" "}
      <span className="text-primary"> Services </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
  buttonName: "Partner With Us ",
  buttonLink: "/partner",
};
export const cybersecurityServicesData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Cybersecurity </span>{" "}
      <span className="text-primary"> Services </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions ",
  buttonName: "Partner With Us",
  buttonLink: "/partner",
};
export const aiServicesData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> AI </span>{" "}
      <span className="text-primary"> Services </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
  buttonName: "Partner With Us",
  buttonLink: "/partner",
};

// contents

// Cloud Service

export const CloudService: servicesType = {
  title: "Cloud Service",

  subtitle: "Agility, Security, and Cost-Efficiency for a Digital-First World",

  description:
    "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored solutions to migrate, manage, and optimize cloud infrastructure seamlessly. We ensure a secure, low-risk transition to the cloud with minimal downtime. Our expert team handles migration, governance, and performance optimization end-to-end reducing risk, preventing disruptions, and maximizing ROI.",

  services: {
    title: "Highly effective solutions",
    subtitle:
      "These solutions deliver tailored architectures, seamless migrations, and optimized infrastructure for peak performance and scalability.",
    categories: [
      {
        categoryTitle: "Enterprise",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Cloud </span>{" "}
            <span className="text-white"> Management </span>{" "}
          </p>
        ),
        categoryBgImg: "/cloudService/enterprise.png",
        details: {
          name: "Enterprise Cloud Management",
          description:
            "Take back control of your cloud — smarter, faster, and leaner. We bring FinOps-driven intelligence to optimize spend, boost performance, and automate operations with Infrastructure-as-Code. Gain airtight governance and visibility across accounts and clouds to transform cloud chaos into clarity, savings, and growth.",
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502272/cloud_page_-Enterprise_Cloud_Management_video_sute6n.mp4",
        },
      },
      {
        categoryTitle: "Hybrid/Multi",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Cloud </span>{" "}
            <span className="text-white"> Platform Management </span>{" "}
          </p>
        ),
        categoryBgImg: "/cloudService/hybrid-cloud.png",
        details: {
          name: "Hybrid/Multi Cloud Platform Management",
          description:
            "Run anywhere — without the chaos. We design future-proof, multi-cloud architectures, place workloads where performance meets cost efficiency, and unify management under one dashboard. From secure data migration rock-solid connectivity, we make hybrid/multi-cloud a strategic advantage instead of a challenge.",
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502282/Cloud_-_Hybrid-Multi_Cloud_Platform_Management_jzeres.mp4",
        },
      },

      {
        categoryTitle: "Cloud Security",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Compliance </span>{" "}
            <span className="text-white"> & Governance </span>{" "}
          </p>
        ),
        categoryBgImg: "/cloudService/cloud-security.png",
        details: {
          name: "Cloud Security, Compliance & Governance",
          description:
            "Lock down your cloud — secure, compliant, and audit-ready. From IAM and Zero Trust frameworks to CSPM and evidence automation, we minimize attack surfaces and keep you ahead of compliance demands. Seamlessly integrated with SOC/SIEM, we turn security into a business enabler.",
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502274/cloud_page_-_CEnterprise_Cloud_Management_video_xybalf.mp4",
        },
      },

      {
        categoryTitle: "Cloud-Native",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Infrastructure </span>{" "}
            <span className="text-white"> Management </span>{" "}
          </p>
        ),
        categoryBgImg: "/cloudService/cloud-native.jpg",
        details: {
          name: "Cloud-Native Infrastructure Management",
          description:
            "Build smarter, not harder. We simplify Kubernetes, microservices, and CI/CD pipelines with automation-first platforms powered by GitOps, service mesh, observability, and DevSecOps. Accelerate releases, boost reliability, and empower teams to innovate without friction.",
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757502273/Cloud_-_Cloud_native_Infrastructure_Management_gsdkfv.mp4",
        },
      },
    ],
  },
};

// Cybersecurity Services
export const CybersecurityServices: servicesType = {
  title: "Cybersecurity Services",

  subtitle: "Building Digital Confidence with Next-Gen Protection",

  description:
    "Betopia Limited offers Cybersecurity Advisory & Managed Security Services that combine governance, resilience, and next-generation defense to keep your business secure while enabling innovation and growth. Backed by industry best practices and a proactive threat-hunting approach, we ensure you stay one step ahead of evolving cyber risks — turning security from a burden into a business advantage.",

  services: {
    title: "Uncompromising Security Solutions",
    subtitle:
      "Our solutions deliver end-to-end encryption, adaptive threat prevention, and scalable defenses designed for modern enterprises.",
    categories: [
      {
        categoryTitle: "Cyber Security",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Advisory </span>{" "}
            <span className="text-white"> & Consulting </span>{" "}
          </p>
        ),
        categoryBgImg: "/cyberSecurity/cyber.png",
        details: {
          name: "Cybersecurity Advisory & Consulting",
          description:
            "Shape your digital defense strategy with visionary, board-level guidance. We help you:",
          list: [
            "Identify risks and vulnerabilities",
            "Design adaptive security architectures",
            "Align with ISO 27001, NIST, GDPR, HIPAA, and SOX",
            "Build a ready-to-act incident response playbook",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503569/Cyber_Security_-_Cybersecurity_Advisory_consulting_g7kewk.mp4",
        },
      },
      {
        categoryTitle: "Managed",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Security </span>{" "}
            <span className="text-white"> Operations </span>{" "}
          </p>
        ),
        categoryBgImg: "/cyberSecurity/managed.png",
        details: {
          name: "Managed Security Operations",
          description:
            "Stay protected with 24/7 monitoring, threat detection, and response — without building your own SOC.  We provide:",
          list: [
            "SIEM tuning & alert noise reduction",
            "Vulnerability management",
            "Threat intelligence & forensics",
            "Transparent post-incident reporting",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503567/Cybersecurity_-_Managed_Security_Operations_pzqwde.mp4",
        },
      },

      {
        categoryTitle: "Enterprise Cyber",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Resilience </span>{" "}
            <span className="text-white"> & Governance </span>{" "}
          </p>
        ),
        categoryBgImg: "/cyberSecurity/resilience.png",
        details: {
          name: "Enterprise Cyber Resilience & Governance",
          description:
            "Result: Cyber resilience becomes your competitive advantage.",
          list: [
            "BCP/DR blueprints to keep RTO/RPO targets realistic",
            "Executive dashboards for real-time risk visibility",
            "Battle tested training",
            "Tabletop drills & resilience training",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503569/Cybersecurity_-_Enterprise_Cyber_Resilience_Governance_ybxncg.mp4",
        },
      },

      {
        categoryTitle: "Cyber",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Risk </span>{" "}
            <span className="text-white"> Management </span>{" "}
          </p>
        ),
        categoryBgImg: "/cyberSecurity/cyberRisk.png",
        details: {
          name: "Cyber Risk Management",
          description:
            "Transform cyber risk into actionable boardroom insight. Our team:",
          list: [
            "Builds living risk registers",
            "Runs scenario modeling & stress-tests controls",
            "Creates optimized treatment plans & cyber insurance strategies",
            "The result: Measurable risk reduction and predictable outcomes.",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503576/Cyber_Security_-_Cyber_Risk_Management_wg3mkb.mp4",
        },
      },
    ],
  },
};

// AI Services
export const AIServices: servicesType = {
  title: "AI Services",

  subtitle: "Empowering Enterprises with Intelligent, Scalable Solutions",

  description:
    "Betopia Limited offers AI-powered solutions & managed services, empowering businesses with tailored intelligent systems that transform data into action, drive innovation, and accelerate growth. Our engineers craft AI ecosystems that go beyond automation — building trust, governance, and responsibility into every solution. We help you create intelligent, adaptive systems that align with your vision and keep you ahead of the competition.",

  services: {
    title: "Uncompromising Security Solutions",
    subtitle:
      "From consulting to execution, our AI solutions are designed to be smart, secure, and scalable.",
    categories: [
      {
        categoryTitle: "Artificial Intelligence",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Consulting </span>{" "}
            <span className="text-white"> & Implementation </span>{" "}
          </p>
        ),
        categoryBgImg: "/aiServices/consulting.png",
        details: {
          name: "AI Consulting & Implementation",
          description:
            "We craft AI roadmaps that move beyond theory, turning ambition into measurable outcomes. Our experts:",
          list: [
            "Evaluate your existing ecosystem",
            "Select the right tools and technologies",
            "Build pilots that prove value early",
            "Deliver enterprise-grade scaling and integration",
            "Result: AI that naturally extends your business, empowers teams, and accelerates growth.",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503567/Cybersecurity_-_Managed_Security_Operations_pzqwde.mp4 ",
        },
      },
      {
        categoryTitle: "Enterprise",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Generative </span>{" "}
            <span className="text-white"> AI Solutions </span>{" "}
          </p>
        ),
        categoryBgImg: "/aiServices/generative.png",
        details: {
          name: "Enterprise Generative AI Solutions",
          description:
            "Enterprise-ready GenAI for content, code, and conversations — secure, governed, and reliable. We integrate LLMs with RAG, guardrails, and real-time evaluation, ensuring compliance while boosting productivity. No compliance worries — just safe, scalable GenAI to unlock creativity and business value.",
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503753/AI_-_Enterprise_Generative_AI_Solutions_fharlk.mp4",
        },
      },

      {
        categoryTitle: "Intelligent Business",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Process </span>{" "}
            <span className="text-white"> Automation </span>{" "}
          </p>
        ),
        categoryBgImg: "/aiServices/process.png",
        details: {
          name: "Intelligent Business Process Automation",
          description:
            "Go beyond simple automation — build automation that thinks. We combine:",
          list: [
            "AI + RPA",
            "Process mining & smart bots",
            "Intelligent document processing",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503753/AI_-_Intelligent_Business_Process_Automation_ezzfmf.mp4",
        },
      },

      {
        categoryTitle: "Advanced",
        categorySubtitle: (
          <p>
            {" "}
            <span className="text-primary"> Analytics </span>{" "}
            <span className="text-white"> & Data Intelligence </span>{" "}
          </p>
        ),
        categoryBgImg: "/aiServices/analytics.jpg",
        details: {
          name: "Advanced Analytics & Data Intelligence",
          description: "We turn scattered data into actionable intelligence:",
          list: [
            "Adaptive ML models",
            "Real-time data pipelines",
            "Automated dashboards",
          ],
          videoUrl:
            "https://res.cloudinary.com/dreiyzj42/video/upload/v1757503756/AI_-_Advanced_Analytics_Data_Intelligence_stggyo.mp4",
        },
      },
    ],
  },
};

// new contents

// ********** Cloud services ***********
const EnterpriseInfrastructureSolutionsData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Enterprise </span>{" "}
      <span className="text-primary"> Infrastructure Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
  details: {
    title: "Scalable and Secure",
    subtitle: "IT Solutions",
    description: [
      "Enterprise Infrastructure Solutions give your business a strong, secure, and flexible IT setup.",
      "We provide servers, storage, virtualization, and tools to manage containers, making it easy for your business to grow. Built-in backup, recovery, and monitoring keep your systems safe, while centralized infrastructure and virtual desktops let your team work securely from anywhere, save money, and stay productive.",
      "Our solutions grow with your business, keeping your IT reliable and supporting long-term success.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Enterprise",
      subtitle: "Server Solution",
      description:
        "A robust system of dedicated or clustered servers designed to support critical business applications, high availability, and large user loads. It ensures reliability, fault-tolerance, and scalable performance. Often includes hardware, OS, and management tools optimized for enterprise environments.",
      imgUrl: "/cloudService/enterprise1.png",
    },
    {
      title: "Enterprise",
      subtitle: "Storage Solution",
      description:
        "Centralized or distributed data storage infrastructure that safely stores, retrieves, and protects business-critical information. Provides high availability, redundancy, scalable capacity, and fast access. Usually includes SAN, NAS, or software-defined storage with backup/archival capabilities.",
      imgUrl: "/cloudService/enterprise2.png",
    },
    {
      title: "Server Operating",
      subtitle: "System (Windows/Linux) Solution",
      description:
        "An enterprise-grade OS platform that runs on servers, offering stability, scalability, security, and compatibility with applications. Could be Windows Server or various Linux distributions. Includes updates, patches, user and permission management, and supportive ecosystem tools.",
      imgUrl: "/cloudService/enterprise3.png",
    },
    {
      title: "Enterprise",
      subtitle: "Virtualization Solution",
      description:
        "Technology that abstracts physical hardware to run multiple virtual machines on fewer servers, increasing utilization and flexibility. Supports dynamic allocation of compute, storage, and networking resources. Enables consolidation, better resource control, and easier scaling.",
      imgUrl: "/cloudService/enterprise4.png",
    },
    {
      title: "Hyper",
      subtitle: "Converged Infrastructure Solution",
      description:
        "An integrated architecture combining compute, storage, networking and virtualization into a single system. Simplifies infrastructure deployment, management, and scaling. Reduces complexity and cost while improving agility and ease of maintenance.",
      imgUrl: "/cloudService/enterprise5.png",
    },
    {
      title: "Backup &",
      subtitle: "Recovery Solution",
      description:
        "A system for copying and storing data so that it can be restored after loss, corruption, or disaster. Offers regular, automated backups, versioning, off-site or cloud replication, and quick recovery options. Essential for business continuity and compliance.",
      imgUrl: "/cloudService/enterprise6.png",
    },
    {
      title: "Infrastructure",
      subtitle: "Monitoring Solution",
      description:
        "Tools and systems that continuously track the health, performance, and availability of IT infrastructure (servers, storage, network, applications). Detects bottlenecks, failures, or anomalies early. Provides dashboards, alerts, and reporting so that problems can be addressed before impacting operations.",
      imgUrl: "/cloudService/enterprise7.png",
    },
    {
      title: "IT Service",
      subtitle: "Management Solution",
      description:
        "Framework and tools that structure how IT services are designed, delivered, managed and improved. Often includes incident, problem, change, asset, and service request management. Helps align IT delivery with business needs, improve service quality and customer satisfaction.",
      imgUrl: "/cloudService/enterprise8.png",
    },
    {
      title: "Virtual Desktop",
      subtitle: "Infrastructure Solution",
      description:
        "Delivers desktop environments (OS, applications, settings) from centralized servers or datacenters over the network. Users can access their desktops from any device, anywhere, while data and apps stay secure and centrally managed. Enables remote work, reduces endpoint hardware costs, and simplifies updates.",
      imgUrl: "/cloudService/enterprise9.png",
    },
    {
      title: "Enterprise",
      subtitle: "Container Management Solution",
      description:
        "Platform for managing containerized applications at scale (e.g. Docker, Kubernetes). Handles container orchestration, deployment, scaling, load balancing, and lifecycle management. Enables microservices architectures, faster development cycles, and easier portability between environments.",
      imgUrl: "/cloudService/enterprise10.png",
    },
  ],
};

const EnterpriseNetworkingSolutionsData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Enterprise </span>{" "}
      <span className="text-primary"> Networking Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
  details: {
    title: "Secure, Scalable Enterprise ",
    subtitle: "Networking Solutions",
    description: [
      "Enterprise Networking Solutions deliver a robust, interconnected infrastructure that links offices, data centers, cloud environments, and user devices into a seamless, secure system.",
      "We design, deploy, and manage networks that connect your offices, data centers, cloud, and devices into a cohesive and secure fabric.",
      "With optimization, segmentation, and visibility built in, your network performs reliably today and scales with your future growth.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Enterprise",
      subtitle: "Switching & Routing Solution",
      description:
        "Robust layer-2 and layer-3 switching & routing infrastructure tailored for high throughput, reliability, and low latency. Enables seamless interconnection of branches, data centers, and cloud networks with redundancy and QoS. Ensures scalable path diversity, optimal routing, and minimal downtime. Supports modern protocols and SDN where needed.",
      imgUrl: "/cloudService/enterpriseNetwork1.png",
    },
    {
      title: "Enterprise",
      subtitle: "Firewall Solution (NGFW & WAF)",
      description:
        "A next-generation firewall adds modern threat detection (application awareness, IPS, malware intelligence, etc.) to traditional firewall controls. A WAF specializes in protecting web apps from attacks like SQL injection, XSS, and API abuse. Together they provide layered defense at both network and app levels.",
      imgUrl: "/cloudService/enterpriseNetwork2.png",
    },
    {
      title: "Application",
      subtitle: "Delivery Solution",
      description:
        "Delivers high performance, availability, and scaling of applications via load balancing, reverse proxies, caching, SSL offloading, and content optimization. Ensures application uptime, reduced latency, and improved end-user experience. Facilitates traffic distribution, smart routing, and resilience across multiple servers or sites.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },
    {
      title: "Application",
      subtitle: "Security Solution",
      description:
        "Focused on protecting applications from security vulnerabilities and threats from coding flaws to runtime attacks. Includes practices/tools such as secure coding, vulnerability scanning, runtime protection, application firewalls, and API security. Helps ensure confidentiality, integrity, and availability of application data.",
      imgUrl: "/cloudService/enterpriseNetwork4.png",
    },
    {
      title: "Network",
      subtitle: "Monitoring Solution",
      description:
        "Continuous visibility into the health, performance, and usage of network devices (switches, routers, firewalls), links, and services. Offers metrics such as latency, bandwidth, jitter, errors, and availability; provides alerts, dashboards, and reports. Helps detect anomalies early, ensure SLAs, and plan capacity or troubleshoot proactively.",
      imgUrl: "/cloudService/enterpriseNetwork5.png",
    },
    {
      title: "Network",
      subtitle: "Detection & Response Solution",
      description:
        "Advanced security layer focused on detecting anomalous or malicious behavior inside the network, then responding quickly to threats and breaches. Uses techniques like intrusion detection/prevention (IDS/IPS), anomaly detection, traffic analysis, and threat intelligence. Enables containment and remediation of threats before widespread impact.",
      imgUrl: "/cloudService/enterpriseNetwork6.png",
    },
    {
      title: "SD-WAN",
      subtitle: "Solution",
      description:
        "Software-Defined Wide Area Network solution that virtualizes WAN connections to improve performance, reduce cost, and increase flexibility. Dynamically routes traffic across multiple transport types (broadband, MPLS, LTE/5G) based on policy and real-time network conditions. Enhances application experience, agility, and provides centralized management.",
      imgUrl: "/cloudService/enterpriseNetwork7.png",
    },
    {
      title: "Secure Access",
      subtitle: "Service Edge (SASE) Solution",
      description:
        "An integrated cloud-native service that converges networking (e.g., SD-WAN) and security (zero-trust access, SWG, FWaaS, CASB, etc.) delivered from the edge. Ensures secure, low-latency access for users and devices regardless of location. Simplifies infrastructure, strengthens security posture, and supports hybrid and remote work models.",
      imgUrl: "/cloudService/enterpriseNetwork8.png",
    },
  ],
};

const CloudInfrastructureData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Cloud Infrastructure & </span>{" "}
      <span className="text-primary"> Networking Solution </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions",
  details: {
    title: "Adaptive, Secure, and Future",
    subtitle: "Proof Networking Foundations",
    description: [
      "We build networks that adapt to your business needs seamlessly connecting branches, data centers, cloud services, and users with high performance and zero compromise.",
      "Security is baked in from the ground up: segmentation, encryption, access control, and continuous threat detection protect your data and users at every layer. Detailed monitoring and intelligent analytics give you visibility and control across the full network fabric.",
      "As your organization expands, this networking framework scales with itmaintaining low latency, simplifying operations, and enabling rapid innovation.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Hybrid",
      subtitle: "Cloud Infrastructure Solution",
      description:
        "Blends on-premises and public cloud resources to create a unified, flexible infrastructure. Enables seamless workload mobility to balance cost, performance, and regulatory needs. Offers scalable resources, strong governance, and consistent management across environments.",
      imgUrl: "/cloudService/cloudInfrastructure1.png",
    },
    {
      title: "Cloud",
      subtitle: "Infrastructure & Database Solution",
      description:
        "Delivers cloud-native compute, storage, and networking paired with managed database services. Supports elastic scaling, high availability, automated backups, and disaster recovery. Reduces hardware overhead while making data more reliable and accessible.",
      imgUrl: "/cloudService/cloudInfrastructure2.png",
    },
    {
      title: "Enterprise",
      subtitle: "Application on Cloud",
      description:
        "Migrates or deploys mission-critical enterprise apps to cloud platforms for better agility and uptime. Enables continuous delivery, automatic scaling, and global accessibility with enterprise-grade security, compliance, and integration with other cloud services.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
    {
      title: "Cloud Virtual Desktop",
      subtitle: "Infrastructure Solution",
      description:
        "Delivers full desktop environments from the cloud so users can access workspaces from anywhere. Simplifies endpoint management with consistent security, patching, and policy enforcement. Reduces local hardware needs and improves collaboration for remote or hybrid teams.",
      imgUrl: "/cloudService/cloudInfrastructure4.png",
    },
    {
      title: "Cloud",
      subtitle: "Networking Solution",
      description:
        "Architects and manages cloud connectivity, routing, and security. Ensures low latency, high throughput, and reliable hybrid links between cloud and on-prem. Integrates VPNs, load balancers, and security controls; supports dynamic scaling and optimized traffic flow.",
      imgUrl: "/cloudService/cloudInfrastructure5.png",
    },
    {
      title: "Kubernetes",
      subtitle: "On Cloud",
      description:
        "Runs containerized applications on cloud-hosted Kubernetes clusters with auto-scaling, rolling updates, and robust orchestration. Abstracts infrastructure complexity to focus on shipping apps. Improves portability, resilience, and resource efficiency.",
      imgUrl: "/cloudService/cloudInfrastructure6.png",
    },
    {
      title: "DevOps",
      subtitle: "Principles and GitHub Solution",
      description:
        "Implements CI/CD, version control, automation, and monitoring using GitHub (repos, actions, code review, workflows). Orchestrates collaboration, quality, and delivery pipelines to enhance agility, reduce risk, and improve traceability.",
      imgUrl: "/cloudService/cloudInfrastructure7.png",
    },
    {
      title: "Container",
      subtitle: "Management Solution",
      description:
        "Platform for deploying, scaling, securing, and monitoring containers (Docker/OCI) across cloud or hybrid. Organizes images, orchestrates deployments, manages versions, and supports recovery from failures. Enables efficient, portable microservices architectures.",
      imgUrl: "/cloudService/cloudInfrastructure8.png",
    },
     {
      title: "Cloud",
      subtitle: "Management Services",
      description:
        "We provide AWS-based consulting and implementation services focused on cloud migration, DevOps automation, and managed infrastructure. We handle the heavy lifting of monitoring, scaling, and managing your cloud, so you can focus on business.",
      imgUrl: "/cloudService/cloudInfrastructure9.jpg",
    },
  ],
};

// ********** Cyber Security ***********
const CyberSecuritySolutionsData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Cyber Security </span>{" "}
      <span className="text-primary">Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions",
  details: {
    title: "Cyber Security",
    subtitle: "Solutions",
    description: [
      "We provide Cybersecurity Advisory & Managed Security Services, protecting businesses with tailored solutions. We safeguard critical systems and digital assets from evolving threats.",
      "Our services cover infrastructure, networks, applications, and data with real-time monitoring and threat response. We also manage vulnerabilities and simulate attacks to strengthen defenses.",
      "We secure emails, cloud services, and AI systems, ensuring compliance and business continuity. With our end-to-end approach, your organization stays safe and resilient.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Infrastructure Security",
      subtitle: "Solution (OS, Storage & Container)",
      description:
        "Secures core systems—OS, storage, and containers—via patching, encryption, access control, and runtime protection. Minimizes misconfigurations, data leaks, and unauthorized access to deliver consistent protection across infrastructure layers.",
      imgUrl: "/cloudService/cloudInfrastructure8.png",
    },
    {
      title: "Network",
      subtitle: "Security Solution",
      description:
        "Guards perimeters and internal segments with firewalls, IDS/IPS, segmentation, and secure access policies. Detects and blocks suspicious traffic and threats early, improving resilience against lateral movement and network-based exploits.",
      imgUrl: "/cloudService/cloudInfrastructure6.png",
    },
    {
      title: "Application Security",
      subtitle: "Solution (Web, Mobile & API)",
      description:
        "Secures apps across design, build, and runtime with code reviews, vulnerability scanning, secure APIs, mobile hardening, and runtime protections. Defends against injection, XSS, broken auth, and data leaks to ensure trusted user experiences.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
    {
      title: "Data Security",
      subtitle: "Solution (Endpoint, Network & Cloud)",
      description:
        "Protects data across devices, networks, and cloud using encryption, DLP, access controls, and monitoring. Ensures only authorized users/services access sensitive data, supporting compliance, breach prevention, and data integrity.",
      imgUrl: "/cloudService/cloudInfrastructure2.png",
    },
    {
      title: "Database",
      subtitle: "Security Solution",
      description:
        "Safeguards databases with strong access controls, encryption, real-time monitoring, audit logging, and vulnerability patching. Prevents anomalous queries, SQL injection, and data exfiltration to keep critical information protected and compliant.",
      imgUrl: "/cloudService/cloudInfrastructure1.png",
    },
    {
      title: "AI",
      subtitle: "Security Solution",
      description:
        "Secures AI systems, training data, and inference pipelines from model/data poisoning, prompt injection, adversarial attacks, and privacy leaks. Applies secure model training, validation, monitoring, and robust architecture design within regulations.",
      imgUrl: "/cloudService/cloudInfrastructure5.png",
    },
    {
      title: "Security Information Event Management",
      subtitle: "(SIEM) Solution",
      description:
        "Collects and correlates logs/events across IT in real time to detect incidents, anomalies, and policy violations. Provides dashboards, alerts, and compliance reporting to speed investigations and response.",
      imgUrl: "/cloudService/enterprise2.png",
    },
    {
      title: "Security Orchestration Automation & Response",
      subtitle: "(SOAR) Solution",
      description:
        "Automates SecOps workflows—alert triage, incident response, playbooks, and repetitive tasks—by orchestrating tools to reduce mean-time-to-respond and manual error while helping teams scale.",
      imgUrl: "/cloudService/enterprise3.png",
    },
    {
      title: "Extended Detection & Response",
      subtitle: "(XDR) Solution",
      description:
        "Unifies telemetry from endpoints, networks, cloud, email, and apps for correlated threat detection and response. Breaks down silos, reduces noise, and lets teams focus on real threats.",
      imgUrl: "/cloudService/cloudInfrastructure7.png",
    },
    {
      title: "Continuous Threat Exposure",
      subtitle: "Management Solution",
      description:
        "Continuously assesses vulnerabilities, exposures, and risks to keep posture current. Identifies weak points proactively and prioritizes remediation based on business risk.",
      imgUrl: "/cloudService/cloudInfrastructure8.png",
    },
    {
      title: "Breach & Attack Simulation",
      subtitle: "(BAS) Solution",
      description:
        "Continuously simulates real-world attacks (phishing, lateral movement, privilege escalation, etc.) to reveal gaps in policies, controls, and detection. Validates readiness without causing harm.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
    {
      title: "Attack Surface",
      subtitle: "Management Solution",
      description:
        "Discovers and monitors all digital assets and entry points to find exposures, misconfigurations, and vulnerabilities. Reduces attack surface by identifying weak spots early for prioritized remediation.",
      imgUrl: "/cloudService/enterprise2.png",
    },
    {
      title: "Digital Risk",
      subtitle: "Management Solution",
      description:
        "Identifies and mitigates risks from your digital footprint—reputation, third-party, data leakage, regulatory issues—using monitoring, intelligence, and policy enforcement.",
      imgUrl: "/cloudService/enterprise8.png",
    },
    {
      title: "Email",
      subtitle: "Security Solution",
      description:
        "Protects email channels from phishing, spam, malware, spoofing, and targeted attacks via content/attachment/link scanning, threat intel, and authentication (SPF, DKIM, DMARC) with user awareness.",
      imgUrl: "/cloudService/enterprise8.png",
    },
  ],
};

const CyberServicesData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Cyber Security </span>{" "}
      <span className="text-primary">Services </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions",
  details: {
    title: "Holistic Cyber Security ",
    subtitle: "Services",
    description: [
      "We provide expert Cybersecurity Advisory & Managed Security Services, customizing defenses to protect what matters most.",
      "Our approach includes continuous monitoring, threat detection & response, vulnerability management, and attack simulations to proactively strengthen your defenses. We also ensure email, cloud services, and AI systems are protected and compliant, reducing risk across all surfaces.",
      "With an end-to-end mindset, we build resilient security frameworks that support business continuity, regulatory compliance, and long-term growth. Your organization stays secure, agile, and ready to face whatever’s next.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Vulnerability Assessment",
      subtitle: "Network, Web, Mobile & API",
      description:
        "Systematically scans and evaluates potential weaknesses in your network, web apps, mobile apps, and APIs. Identifies misconfigurations, outdated software, weak cryptography, exposed endpoints, and risky access paths. Rates risks and gives prioritized remediation steps before attackers exploit vulnerabilities.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },

    {
      title: "Penetration Testing",
      subtitle: "Network, Web, Mobile & API",
      description:
        "Simulates real-world attacks to validate the effectiveness of your controls across network, web, mobile, and APIs. Includes manual exploitation, chaining of findings, and proof-of-exploitation with replay steps. Provides risk-based findings and remediation guidance while verifying that fixes work.",
      imgUrl: "/cloudService/cloudInfrastructure1.png",
    },
    {
      title: "SOC",
      subtitle: "As a Service",
      description:
        "A fully managed Security Operations Center delivered as-a-service—24×7 monitoring, detection, incident response, threat hunting, and reporting. Includes SIEM/XDR integration and experienced analysts, without the overhead of building your own SOC.",
      imgUrl: "/cloudService/enterprise5.png",
    },
    {
      title: "Active Directory",
      subtitle: "Security Assessment",
      description:
        "Evaluates your Active Directory for privilege risks, misconfigurations, and attack paths (e.g., weak policies, Kerberos/NTLM issues, stale objects, excessive rights). Delivers hardening recommendations for authentication, delegation, GPOs, and identity management.",
      imgUrl: "/cloudService/enterprise2.png",
    },
    {
      title: "Enterprise SOC",
      subtitle: "Implementation Service",
      description:
        "Designs and builds enterprise SOC capabilities—use cases, processes, and SLAs—plus technology stack (SIEM, SOAR, EDR/XDR), integrations, runbooks, and metrics. Includes onboarding procedures, detection engineering, and readiness validation.",
      imgUrl: "/cloudService/enterprise3.png",
    },
    {
      title: "Enterprise SOC",
      subtitle: "Monitoring Service",
      description:
        "Provides ongoing 24×7 monitoring of security logs, endpoints, and cloud workloads. Handles alert triage, investigation, and guided response with regular reports and continuous tuning. Adds threat hunting and MITRE-mapped detections to reduce time to detect and respond.",
      imgUrl: "/cloudService/cloudInfrastructure7.png",
    },
  ],
};

// ********** AI Solutions ***********
const DigitalInnovationData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Digital & APP </span>{" "}
      <span className="text-primary">Innovation Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
  details: {
    title: "Digital & App Innovation",
    subtitle: "Solutions",
    description: [
      "We transform ideas into seamless digital experiences with intuitive design and cutting-edge technology. Our web and mobile apps are fast, secure, and scalable to grow with your business.",
      "From concept to launch, we focus on smooth integration, optimized performance, and user-centric functionality.",
      "Built for adaptability, our solutions empower businesses to innovate faster, engage smarter, and stay ahead in the digital landscape.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Intelligent ",
      subtitle: "Automation",
      description:
        "Combines AI, machine learning, and robotic process automation (RPA) to automate complex workflows and decision-making processes. Enhances operational efficiency, reduces human error, and enables continuous improvement. Ideal for streamlining repetitive tasks and optimizing business operations.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },

    {
      title: "Low-Code ",
      subtitle: "Application Development",
      description:
        "Utilizes visual interfaces and pre-built components to create applications with minimal hand-coding. Empowers both developers and business users to rapidly build and deploy apps, accelerating digital transformation. Reduces development time and democratizes app creation across organizations.",
      imgUrl: "/cloudService/enterpriseNetwork6.png",
    },
    {
      title: "Migrate Enterprise ",
      subtitle: "Applications to Cloud",
      description:
        "Involves transferring enterprise applications from on-premises infrastructure to cloud environments. Enhances scalability, flexibility, and cost-efficiency while ensuring high availability and security. Supports modernization efforts and aligns with digital transformation strategies.",
      imgUrl: "/cloudService/enterprise5.png",
    },
  ],
};

const DataSolutionsData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white"> Data Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
  details: {
    title: "Data Solutions",
    subtitle: "",
    description: [
      "Our Data Solutions help businesses unlock the true potential of their data. We provide end-to-end services including data collection, integration, management, and analytics, enabling informed decision-making and actionable insights.",
      "Leveraging advanced technologies and smart data architectures, we ensure your data is accurate, secure, and easily accessible. From real-time dashboards to predictive analytics, our solutions turn raw data into strategic value.",
      "Designed to scale with your organization, our Data Solutions empower you to optimize operations, anticipate trends, and drive growth in a data-driven world.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Database ",
      subtitle: "Platform Solution",
      description:
        "A comprehensive system designed to efficiently store, manage, and retrieve data, encompassing both structured and unstructured formats. It includes a Database Management System (DBMS), infrastructure, and tools for organizing data, ensuring scalability and performance.",
      imgUrl: "/cloudService/enterpriseNetwork5.png",
    },

    {
      title: "Business  ",
      subtitle: "Intelligence Solution",
      description:
        "A technology-driven process that analyzes business data and transforms it into actionable insights, aiding executives and managers in making informed decisions. It involves gathering, analyzing, and interpreting data from internal and external sources.",
      imgUrl: "/cloudService/enterpriseNetwork5.png",
    },
    {
      title: "Data",
      subtitle: "Analytics Solution",
      description:
        "Utilizes tools and processes to examine datasets, identifying patterns and developing actionable insights. The goal is to answer specific questions, discover new insights, and support better decision-making.",
      imgUrl: "/cloudService/enterprise5.png",
    },
    {
      title: "Data ",
      subtitle: "Warehouse Solution",
      description:
        "A centralized repository designed to store structured and semi-structured data from multiple sources, facilitating analysis and reporting. It supports business intelligence activities by providing a consolidated view of data over time.",
      imgUrl: "/cloudService/enterprise3.png",
    },
  ],
};

const AISolutionsData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white">AI Solutions </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited offers AI-Powered Solutions & Managed Services, empowering businesses with tailored intelligent systems",
  details: {
    title: "Scalable and Secure",
    subtitle: "IT Solutions",
    description: [
      "Our AI Solutions help businesses leverage artificial intelligence to boost innovation and efficiency. We provide end-to-end services machine learning, predictive analytics, NLP, and intelligent automation—turning complex data into actionable insights.",
      "By integrating AI seamlessly into your operations, we optimize processes, enhance decision-making, and improve customer experiences. Our solutions are secure, scalable, and designed to evolve with your business needs.",
      "Built for growth and adaptability, our AI Solutions empower organizations to innovate faster, anticipate trends, and gain a competitive edge in the rapidly evolving digital landscape.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Designing and Developing  ",
      subtitle: "AI Solutions",
      description:
        "Involves creating tailored AI models and systems to address specific business challenges. This process includes data collection, algorithm selection, model training, and deployment. The goal is to integrate AI seamlessly into business operations to enhance efficiency and decision-making.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },

    {
      title: "Implementing  ",
      subtitle: "AI Services",
      description:
        "Utilizes visual interfaces and pre-built components to create applications with minimal hand-coding. Empowers both developers and business users to rapidly build and deploy apps, accelerating digital transformation. Reduces development time and democratizes app creation across organizations.",
      imgUrl: "/cloudService/enterpriseNetwork2.png",
    },
    {
      title: "Microsoft Copilot ",
      subtitle: "AI Solution",
      description:
        "An AI-powered assistant integrated into Microsoft 365 applications like Word, Excel, and Outlook. Copilot helps users by generating content, analyzing data, and automating tasks, thereby enhancing productivity and collaboration. It offers features like Researcher, Analyst, and Actions, with advanced security measures.",
      imgUrl: "/cloudService/enterpriseNetwork1.png",
    },
  ],
};

// ********** Endpoint ***********
const EndpointManagementData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white">
        {" "}
        Endpoint Management & Security Solutions{" "}
      </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited delivers customized Endpoint, Identity, and Productivity solutions, ensuring seamless security and operational efficiency.",
  details: {
    title: "Secure Every Device. Support every user.",
    subtitle: "Simplify your IT.",
    description: [
      "We help businesses manage and protect all their devices laptops, desktops, and mobile phones across Windows and Linux platforms. Whether your team is in the office or working remotely, our solutions keep everything running smoothly and securely.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "End User Devices",
      subtitle: "(Laptop / Desktop / Mobile)",
      description:
        "Empower teams with secure, high-performance laptops, desktops, and mobile devices optimized for productivity anywhere. Simplifies setup, enhances security, and streamlines lifecycle management so your workforce stays connected—at the office or on the move.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },
    {
      title: "Device Operating Systems",
      subtitle: "(Windows / Linux)",
      description:
        "Deploy secure, customizable Windows or Linux builds tailored to your workflow and scale. Ensures seamless integration, reliable performance, centralized management, and confident updates/patching for enterprise productivity and growth.",
      imgUrl: "/cloudService/cloudInfrastructure1.png",
    },
    {
      title: "Endpoint",
      subtitle: "Management (UEM) Solution",
      description:
        "Unify management of laptops, desktops, mobiles, and IoT from one platform across Windows, macOS, Linux, Android, and iOS. Zero-touch provisioning, patching, policy enforcement, real-time monitoring, and analytics keep devices agile, compliant, and under control.",
      imgUrl: "/cloudService/enterprise3.png",
    },
    {
      title: "Mobile Device Management",
      subtitle: "(MDM) Solution",
      description:
        "Centrally configure and secure smartphones, tablets, and laptops—company-owned or BYOD. Enforce device policies, encrypt data, manage apps, and gain real-time visibility so users stay productive and protected anywhere.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
    {
      title: "Patch Management",
      subtitle: "Solution",
      description:
        "Identify, test, and deploy OS and third-party app updates across Windows, Linux, and macOS at scale. Get real-time visibility, compliance control, and safe rollbacks to reduce risk and maintain business continuity.",
      imgUrl: "/cloudService/enterpriseNetwork6.png",
    },
    {
      title: "Endpoint Protection Platform",
      subtitle: "(EPP) Solution",
      description:
        "Protect endpoints from malware, ransomware, and advanced threats with next-gen antivirus, firewall, and behavioral analytics—delivered via cloud management. Gain proactive defense, scalability, and smooth user experience.",
      imgUrl: "/cloudService/enterprise3.png",
    },
    {
      title: "Endpoint Detection & Response",
      subtitle: "(EDR) Solution",
      description:
        "Continuously monitor, detect, and contain suspicious activity in real time. AI-driven analytics and automated response shrink dwell time and transform security from reactive to proactive—resilient against ransomware and emerging threats.",
      imgUrl: "/cloudService/cloudInfrastructure5.png",
    },
    {
      title: "Application",
      subtitle: "Control Solution",
      description:
        "Allow only trusted applications to run while blocking unknown or risky software. Enforce granular policy controls, real-time monitoring, and cross-platform support to reduce malware risk and maintain endpoint productivity.",
      imgUrl: "/cloudService/enterprise8.png",
    },
    {
      title: "IT Helpdesk",
      subtitle: "Solution",
      description:
        "Deliver fast, reliable, and personalized IT support. Automate ticketing, track issues in real time, and manage requests across channels with integrated analytics—boosting productivity and reducing downtime.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },
    {
      title: "Device Compliance & Policy",
      subtitle: "Enforcement Solution",
      description:
        "Ensure devices meet security baselines with posture checks, encryption, conditional access, and continuous auditing. Remediate drift automatically and prove compliance with clear reports and evidence.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
  ],
};

const IdentityManagementData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white">
        {" "}
        Identity Management & Security Solutions{" "}
      </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited delivers customized Endpoint, Identity, and Productivity solutions, ensuring seamless security and operational efficiency.",
  details: {
    title: "Secure. Simplify. Scale.",
    subtitle: "",
    description: [
      "In today’s digital-first world, identity is the new perimeter. Our Identity Management & Security Solutions provide a unified framework to protect, govern, and enable digital identities across your enterprise—on-premises, cloud, and hybrid environments. ",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Central",
      subtitle: "Authentication Solution",
      description:
        "Unify and secure user access with our Central Authentication Solution powered by Active Directory. Enable single sign-on across desktops, apps, and networks reducing password fatigue and boosting productivity. Simplify management, enforce policies, and ensure compliance across on-premises and hybrid environments.",
      imgUrl: "/cloudService/cloudInfrastructure1.png",
    },
    {
      title: "Hybrid",
      subtitle: "Authentication Solution",
      description:
        "Secure your enterprise with our Hybrid Authentication Solution—bridging on-premises and cloud identities seamlessly. Integrate Active Directory with Microsoft Entra ID to enable unified Single Sign-On across legacy systems and cloud apps. With MFA, Kerberos, SAML, and OAuth support, strengthen security, simplify access, and move confidently toward Zero Trust.",
      imgUrl: "/cloudService/cloudInfrastructure2.png",
    },
    {
      title: "Password & Secret",
      subtitle: "Management Solution",
      description:
        "Keep your systems secure and your credentials protected with our Password & Secret Management Solution. Securely store, rotate, and control passwords, API keys, tokens, and certificates across your infrastructure. With RBAC, audit logging, and automatic secret rotation, reduce risk, eliminate secret sprawl, and ensure compliance.",
      imgUrl: "/cloudService/cloudInfrastructure3.png",
    },
    {
      title: "Multifactor",
      subtitle: "Authentication (MFA) Solution",
      description:
        "Protect your users and data with our Multifactor Authentication (MFA) Solution—adding security beyond passwords. Combine passcodes, devices, and biometrics to verify identities confidently across systems. With SAML, OAuth, and FIDO2 support, seamless integration, and adaptive policies, block threats while keeping access effortless.",
      imgUrl: "/cloudService/cloudInfrastructure4.png",
    },
    {
      title: "Access Management",
      subtitle: "and Single Sign-On (SSO) Solution",
      description:
        "Empower users with seamless, secure access through our Access Management & Single Sign-On (SSO) Solution. Authenticate once to access multiple apps across cloud and on-prem environments with SAML, OAuth, and OpenID Connect. Gain centralized control, enforce RBAC and MFA, and enhance security, compliance, and user experience—all in one platform.",
      imgUrl: "/cloudService/cloudInfrastructure5.png",
    },
    {
      title: "Privileged Access",
      subtitle: "Management Solution",
      description:
        "Secure your most sensitive systems with our Privileged Access Management (PAM) Solution. Control and monitor elevated access to servers, databases, and admin consoles with just-in-time privileges and least-privilege enforcement. With credential vaulting, session recording, and real-time alerts, gain visibility, meet compliance, and prevent insider threats.",
      imgUrl: "/cloudService/cloudInfrastructure6.png",
    },
    {
      title: "Identity",
      subtitle: "Governance Solution",
      description:
        "Ensure the right people have the right access at the right time with our Identity Governance Solution. Automate identity lifecycle management from onboarding to offboarding across cloud and on-prem systems. With access reviews, RBAC, and audit trails, gain full visibility, enforce compliance, and govern identities with confidence.",
      imgUrl: "/cloudService/cloudInfrastructure7.png",
    },
    {
      title: "Active Directory Threat",
      subtitle: "Detection & Response Solution",
      description:
        "Protect your critical identity infrastructure with our Active Directory Threat Detection & Response Solution. Continuously monitor on-prem, cloud, and hybrid AD for threats like DCShadow, Golden Ticket, and lateral movement. With real-time alerts, forensic insights, and automated rollback, detect faster, respond smarter, and stay resilient.",
      imgUrl: "/cloudService/cloudInfrastructure8.png",
    },
    {
      title: "Identity Threat",
      subtitle: "Detection & Response Solution",
      description:
        "Protect your most targeted assets—user identities—with our Identity Threat Detection & Response (ITDR) Solution. Continuously monitor Active Directory, Entra ID, and cloud apps for anomalies, privilege misuse, and lateral movement. With AI-driven analytics, real-time alerts, and automated response, stop identity-based threats and keep your environment secure and compliant.",
      imgUrl: "/cloudService/enterpriseNetwork1.png",
    },
    {
      title: "Identity",
      subtitle: "Resilience Platform Solution",
      description:
        "Strengthen your identity backbone with our Identity Resilience Platform Solution. Gain end-to-end protection, visibility, and recovery for Active Directory and Entra ID across on-prem, cloud, and hybrid environments. With automated remediation, secure backups, and rapid recovery, stay resilient, compliant, and operational no matter what.",
      imgUrl: "/cloudService/enterpriseNetwork2.png",
    },
    {
      title: "Active Directory",
      subtitle: "Auditing & Reporting Solution",
      description:
        "Gain complete visibility into your identity systems with our Active Directory Auditing & Reporting Solution. Track logons, permission changes, and account activity across AD and Entra ID with real-time alerts and detailed reports. Integrate with SIEM platforms to get 5W audit insights—who did what, when, where, and why—for stronger security and compliance.",
      imgUrl: "/cloudService/enterpriseNetwork6.png",
    },
    {
      title: "Enterprise Public",
      subtitle: "Key Infrastructure Solution",
      description:
        "Secure your enterprise with our Public Key Infrastructure (PKI) Solution built to authenticate users, devices, and applications. Deploy a scalable Certificate Authority (CA) for secure S/MIME, VPN, code signing, and device access. With centralized management, lifecycle automation, and compliance enforcement, ensure trust, integrity, and compliance at scale.",
      imgUrl: "/cloudService/enterpriseNetwork5.png",
    },
    {
      title: "Certificate Lifecycle",
      subtitle: "Management Solution",
      description:
        "Simplify and secure certificate operations with our Certificate Lifecycle Management Solution. Automatically discover, issue, renew, and revoke certificates across SSL/TLS, code signing, and device authentication. With centralized visibility, automation, and crypto agility, prevent outages, stay compliant, and ensure digital trust never expires.",
      imgUrl: "/cloudService/enterpriseNetwork3.png",
    },
  ],
};

const SecureBusinessData = {
  videoSrc:
    "https://res.cloudinary.com/dreiyzj42/video/upload/v1757504188/cybersecurity_AI_page_omnfi9.mp4",
  title: (
    <p>
      {" "}
      <span className="text-white">
        {" "}
        Secure Business Productivity Solutions{" "}
      </span>{" "}
    </p>
  ),
  description:
    "Betopia Limited delivers customized Endpoint, Identity, and Productivity solutions, ensuring seamless security and operational efficiency.",
  details: {
    title: "Secure Business",
    subtitle: "Productivity Solutions",
    description: [
      "Empower your workforce with tools that balance performance, collaboration, and protection. Enable seamless communication through secure email, messaging, and conferencing platforms. Collaborate in real time with document sharing, co-authoring, and version control—without compromising data integrity. Protect sensitive information with encryption, access controls, and compliance-ready policies. Monitor productivity ethically with insights into workflows, engagement, and resource usage. Archive communications securely for legal, regulatory, and operational continuity. Ensure business continuity across cloud, hybrid, and offline environments. Scalable, flexible, and built for modern teams—remote, hybrid, or on-site.",
    ],
    imgUrl: "/cloudService/enterprise.png",
  },

  highlyEffectiveData: [
    {
      title: "Business",
      subtitle: "Productivity Apps Suite",
      description:
        "Empower your team with a comprehensive suite of productivity tools that enhance collaboration, communication, and efficiency. These applications integrate seamlessly to streamline workflows, manage tasks, and facilitate real-time collaboration. Whether it’s document editing, project management, or communication, this suite has you covered.",
      imgUrl: "/endpoint/endpoint1.png",
    },
    {
      title: "Enterprise",
      subtitle: "Email Solution",
      description:
        "Implement a robust email system designed for businesses, offering secure, scalable, and reliable communication. Features include custom domain support, advanced spam filtering, and seamless integration with other enterprise applications. This solution ensures efficient and professional communication across your organization.",
      imgUrl: "/endpoint/endpoint2.png",
    },
    {
      title: "Enterprise",
      subtitle: "Communication Solution",
      description:
        "Enhance internal and external communication with a unified platform that supports voice, video, and messaging. This solution promotes collaboration, reduces communication silos, and supports remote work environments. Integration with existing business tools ensures a cohesive communication experience.",
      imgUrl: "/endpoint/endpoint3.png",
    },
    {
      title: "Enterprise",
      subtitle: "Document Collaboration Solution",
      description:
        "Facilitate real-time collaboration on documents, spreadsheets, and presentations with a secure cloud-based platform. Features include version control, commenting, and simultaneous editing, ensuring teams can work together efficiently regardless of location. This solution enhances productivity and document accuracy.",
      imgUrl: "/endpoint/endpoint4.png",
    },
    {
      title: "Email",
      subtitle: "Security Solution",
      description:
        "Protect your organization from email-based threats such as phishing, malware, and spam with advanced security measures. This solution includes real-time threat detection, encryption, and secure email gateways to safeguard sensitive information. Regular updates ensure protection against evolving threats.",
      imgUrl: "/endpoint/endpoint5.png",
    },
    {
      title: "Email",
      subtitle: "Archiving Solution",
      description:
        "Implement a secure and compliant email archiving system that captures, stores, and retrieves emails. Features include unlimited retention, advanced search capabilities, and integration with existing email platforms. This solution supports regulatory compliance and data governance.",
      imgUrl: "/endpoint/endpoint6.png",
    },
    {
      title: "Information",
      subtitle: "Protection Solution",
      description:
        "Safeguard sensitive data across your organization with tools that classify, label, and encrypt information. This solution helps prevent data leaks, ensures compliance with regulations, and provides visibility into data usage. Integration with existing systems streamlines protection efforts.",
      imgUrl: "/endpoint/endpoint7.png",
    },
    {
      title: "User Productivity",
      subtitle: "Monitoring Solution",
      description:
        "Gain insights into employee productivity with tools that track application usage, website visits, and work patterns. This solution helps identify areas for improvement, supports performance management, and ensures efficient resource utilization. Data privacy considerations are integral to this solution.",
      imgUrl: "/endpoint/endpoint8.png",
    },
  ],
};


// ********** FAQ ************** 

const serviceFAQ = [
  {
    key: "1",
    question: "What industries or business sizes do you serve?",
    answer:
      "We support businesses ranging from mid-sized enterprises to large corporations across industries such as finance, healthcare, manufacturing, retail, education, and government. Our solutions are scalable and tailored to your specific needs.",
  },
  {
    key: "2",
    question: "How long does implementation typically take?",
    answer:
      "Implementation time depends on the project’s scope and complexity. Most deployments are completed within a few weeks to a few months, following structured phases of assessment, configuration, testing, and training.",
  },
  {
    key: "3",
    question: " Is your solution compatible with existing systems and infrastructure?",
    answer:
      "Yes. Our solutions are designed for seamless integration with your existing IT environment, including legacy systems, cloud platforms, and third-party tools — ensuring minimal disruption and maximum interoperability.",
  },
  {
    key: "4",
    question: "What levels of support and maintenance do you provide?",
    answer:
      "We offer comprehensive support plans, including 24/7 monitoring, proactive maintenance, regular updates, and dedicated technical assistance. Our team ensures optimal performance, security, and reliability throughout the product lifecycle.",
  },
  {
    key: "5",
    question: " Is your solution compatible with existing systems and infrastructure?",
    answer:
      "Yes, our solution is designed with flexibility in mind. It integrates seamlessly with a wide range of existing systems, including legacy applications, cloud platforms, and third-party tools, minimizing disruption to your current operations. We also provide guidance and support during the integration process to ensure smooth deployment and maximum compatibility.",
  },
  {
    key: "6",
    question: "What levels of support and maintenance do you provide?",
    answer:
      "We offer comprehensive support and maintenance options to meet varying needs: Standard Support, Premium Support, Maintenance Services.",
  }, 
]

export {
  EnterpriseInfrastructureSolutionsData,
  EnterpriseNetworkingSolutionsData,
  CloudInfrastructureData,
  CyberSecuritySolutionsData,
  CyberServicesData,
  DigitalInnovationData,
  DataSolutionsData,
  AISolutionsData,
  EndpointManagementData,
  IdentityManagementData,
  SecureBusinessData, 
  serviceFAQ
};
