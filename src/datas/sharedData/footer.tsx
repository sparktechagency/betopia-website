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
    imgUrl: "/dhaka2.png",
    imgWidth: 180,
    imgHeight: 140,
    title: "Corporate Office",
    city: "Dhaka",
    address: "Daisy Garden, House 14, Block A, Banasree",
    phone: "+8801321231828",
  },
  {
    imgUrl: "/philipines.png",
    imgWidth: 100,
    imgHeight: 90,
    title: "Philippines Office",
    city: "Philippines",
    address: "Angeles, Philippines",
    phone: "+1 (312) 877-3570 (WA)",
  },
  {
    imgUrl: "/usa.png",
    imgWidth: 50,
    imgHeight: 50,
    title: "USA Office",
    city: "USA",
    address: "3651 Peachtree Pkwy STE. E #116, Suwanee, GA 30024, United States of America",
    phone: "+1 (404) 936-3567",
  },
  {
    imgUrl: "/dhaka1.png",
    imgWidth: 110,
    imgHeight: 100,
    title: "Branch Office",
    city: "Dhaka",
    address: "C/A, Ak Khandaker Road Kaderia Tower J-28/8-B, Mohakhali, Dhaka 1213",
    phone: "+8801332840871",
  },
];
