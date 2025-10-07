import PageBanner from "@/components/shared/PageBanner";
import { aboutBannerData } from "@/datas/pages/about";

const AboutBanner = () => {
  return (
    <div id="banner">
      <PageBanner
        videoSrc={aboutBannerData?.videoSrc}
        title={aboutBannerData?.title}
        subtitle={aboutBannerData?.subtitle}
        description={aboutBannerData?.description}
        buttonName={aboutBannerData?.buttonName}
        buttonLink={aboutBannerData?.buttonLink}
      />
    </div>
  );
};

export default AboutBanner;
