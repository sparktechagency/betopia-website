import Image from "next/image";
import ContactCard from "./ContactCard";
import LocationCard from "./LocationCard";

const contactData = [
  {
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    title: "Office",
    titleHighlight: "Locations",
    content: [
      "C/A, Ak Khandaker Road Kaderia",
      "Tower J-28/8-B, Mohakhali, Dhaka",
      "1213",
    ],
    bgColor: "bg-orange-500",
  },
  {
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    title: "Email",
    titleHighlight: "Address",
    content: ["betopialimited@gmail.com", "www.betopialimited.com"],
    bgColor: "bg-orange-500",
  },
  {
    icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    title: "Phone",
    titleHighlight: "Number",
    content: ["+88 01332840871"],
    bgColor: "bg-orange-500",
  },
  {
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Working",
    titleHighlight: "Hours",
    content: ["Saturday - Sunday", "09 am - 06 pm", "Friday Off"],
    bgColor: "bg-orange-500",
  },
];

export default function ContactSection() {
  const isMobile =
    typeof globalThis !== "undefined" &&
    globalThis.innerWidth &&
    globalThis.innerWidth <= 768;
  return (
    <section className="pb-16 px-4 container mx-auto ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div>
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Have Any Project on Mind?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              Work Together
            </h3>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactData.map((card, index) => (
              <ContactCard key={index} {...card} />
            ))}
          </div>
        </div>

        {/* Right Side - Map with Location Card */}
        <div
          style={{
            backgroundImage: "url(/contact/orange_bg.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: isMobile ? "90% 100%" : "",
            borderRadius: isMobile ? "0px 30px 30px 0px" : "20px",
          }}
          className="relative"
        >
          {/* Decorative Border Container */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Map Image Container */}
            <div className="relative mx-4 my-6  rounded-2xl overflow-hidden">
              <Image
                src="/contact/map.svg"
                alt="Map Location"
                className="w-full lg:h-[500px] h-[470px] object-cover rounded-[24px]"
                width={500}
                height={500}
              />

              {/* Location Card Overlay */}
              <LocationCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
