import React from "react";
import AboutBanner from "./AboutBanner";
import Owner from "./Owner";
import Map from "./Map";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";

const AboutMain: React.FC = () => {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <Owner />
      <WhatWeDo/>
      <Map />
    </div>
  );
};

export default AboutMain;
