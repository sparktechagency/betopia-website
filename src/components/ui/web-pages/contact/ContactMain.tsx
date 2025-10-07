import PageBanner from "@/components/shared/PageBanner";
import React from "react";
import ContactSection from "./contact-section/ContactSection";
import ContactFormSection from "./ContactFormSection";

export default function ContactMain() {
  return (
    <section>
      <PageBanner
        videoSrc="https://res.cloudinary.com/ds1njqypu/video/upload/v1759826820/4480599-uhd_3840_2160_25fps_s3h7fk.mp4"
        title={
          <p>
            Get in Touch with
            <span className="text-primary"> Betopia</span>
          </p>
        }
        subtitle=""
        description="Have questions about our services, solutions, or partnership opportunities? Our team is here to help you every step of the way."
        buttonName="Contact Us Today"
        buttonLink=""
      />
      <ContactSection />
      <ContactFormSection />
      {/* <LetsWorkTogether /> */}
    </section>
  );
}
