import React from "react";
import AboutBanner from "./AboutBanner";
import Owner from "./Owner";
import Map from "./Map";
import OurStory from "./OurStory";

const AboutMain: React.FC = () => {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <Owner />
      <Map />
    </div>
  );
};

export default AboutMain;
