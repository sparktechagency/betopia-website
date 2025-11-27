
export interface ProductType {
  id: string;
  name: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  btnLink: string;
}
export const mainProducts: ProductType[] = [
  {
    id: "HRM",
    name: "Betopia HRM",
    title: "Staff Pulse – HRM Software",
    description: "Smart HR management system for modern organizations.",
    points: [
      "Automated attendance & payroll tracking",
      "Performance evaluation & KPI dashboard",
      "Employee data management with cloud access",
    ],
    image: "/productDetails/ecosystem/eco-6.png",
    btnLink: "/products?product=HRM",
  },
  // {
  //   id: "POS",
  //   name: "Betopia POS Machine",
  //   title: "Betopia POS Machine",
  //   description: "Seamless point-of-sale solution for retail and hospitality businesses.",
  //   points: [
  //     "Fast billing & digital invoice generation",
  //     "Real-time inventory tracking",
  //     "Multi-branch sales analytics",
  //   ],
  //   image: "/productDetails/ecosystem/eco-2.png",
  //   btnLink: "/products?product=POS",
  // },
    {
    id: "ERP",
    name: "Betopia ERP",
    title: "Betopia ERP",
    description: "All-in-one enterprise resource planning platform for efficiency and growth.",
    points: [
      "Integrated modules for HR, Sales, and Accounting",
      "Real-time reporting & analytics",
      "Cloud-based and customizable for any industry",
    ],
    image: "/productDetails/ecosystem/eco-3.png",
    btnLink: "/products?product=ERP",
  },
      {
    id: "PartnerProgram",
    name: "Betopia Partner Program",
    title: "Betopia Partner Program",
    description: "Grow your network with an intelligent partner management system.",
    points: [
      "Easy partner onboarding & approval process",
      "Automated communication & lead sharing",
      "Real-time partner performance tracking",
    ],
    image: "/productDetails/ecosystem/eco-4.jpg",
    btnLink: "/products?product=partnerProgram",
  },
      {
    id: "VotingSystem",
    name: "Betopia Voting App",
    title: "Betopia Voting App",
    description: "Secure and transparent digital voting solution for organizations and communities.",
    points: [
      "Verified voter authentication",
      "Custom election setup & branding",
      "Real-time result dashboard",
    ],
    image: "/productDetails/ecosystem/eco-5.png",
    btnLink: "/products?product=votingSystem",
  },
      {
    id: "AgenticAI",
    name: "Betopia Agentic AI",
    title: "Betopia Agentic AI",
    description: "AI-powered agent that automates sales, negotiation, and customer engagement.",
    points: [
      "Lead generation & qualification",
      "Price negotiation & deal closing",
      "24/7 autonomous customer communication",
    ],
    image: "/productDetails/ecosystem/eco-6.png",
    btnLink: "/products?product=agenticAI",
  },

];

export const featuresData = [
  {
    img: "/productDetails/ecosystem/feature-1.png", 
    title: "Automation",
    description: "Simplify workflows through smart automation",
  },
  {
    img: "/productDetails/ecosystem/feature-2.png", 
    title: "Efficiency",
    description: "Boost productivity across every department",
  },
  {
    img: "/productDetails/ecosystem/feature-3.png", 
    title: "Intelligence",
    description: "Drive smarter decisions with AI-driven insights",
  },
];
export const platforms = [
  {
    name: "HRM",
    img: "/productDetails/ecosystem/platform-1.png", 
    link:"/products?product=HRM"
  },
  // {
  //   name: "POS",
  //   img: "/productDetails/ecosystem/platform-2.png",
  //   link:"/products?product=POS"
  // },
  {
    name: "ERP",
    img: "/productDetails/ecosystem/platform-3.png",
    link:"/products?product=ERP"
  },
    {
    name: "Partner Program",
    img: "/productDetails/ecosystem/platform-4.png",
     link:"/products?product=partnerProgram" 
  },
    {
    name: "Voting App",
    img: "/productDetails/ecosystem/platform-5.png", 
    link:"/products?product=votingSystem"
  },
  {
    name: "Agentic AI",
    img: "/productDetails/ecosystem/platform-6.png",
    link:"/products?product=agenticAI"
  },
];
