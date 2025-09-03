
import PageBanner from "@/components/shared/PageBanner"; 

const aboutBannerData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4", 
    title: <p> <span className="text-white"> From </span> <span className="text-primary"> Bangladesh </span>  to the World </p> ,
    subtitle: "Shaping the Future of Enterprise Technology",
    description: "Betopia Limited is a global IT transformation company delivering cloud, AI, cybersecurity, and compliance-first solutions that help enterprises innovate and scale with confidence..",
    buttonName: "Schedule Appointment",
    buttonLink: "/schedule"
}

const AboutBanner = () => {
    return ( 
        <div>
            <PageBanner videoSrc={aboutBannerData?.videoSrc} title={aboutBannerData?.title} subtitle={aboutBannerData?.subtitle} description={aboutBannerData?.description}  buttonName={aboutBannerData?.buttonName} buttonLink={aboutBannerData?.buttonLink} />
        </div>
    
    );
};

export default AboutBanner;