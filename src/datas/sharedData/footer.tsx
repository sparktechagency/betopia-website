import { SocialLink } from "@/types"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuLandmark } from "react-icons/lu";


export const socialLinks: SocialLink[] = [
  { icon: <FaFacebookF color="#fff" size={20} />, url: "https://www.facebook.com/BetopiaLimited", bgColor: "#424242" },
  // { icon: <FaInstagram size={20} />, url: "https://instagram.com", bgColor: "#424242" },
  // { icon: <FaGithub size={20} />, url: "https://github.com", bgColor: "#424242" },
  { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/company/betopia-limited", bgColor: "#424242" },
  // { icon: <GrReddit size={20} />, url: "https://linkedin.com", bgColor: "#424242" },
  // { icon: <FaXTwitter size={20} />, url: "https://linkedin.com", bgColor: "#424242" },
];


export const services = [
  "Enterprise Cloud Management",
  "Hybrid/Multi-Cloud Platform Management",
  "Cloud Security, Compliance & Governance",
  "Cloud-Native Infrastructure Management",
  "Cybersecurity Advisory & Consulting",
  "Managed Security Operations",
  "Enterprise Cyber Resilience & Governance",
  "Cyber Risk Management",
];
export const anotherServices = [
  "AI Consulting & Implementation",
  "Enterprise Generative AI Solutions",
  "Intelligent Business Process Automation",
  "Advanced Analytics & Data Intelligence",
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
  { label: "Team Augmentation", href: "/team-augmentation" },
];

export const reviews = [
  { label: "Clutch", href: "#" },
  { label: "Good Firms", href: "#" },
  { label: "Design Rush", href: "#" },
  { label: "Trust Pilot", href: "#" },
  { label: "Partnerstack", href: "#" },
];

export const officeData = [
  {
    imgUrl: "/dhaka2.jpg",
    icon: <LuLandmark size={130} className="text-[#424242]/30" /> ,
    title: "Corporate Office",
    city: "Dhaka",
    address: "Daisy Garden, House 14, Block A, Banasree",
    phone: "+8801321231828",
  },
  {
    imgUrl: "/philipines.jpg",
     icon: <LuLandmark size={130} className="text-[#424242]/30" /> ,
    title: "Philippines Office",
    city: "Philippines",
    address: "Daisy Garden, House 14, Block A, Banasree",
    phone: "+8801321231828",
  },
  {
    imgUrl: "/usa.jpg", 
     icon: <LuLandmark size={130} className="text-[#424242]/30" /> ,
    title: "USA Office",
    city: "USA",
    address: "Daisy Garden, House 14, Block A, Banasree",
    phone: "+8801321231828",
  },
  {
    imgUrl: "/dhaka1.jpg",
     icon: <LuLandmark size={130} className="text-[#424242]/30" /> ,
    title: " Branch Office",
    city: "Dhaka",
    address: "Daisy Garden, House 14, Block A, Banasree",
    phone: "+8801321231828",
  },
];
