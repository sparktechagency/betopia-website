import ComponentTitle from "@/components/shared/ComponentTitle";
import React from "react";

const OurStory = () => {
  return (
    <div className="container relative text-white pb-32 lg:pb-24  ">
      <ComponentTitle className=" !text-start pb-2">
        {" "}
        <span className=" text-[#000000]"> Our </span>{" "}
        <span className="text-primary">Story</span>{" "}
      </ComponentTitle>
      <div className=" flex flex-col md:flex-row gap-10 mb-10 ">
        <div className=" md:w-4/6 w-full flex flex-col text-[#818181] text-lg tracking-wide  leading-9">
          <span>
            Every great journey begins with a vision. For Betopia Limited, that
            vision started in 2014 with a simple goal — to build technology that
            empowers businesses.
          </span>
          <br />
          <span className=" pb-4">
            In <span className="font-bold">2015</span>, we grew steadily,
            earning the trust of early clients who believed in our mission. By{" "}
            <span className="font-bold">2019</span>, we expanded beyond borders,
            connecting with global partners and opening new opportunities.
          </span>

          <span className=" pb-4">
            The challenges of <span className="font-bold">2020</span> became a
            defining moment. While the world faced uncertainty, we scaled
            operations and stood beside businesses transitioning into
            digital-first models.
          </span>

          <span className=" pb-4">
            But numbers only tell part of the story. At its heart, Betopia is
            about people—our clients, our partners, and our team. Together, we
            are writing a story of growth and possibilities, building solutions
            that turn challenges into opportunities, and shaping a future where
            technology serves humanity.
          </span>

          <span className=" pb-4">
            In <span className="font-bold">2022</span>, we launched initiatives
            in AI, cloud, cybersecurity, and SaaS — shaping solutions for
            tomorrow while solving today’s problems.
          </span>

          <p>
            Today, Betopia is recognized as:
            <ul className="grid grid-cols-1 gap-2 list-disc pl-4">
              <li>40,000+ clients served</li>
              <li>50,000+ projects delivered</li>
              <li>3000+ professionals worldwide</li>
              <li>
                One of the leading IT transformation companies in Bangladesh
              </li>
              <li>47+ countries in operations</li>
            </ul>
          </p>

          <span>
            From 30,000+ clients across Europe to 600+ in the USA and 400+ in
            Australia, our story is one of{" "}
            <span className="font-bold">scale, trust, and innovation</span>.
          </span>
          <br />
          <span>
            But numbers only tell part of the story — Betopia is about people:
            our clients, partners, and teams. Together, we turn challenges into
            opportunities, building solutions that shape a smarter, more
            connected world.
          </span>
        </div>
        <div className=" md:w-2/6 flex flex-col m-auto">
          <video
            className=" md:object-cover md:h-lvh w-full rounded-2xl md:rounded-sm"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dreiyzj42/video/upload/v1757500265/Cloud_Page_fap845.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
