import { PortfolioData } from "@/types";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";


// CHASE THE CASH SA  
export const portfolioData:PortfolioData = {

  banner: {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757501755/porfolio_page_klnh9o.mp4",
    title: <p className=" w-[75%] text-center mx-auto pb-3"> <span className="text-white"> CHASE </span> THE CASH SA is Your  <span className="text-primary"> AI Assistant, </span> </p>,
    subtitle: "Experience a Real-World Treasure Hunt Mobile App",
    description: "An innovative gamified mobile app that transforms the thrill of treasure hunting into an engaging experience — complete with puzzles, QR scans, live tracking, and real-world rewards.",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"

  },

  projectOverview: {
    title: <p> <span className="text-[#000000]"> Project </span> <span className="text-primary"> Overview </span> </p>,
    description: <p> <span className="font-medium"> Chase THE Cash SA </span> invites users to embark on an interactive treasure hunt experience. Participants follow a series of cryptic clues, solve puzzles, scan QR codes, upload proof of progress, and track everything on a live map. The ultimate goal? Claiming hidden rewards in real-time.</p>,
    image: "/portfolio/chaseTheCashSa/chaseTheCashSa.png",
    projectName: "Chase The Cash SA",
    category: "Mobile App",
    serviceWeProvide: ["UX Research", "UI Design", "Full-Stack Development"],
    socialLinks: [
      {
        icon: <GrFacebookOption size={16} color="white" />,
        link: "#facebook"
      },
      {
        icon: <TiSocialLinkedin size={18} color="white" />,
        link: "#linkedIn"
      },
      {
        icon: <FaXTwitter size={12} color="white" />,
        link: "#twitter"
      },
      {
        icon: <FaWhatsapp size={16} color="white" />,
        link: "#what'sApp"
      },
    ],
  },

  firstFeatures: [
    {
      title: <p> <span className="text-[#000000]"> Development & </span> <span className="text-primary"> implementation </span> </p>,
      description: "Our team built AI-powered backend and frontend systems to enable:",
      list: [
        "Real-time clue delivery and progress tracking",
        "Seamless QR code scanning and location verification",
        "Smooth user experience across devices",
        "Optimized performance for launch readiness"
      ],
      imgUrl: "/portfolio/chaseTheCashSa/feature1.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Logo and App </span> <span className="text-primary"> Icon </span> </p>,
      description: "The Chase The Cash SA logo and app icon were designed to reflect the bold, competitive spirit of the app. With a sleek, modern aesthetic, the identity conveys excitement and energy, while the “SA” highlights its regional relevance and brand recognition.",
      imgUrl: "/portfolio/chaseTheCashSa/feature2.png"
    },
  ],

  secondFeature: [
    {
      title: <p> <span className="text-[#000000]"> Problems & </span> <span className="text-primary"> Solution </span> </p>,
      description: "Problem",
      list: [
        "Cluttered markers & confusing navigation",
        "Poor user experience in tracking flow",
        "System crashes under load"
      ],
      description2: "Solution",
      list2:[
        "Introduced smart highlighting & simplified map UI",
        "Designed clear progress indicators & journey milestones",
        "Optimized backend and added error handling mechanisms"
      ],
      imgUrl: "/portfolio/chaseTheCashSa/feature3.png"
    },
    {
      title: <p> <span className="text-[#000000]">Information</span> <span className="text-primary"> Architecture </span> </p>,
      description: "We crafted a clear, secure user journey starting from splash screen → login/registration → OTP verification → password recovery. Users can access:",
      list: [
        "Location Challenges",
        "Live Map Tracking",
        "Terms & Conditions / Privacy Policy",
        "Error Handling for Wrong Locations"
      ],
      imgUrl: "/portfolio/chaseTheCashSa/feature4.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Wire</span> <span className="text-primary"> framing </span> </p>,
      description: "We created low-fidelity wireframes to visualize:",
      list: [
        "Login & Registration",
        "Home Screen Layout",
        "Challenge Map Flow",
        "Admin & Management Dashboard"
      ],
      description2: "This ensured a solid blueprint before moving to high-fidelity UI design.",
      imgUrl: "/portfolio/chaseTheCashSa/feature5.png"
    },
  ],

  thirdFeatures: [
    {
      title: <p> <span className="text-[#000000]">App User</span> <span className="text-primary"> Experience </span> </p>,
      description: "Our UI/UX team transformed wireframes into a polished, interactive design, focusing on:",
      list: [
        "Smooth navigation",
        "Clear feature placement",
        "Intuitive interaction flows"
      ],
      description2: "The result was a gamified app experience that keeps users engaged from start to finish.",
      imgUrl: "/portfolio/chaseTheCashSa/feature6.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Style</span> <span className="text-primary"> Guide </span> </p>,
      description: "",
      list: [
        "Typography: Poppins",
        "Colors: Modern, vibrant palette matching adventure/gaming themes",
        "UI Elements: Buttons, cards, and progress indicators designed for a friendly, exciting look"
      ],
      imgUrl: "/portfolio/chaseTheCashSa/feature7.png"
    },
  ],

  research: {
    title: <p> <span className="text-white">Challenges We </span> <span className="text-primary"> Faced </span> </p>,
    description: "Key challenges included:",
    list: [
      "Designing smooth discovery flows",
      "Keeping navigation intuitive",
      "Preventing cluttered map markers",
      "Maintaining performance during heavy usage"
    ],
    subTitle: "We solved these by implementing smart reward grouping, crash prevention mechanisms, and streamlined UI flows to ensure a frictionless user journey.",
    imgUrl: "/portfolio/chaseTheCashSa/research.png"
  },
  images: ["/portfolio/chaseTheCashSa/images1.png", "/portfolio/chaseTheCashSa/images2.png"],

  managementDashboard: {
    title: <p> <span className="text-[#000000]"> Management Dashboard</span> <span className="text-primary"> Overview </span> </p>,
    description: "This wireframing phase translates the information architecture into visual layouts, outlining the structure of key screens such as login, registration, home, and tracking. It provides a blueprint for navigation, user interactions, and feature placement, ensuring a clear and intuitive design foundation before moving into high-fidelity UI development.",
    imgUrl: "/portfolio/chaseTheCashSa/managementDashboard.png"
  },

  otherPortfolio: [
    {
      id: "01",
      title: "Multivendor e-commerce site",
      description:
        "A scalable marketplace connecting multiple vendors with seamless shopping",
      imgUrl: "/BoostYourBusiness2.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "/portfolio?portfolio=Nutri AI"
    },
    {
      id: "02 ",
      title: "Umrah Guide",
      description:
        "AI-powered app assisting pilgrims during Hajj & Umrah journeys",
      imgUrl: "/BoostYourBusiness3.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "/portfolio?portfolio=Umrah Guide"
    },
  ]

}

// Umrah Guide  
export const umrahGuideData:PortfolioData = {

  banner: {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757501755/porfolio_page_klnh9o.mp4",
    title: <p className=" text-center mx-auto pb-3"> <span className="text-white"> Umrah Guide &  </span> <span className=" text-primary">Connection</span> </p>,
    subtitle: "Your AI Assistant Guiding You Through the Sacred Journey of Umrah",
    description: "Embark on your spiritual journey with confidence using Umrah Guide & Connection, the ultimate app designed to assist pilgrims at every step of their Umrah",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"

  },

  projectOverview: {
    title: <p> <span className="text-[#000000]"> Project </span> <span className="text-primary"> Overview </span> </p>,
    description: <p> <span className="font-medium"> Umrah Guide </span>  app provides personalized, expert guidance to pilgrims visiting key locations in Mecca and Madina, including Masjid al-Haram (Sacred Mosque) and Masjid an-Nabawi (Prophet’s Mosque). The platform makes it easy for users to find, connect with, and book guides, ensuring a meaningful, smooth, and spiritually fulfilling experience.</p>,
    image: "/portfolio/umrahGuide/umrahGuide.png",
    projectName: "Umrah Guide & Connection",
    category: "Mobile App",
    serviceWeProvide: ["UX Research", "UI Design", "Development"],
    socialLinks: [
      {
        icon: <GrFacebookOption size={16} color="white" />,
        link: "#facebook"
      },
      {
        icon: <TiSocialLinkedin size={18} color="white" />,
        link: "#linkedIn"
      },
      {
        icon: <FaXTwitter size={12} color="white" />,
        link: "#twitter"
      },
      {
        icon: <FaWhatsapp size={16} color="white" />,
        link: "#what'sApp"
      },
    ],
  },

  firstFeatures: [
    {
      title: <p> <span className="text-[#000000]"> Development & </span> <span className="text-primary"> implementation </span> </p>,
      description: "Our development process focused on:",
      list: [
        "AI-powered recommendations for guide matching and route planning",
        "Real-time booking & scheduling with live updates",
        "Optimized user interface for smooth navigation and multilingual support",
        "Fast load times & secure data handling for a seamless, reliable experience"
      ],
      imgUrl: "/portfolio/umrahGuide/feature1.png"
    },
  ],

  secondFeature: [
    {
      title: <p> <span className="text-[#000000]"> User </span> <span className="text-primary"> Testimonial </span> </p>,
      description: "This app made my Umrah journey stress-free. I could book a trusted guide, receive step-by-step instructions, and focus fully on my prayers. The clean interface and visibility of Arabic text made everything much easier",
      imgUrl: "/portfolio/umrahGuide/feature2.png"
    },
    {
      title: <p> <span className="text-[#000000]">Problems &</span> <span className="text-primary"> Solutions </span> </p>,
      description: "Problem",
      list: [
        "Cluttered apps with poor navigation",
        "Slow load times",
        "Difficulty booking guides"
      ],
      description2: "Solution",
      list2:[
        "Clean, consistent, intuitive UI",
        "Optimized backend for faster performance",
        "One-click booking with confirmation & reminders"
      ],
      description3: "Result: Increased user satisfaction and better engagement throughout the pilgrimage journey.",
      imgUrl: "/portfolio/umrahGuide/feature3.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Information</span> <span className="text-primary"> Architecture </span> </p>,
      description: "The Umrah Guide app was designed with a clear and logical structure:",
      list: [
        "Authentication Flow: Sign-up, sign-in, OTP verification",
        "Home Dashboard: Booking options, guide availability, trip summaries",
        "User Profile: Preferences, past journeys, saved guides",
        "Guide Dashboard: Earnings, bookings, location management",
        "Support: FAQs, contact, live chat"
      ],
      imgUrl: "/portfolio/umrahGuide/feature4.png"
    },
  ],

  thirdFeatures: [
    {
      title: <p> <span className="text-[#000000]">Wire</span> <span className="text-primary"> Framing </span> </p>,
      description: "Our team created low-fidelity wireframes to visualize:",
      list: [
        "Authentication flows",
        "Booking screens",
        "Profile management",
        "Guide dashboards and earnings screens",
      ],
      description2: "These wireframes were then translated into high-fidelity designs for a polished final product.",
      imgUrl: "/portfolio/umrahGuide/feature5.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Style</span> <span className="text-primary"> Guide </span> </p>,
      description: "The Umrah Guide style guide used:",
      list: [
        "Typography: Poppins for clean readability",
        "Colors: Calm, spiritual palette reflecting the sacred nature of the journey",
        "UI Elements: Simple, accessible icons and buttons for quick navigation"
      ],
      imgUrl: "/portfolio/umrahGuide/feature6.png"
    },
  ],

  research: {
    title: <p> <span className="text-white">User </span> <span className="text-primary"> Persona </span> </p>,
    description: "Meet Omar Al-Farhan, a sample guide persona we created to design the app experience. His key needs included:",
    list: [
      "Easy client management",
      "Scheduling tools with reminders",
      "Quick feedback collection"
    ],
    description2: "These insights shaped the dashboard and booking flows for both pilgrims and guides.",
    imgUrl: "/portfolio/umrahGuide/research.png"
  },
  images: ["/portfolio/umrahGuide/images1.png", "/portfolio/umrahGuide/images2.png"],

  otherPortfolio: [
    {
      id: "01",
      title: "Multivendor e-commerce site",
      description:
        "A scalable marketplace connecting multiple vendors with seamless shopping",
      imgUrl: "/BoostYourBusiness2.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "/portfolio?portfolio=Nutri AI"
    },
    {
      id: "02 ",
      title: "AI Voice Recording Mobile App",
      description:
        "Modern design for capturing and processing voice data.",
      imgUrl: "/BoostYourBusiness1.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80", 
      link: "/portfolio?portfolio=Chase The Cash SA"
    },
  ]

}


// Nutri AI  
export const NutriAIData:PortfolioData = {

  banner: {
    videoSrc: "https://res.cloudinary.com/dreiyzj42/video/upload/v1757501755/porfolio_page_klnh9o.mp4",
    title: <p className=" text-center mx-auto pb-3"> <span className="text-white"> Nutri</span> <span className=" text-primary">AI</span> </p>,
    subtitle: "Your Personal AI Powered Nutrition Coach",
    description: "Nutri AI is your smart companion for achieving a healthier lifestyle — track calories, analyze meals, and receive personalized dietary recommendations powered by AI.",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"

  },

  projectOverview: {
    title: <p> <span className="text-[#000000]"> Project </span> <span className="text-primary"> Overview </span> </p>,
    description: <p> <span className="font-medium"> Nutri Ai </span> is a smart <span className="font-medium"> AI-Powered nutrition app</span> designed to help users make better dietary choices and live healthier lives. Using advanced AI algorithms, the app delivers:</p>,
    list: [
      "Personalized meal plans tailored to user goals",
      "Real-time nutrition analysis of meals",
      "Progress tracking",
      "Daily progress tracking for weight, calorie intake, and activity",
      "Smart notifications to keep users motivated"
    ],
    image: "/portfolio/nutriAI/nutriAI.png",
    projectName: "Nutri AI",
    category: "Mobile App ",
    serviceWeProvide: ["UX Research", "UI Design", "Development"],
    socialLinks: [
      {
        icon: <GrFacebookOption size={16} color="white" />,
        link: "#facebook"
      },
      {
        icon: <TiSocialLinkedin size={18} color="white" />,
        link: "#linkedIn"
      },
      {
        icon: <FaXTwitter size={12} color="white" />,
        link: "#twitter"
      },
      {
        icon: <FaWhatsapp size={16} color="white" />,
        link: "#what'sApp"
      },
    ],
  },

  firstFeatures: [
    {
      title: <p> <span className="text-[#000000]"> Development & </span> <span className="text-primary"> implementation </span> </p>,
      description: "The Nutri AI development process included:",
      list: [
        "AI model integration for meal recognition and nutrient analysis",
        "Backend and frontend development for real-time updates",
        "Seamless onboarding and gamified progress tracking",
        "Performance optimization for a smooth launch-ready experience"
      ],
      imgUrl: "/portfolio/nutriAI/feature1.png"
    },
  ],

  secondFeature: [
    {
      title: <p> <span className="text-[#000000]"> User </span> <span className="text-primary"> Testimonial </span> </p>,
      description: "Nutri AI made healthy eating simple and fun. The meal suggestions are spot-on, the calorie tracking is effortless, and the daily motivation keeps me on track.",
      imgUrl: "/portfolio/nutriAI/feature5.png"
    },
    {
      title: <p> <span className="text-[#000000]">Problems &</span> <span className="text-primary"> Solution </span> </p>,
      description: "Problem",
      list: [
        "Difficulty sticking to diet plans",
        "Lack of motivation",
        "Complicated meal logging"
      ],
      description2: "Solution",
      list2: [
        "AI-generated personalized meal recommendations",
        "Gamification & daily progress notifications",
        "AI-powered meal scanning and auto-tracking"
      ],
      imgUrl: "/portfolio/nutriAI/feature2.png"
    },
    {
      title: <p> <span className="text-[#000000]"> User</span> <span className="text-primary"> Flow </span> </p>,
      description: "Nutri AI was designed with a clear, frictionless user journey:",
      list: [
        "Login & Onboarding → Profile setup & health goals",
        "Meal Logging → Camera-based meal recognition & nutrient breakdown",
        "Analytics Dashboard → Progress visualization & insights",
        "Notifications & Reminders → Consistent engagement & motivation"
      ],
      imgUrl: "/portfolio/nutriAI/feature3.png"
    },
  ],

  thirdFeatures: [
    {
      title: <p> <span className="text-[#000000]"> Style</span> <span className="text-primary"> Guide </span> </p>,
      description: "Nutri AI’s design system features:",
      list: [
        "Typography: Poppins & Roboto for a clean, approachable feel",
        "Colors: Fresh, health-oriented palette symbolizing energy and wellness",
        "UI Elements: Simple, visually engaging components for tracking and analysis"
      ],
      imgUrl: "/portfolio/nutriAI/feature4.png"
    },
  ],

  research: {
    title: <p> <span className="text-white">User </span> <span className="text-primary"> Persona </span> </p>,
    description: "Meet Natasha Curtis, a busy influencer balancing her work schedule with her fitness goals. Her needs for time-saving meal suggestions, AI-driven motivation, and progress tracking helped shape the app’s key features.",
    imgUrl: "/portfolio/nutriAI/research.png"
  },
  images: ["/portfolio/nutriAI/images1.png", "/portfolio/nutriAI/images2.png"],

  otherPortfolio: [
    {
      id: "01",
      title: "AI Voice Recording Mobile App",
      description:
        "Designed for speed, clarity, and real-time recording experience.",
      imgUrl: "/BoostYourBusiness1.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "/portfolio?portfolio=Chase The Cash SA"
    },
    {
      id: "02 ",
      title: "Umrah Guide",
      description:
        "AI-powered pilgrimage assistant for a seamless spiritual experience.",
      imgUrl: "/BoostYourBusiness3.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "/portfolio?portfolio=Umrah Guide"
    },
  ]

} 
