import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
 

// CHASE THE CASH SA  
export const portfolioData = {

  banner: { 
    videoSrc:"https://res.cloudinary.com/dreiyzj42/video/upload/v1757501755/porfolio_page_klnh9o.mp4",
    title: <p className=" w-[75%] text-center mx-auto pb-3"> <span className="text-white"> CHASE </span> THE CASH SA is Your  <span className="text-primary"> AI Assistant, </span> </p>,
    subtitle: "Experience Real World Treasure Hunt Mobile App",
    description: "An innovative mobile app that transforms the thrill of treasure hunting into an engaging, gamified adventure with puzzles, QR scans, and real rewards.",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"

  },

  projectOverview: {
    title: <p> <span className="text-[#000000]"> Project </span> <span className="text-primary"> Overview </span> </p>,
    description: <p> <span className="font-medium"> Chase THE Cash SA </span> invites users to embark on real-time treasure hunt user experience, where they follow a series of cryptic clues leading to specific locations. Each clue brings participants closer to uncovering hidden treasures, with the ultimate goal claiming a reward. Along the way, users are the tasked with solving puzzles, scanning QR codes, uploading proof of their journey and tracking their progress on live map. </p>,
    image: "/portfolio/chaseTheCashSa/chaseTheCashSa.png",
    projectName: "Chase The Cash SA",
    category: "Mobile App ",
    serviceWeProvide: ["UX Research", "UI Design", "Development"],
    socialLinks: [  
      {
        icon:  <GrFacebookOption size={16} color="white"  /> , 
        link:"#facebook"
      } ,
      {
        icon:  <TiSocialLinkedin size={18} color="white"  /> , 
        link:"#linkedIn"
      } ,
      {
        icon:  <FaXTwitter size={12} color="white"  /> , 
        link:"#twitter"
      } ,
      {
        icon:  <FaWhatsapp size={16} color="white"  /> , 
        link:"#what'sApp"
      } ,
    ],
  }, 

  firstFeatures:[ 
    {
      title: <p> <span className="text-[#000000]"> Development & </span> <span className="text-primary"> implementation </span> </p>,
      description: "This phase involves building core features, integrating AI-powered backend and frontend, and optimizing the user experience to ensure a seamless, ready to launch Umrah Guide app.",
      imgUrl: "/portfolio/chaseTheCashSa/feature1.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Logo and App </span> <span className="text-primary"> Icon </span> </p>,
      description: "The Logo and App Icon, designed to reflect the app’s bold, energetic, and competitive spirit. With a sleek, modern aesthetic, the logo conveys the thrill of the treasure hunt experience, while the localized “SA” highlights its regional identity, ensuring both brand recognition and cultural relevance.",
      imgUrl: "/portfolio/chaseTheCashSa/feature2.png"
    },
  ] , 

  secondFeature:[
    {
      title: <p> <span className="text-[#000000]"> Problems & </span> <span className="text-primary"> Solution </span> </p>,
      description: "The core challenges users face, such as cluttered markers, unclear navigation, and poor user experience. It then presents streamlined solutions like reward consolidation, smart highlighting, and crash prevention to ensure a smoother journey. The phase focuses on integrating AI-powered backend and frontend features to deliver a seamless, launch-ready app.",
      imgUrl: "/portfolio/chaseTheCashSa/feature3.png"
    },
    {
      title: <p> <span className="text-[#000000]">Information</span> <span className="text-primary"> Architecture </span> </p>,
      description: "The information architecture defines a clear user journey starting from the splash screen to the login and registration process, including OTP verification and password recovery. From the home screen, users can access essential flows like location challenges, map tracking, terms & conditions, and privacy policy, with error handling for wrong locations. This structure ensures smooth navigation, secure authentication, and a streamlined experience for all participants.",
      imgUrl: "/portfolio/chaseTheCashSa/feature4.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Wire</span> <span className="text-primary"> framing </span> </p>,
      description: "This wireframing phase translates the information architecture into visual layouts, outlining the structure of key screens such as login, registration, home, and tracking. It provides a blueprint for navigation, user interactions, and feature placement, ensuring a clear and intuitive design foundation before moving into high-fidelity UI development.",
      imgUrl: "/portfolio/chaseTheCashSa/feature5.png"
    },
  ],

  thirdFeatures: [
    {
      title: <p> <span className="text-[#000000]">App User</span> <span className="text-primary"> Experience </span> </p>,
      description: "The App User Experience, highlighting how wireframes evolve into interactive, user-friendly designs. It emphasizes smooth navigation, clear feature placement, and intuitive interaction flows, ensuring users can easily access core functions like login, registration, home, and tracking. The result is a polished, engaging interface that balances functionality with seamless usability.",
      imgUrl: "/portfolio/chaseTheCashSa/feature6.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Style</span> <span className="text-primary"> Guide </span> </p>,
      description: "Chase The Cash SA style guide featuring modern color palettes, typography (Poppins), and UI elements crafted for an engaging, user-friendly nutrition app experience.",
      imgUrl: "/portfolio/chaseTheCashSa/feature7.png"
    },
  ],

  research: {
    title: <p> <span className="text-white">Challenges We </span> <span className="text-primary"> Faced </span> </p>,
    description: "During development, including ensuring smooth discovery flows, delivering an engaging user experience, and refining the user interface for clarity and usability. Overcoming these hurdles was crucial to creating a seamless, intuitive, and rewarding treasure hunt app that keeps users engaged from start to finish.",
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
      link: "#"
    },
    {
      id: "02 ",
      title: "Umrah Guide",
      description:
        "An AI-powered Mobile app designed to assist pilgrims during their Umrah and Hajj Journey",
      imgUrl: "/BoostYourBusiness3.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "#"
    },
  ]

} 

// Umrah Guide  
export const UmrahGuideData = {

  banner: { 
    videoSrc:"https://res.cloudinary.com/dreiyzj42/video/upload/v1757501755/porfolio_page_klnh9o.mp4",
    title: <p className=" w-[75%] text-center mx-auto pb-3"> <span className="text-white"> Umrah Guide &  </span> <span className=" text-primary">Connection</span> </p>,
    subtitle:  "Your AI Assistant Guiding You Through the Sacred Journey of Umrah",
    description: "Embark on your spiritual journey with confidence using Umrah Guide & Connection, the ultimate app designed to assist pilgrims at every step of their Umrah",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"

  },

  projectOverview: {
    title: <p> <span className="text-[#000000]"> Project </span> <span className="text-primary"> Overview </span> </p>,
    description: <p> <span className="font-medium"> Umrah Guide </span> is an <span className="font-medium"> AI-Powered </span> mobile app designed to assist pilgrims during their Umrah and Hajj journey. Offering personalized, expert guidance, the app helps users easily find and book experienced guides for key locations in Mecca and Madina, including the Sacred Mosque and Prophet’s Mosque </p>,
    image: "/portfolio/umrahGuide/umrahGuide.png",
    projectName: "Umrah Guide and Connection",
    category: "Mobile App ",
    serviceWeProvide: ["UX Research", "UI Design", "Development"],
    socialLinks: [  
      {
        icon:  <GrFacebookOption size={16} color="white"  /> , 
        link:"#facebook"
      } ,
      {
        icon:  <TiSocialLinkedin size={18} color="white"  /> , 
        link:"#linkedIn"
      } ,
      {
        icon:  <FaXTwitter size={12} color="white"  /> , 
        link:"#twitter"
      } ,
      {
        icon:  <FaWhatsapp size={16} color="white"  /> , 
        link:"#what'sApp"
      } ,
    ],
  }, 

  firstFeatures:[ 
    {
      title: <p> <span className="text-[#000000]"> Development & </span> <span className="text-primary"> implementation </span> </p>,
      description: "This phase involves building core features, integrating AI-powered backend and frontend, and optimizing the user experience to ensure a seamless, ready to launch Umrah Guide app.",
      imgUrl: "/portfolio/umrahGuide/feature1.png"
    },
  ] , 

  secondFeature:[
    {
      title: <p> <span className="text-[#000000]"> User </span> <span className="text-primary"> Testimonial </span> </p>,
      description: "User feedback highlights the app’s value in providing step-by-step guidance, better visibility of Arabic text, ad-free content, and meaningful Umrah experiences.",
      imgUrl: "/portfolio/umrahGuide/feature2.png"
    },
    {
      title: <p> <span className="text-[#000000]">Problems &</span> <span className="text-primary"> Solution </span> </p>,
      description: "T Pilgrims face difficulty with cluttered apps, poor navigation, and inconsistent designs.  Umrah Guide introduces a clean, intuitive interface with fast load times, consistent layouts, and easy task completion improving satisfaction and engagement.",
      imgUrl: "/portfolio/umrahGuide/feature3.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Information</span> <span className="text-primary"> Architecture </span> </p>,
      description: "The app’s structure is mapped out with clear sections such as authentication, home screen, user dashboard, profile, and support. It ensures smooth navigation for both tourists and guides with features like booking, trip summaries, earnings, and location management.",
      imgUrl: "/portfolio/umrahGuide/feature4.png"
    },
  ],

  thirdFeatures: [
    {
      title: <p> <span className="text-[#000000]">Wire</span> <span className="text-primary"> Framing </span> </p>,
      description: "Wireframes highlight the core app flows, including sign-in, booking guides, editing profiles, support, and dashboard management. It lays out the foundation for a seamless user experience before moving into high-fidelity design.",
      imgUrl: "/portfolio/umrahGuide/feature5.png"
    },
    {
      title: <p> <span className="text-[#000000]"> Style</span> <span className="text-primary"> Guide </span> </p>,
      description: "Umrah Guide style guide featuring modern color palettes, typography (Poppins), and UI elements crafted for an engaging, user-friendly nutrition app experience.",
      imgUrl: "/portfolio/umrahGuide/feature6.png"
    },
  ],

  research: {
    title: <p> <span className="text-white">User </span> <span className="text-primary"> Persona </span> </p>,
    description: "A sample persona, Omar Al-Farhan, represents an experienced Umrah guide. His goals, needs, and pain points illustrate the importance of digital solutions for managing clients, feedback, and schedules efficiently.",
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
      link: "#"
    },
    {
      id: "02 ",
      title: "Umrah Guide",
      description:
        "An AI-powered Mobile app designed to assist pilgrims during their Umrah and Hajj Journey",
      imgUrl: "/BoostYourBusiness3.png",
      gradientClass: "from-[#666666]/50 to-[#000000]/80",
      link: "#"
    },
  ]

} 
