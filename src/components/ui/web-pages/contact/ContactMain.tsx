import PageBanner from "@/components/shared/PageBanner";
import React from "react";
import ContactSection from "./contact-section/ContactSection";
import LetsWorkTogether from "@/components/shared/LetsWorkTogether";

export default function ContactMain() {
  return (
    <section>
      <PageBanner
        videoSrc="https://res.cloudinary.com/dreiyzj42/video/upload/v1757501387/blog_page_vtkluu.mp4"
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
      {/* <ContactSection /> */}
      <div className="-mt-32">
        <LetsWorkTogether />
      </div>
    </section>
  );
}
