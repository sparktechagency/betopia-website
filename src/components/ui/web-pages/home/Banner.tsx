import OutlineButton from "@/components/shared/OutlineButton";

const Banner = () => {
    return (
        <div className=" z-10 flex-center text-center h-screen text-white  "> 
        <div className=" "> 
            <video
                className="absolute top-0 left-0 w-full h-full object-cover "
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src="https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div> 

             {/* Content can go here */} 
             <div className=" container z-20 absolute w-full  flex-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">  
             <div className=" flex flex-col items-center justify-center   "> 
                <h1 className="text-[#818181] text-[64px] font-medium"><span className="text-white">From </span> <span className="text-primary"> Bangladesh </span> to the World </h1> 
                <p className=" text-[#7E7E7E] text-[57px] font-light lg:w-[60%] md:w-[50%] w-full text-center pb-12  ">Delivering Secure, Cloud-Ready, AI-Powered Business Platforms </p> 
                <p className=" text-lg font-normal text-[#9B9B9B]  lg:w-[45%] md:w-[50%] tracking-wide ">Betopia Limited is your enterprise transformation partner — helping organizations modernize, protect, and monetize their digital ecosystems.</p> 
                <div className=" pt-8"> 
                    <OutlineButton className=" !py-4 !px-7">Explore Our Services</OutlineButton>
                </div>
             </div>

             </div>

        </div>
    );
};

export default Banner;