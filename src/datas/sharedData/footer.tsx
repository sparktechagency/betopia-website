import { SocialLink } from "@/types"
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
  { icon: <FaFacebookF color="#fff" size={20} />, url: "https://facebook.com", bgColor: "#424242" },
  { icon: <FaInstagram size={20} />, url: "https://instagram.com", bgColor: "#424242" },
  { icon: <FaGithub size={20} />, url: "https://github.com", bgColor: "#424242" },
  { icon: <FaLinkedinIn size={20} />, url: "https://linkedin.com", bgColor: "#424242" },
  { icon: <GrReddit size={20} />, url: "https://linkedin.com", bgColor: "#424242" },
  { icon: <FaXTwitter size={20} />, url: "https://linkedin.com", bgColor: "#424242" },
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
];

export const reviews = [
  { label: "Clutch", href: "#" },
  { label: "Good Firms", href: "#" },
  { label: "Design Rush", href: "#" },
  { label: "Trust Pilot", href: "#" },
  { label: "Partnerstack", href: "#" },
];
