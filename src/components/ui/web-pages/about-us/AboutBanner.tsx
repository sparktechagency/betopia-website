
import PageBanner from "@/components/shared/PageBanner"; 

const aboutBannerData = {
    videoSrc: "https://res.cloudinary.com/dd0giqouc/video/upload/v1757499565/About_Us_Page_y7cpsp.mp4", 
    title: <p> <span className="text-white"> From </span> <span className="text-primary"> Bangladesh </span>  to the World </p> ,
    subtitle: "Shaping the Future of Enterprise Technology",
    description: "Betopia Limited is a global IT transformation company delivering cloud, AI, cybersecurity, and compliance-first solutions that help enterprises innovate and scale with confidence..",
    buttonName: "Schedule Appointment",
    buttonLink: "/become-partner"
}

const AboutBanner = () => {
    return ( 
        <div>
            <PageBanner videoSrc={aboutBannerData?.videoSrc} title={aboutBannerData?.title} subtitle={aboutBannerData?.subtitle} description={aboutBannerData?.description}  buttonName={aboutBannerData?.buttonName} buttonLink={aboutBannerData?.buttonLink} />
        </div>
    
    );
};

export default AboutBanner;