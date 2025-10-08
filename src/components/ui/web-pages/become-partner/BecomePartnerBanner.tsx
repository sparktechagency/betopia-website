import OutlineButton from "@/components/shared/OutlineButton";

const BecomePartnerBanner = () => {
  return (
    <div
      id="banner"
      className=" z-10 flex-center text-center h-[calc(100vh-100px)] text-white  "
    >
      <div className=" flex-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dreiyzj42/video/upload/v1757500905/partner_page_form_rgoqyk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/77 "></div>

      {/* Content can go here */}
      <div className=" container z-20 absolute w-full  flex-center  top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden h-[calc(100vh-105px)] ">
        <div className=" flex flex-col items-center justify-center   ">
          <p className="text-[#818181] text-[34px] lg:text-5xl 2xl:text-[64px]  font-medium  pb-9 ">
            <span className="text-white">Start </span> Your Journey with{" "}
            <span className="text-primary"> Betopia </span>{" "}
          </p>
          <p className=" text-lg lg:text-xl font-normal text-[#9B9B9B]  lg:w-[55%] md:w-[50%] tracking-wide ">
            Take the first step towards a rewarding partnership.
          </p>
          <div className=" pt-[77px]">
            <OutlineButton className=" !py-4 !px-7">
              Explore Our Services
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartnerBanner;
