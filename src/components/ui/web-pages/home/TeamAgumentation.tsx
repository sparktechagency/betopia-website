import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamAugmentation: React.FC = () => {
  return (
    <div className="bg-[#414042] my-12 md:h-[700px] min-h-screen relative overflow-hidden">
      {/* Decorative top-left star */}
      <Image
        src="/agumentation/star.png"
        alt="star"
        width={180}
        height={180}
        className="absolute top-0 left-0"
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full py-16 md:py-0 px-6 gap-10">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl text-white md:leading-[44px] font-semibold">
            Scale Your Tech <span className="text-[#F79549]">Team Smarter</span>
          </h1>

          <p className="text-white/70 text-base leading-6 mt-4">
            Hire pre-vetted global developers, engineers, designers, and project
            managers at 50–60% lower cost without compromising quality.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl text-white leading-[36px] font-semibold">
              Benefits of{" "}
              <span className="text-[#F79549]">Team Augmentation</span>
            </h2>

            <div className="grid gap-3 mt-4">
              {[
                {
                  icon: "/agumentation/world.png",
                  text: "Access Global Talent",
                },
                {
                  icon: "/agumentation/thunder.png",
                  text: "Faster Time-to-Hire (within 2 weeks)",
                },
                {
                  icon: "/agumentation/lock.png",
                  text: "Enterprise-Grade Security",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-12 w-full">
            <button className="cursor-pointer rounded-[12px] flex items-center justify-center gap-2 h-11 px-5 bg-[#F79549] text-white text-sm md:text-lg w-full md:w-auto">
              Get Talent Profiles
              <Image
                src="/agumentation/lock.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
            <Link href="/contact" className="w-full md:w-auto">
              <button className="cursor-pointer rounded-[12px] h-11 px-5 border border-[#F79549] !text-white text-sm md:text-lg w-full md:w-auto">
                Book Free Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] lg:h-[550px] 2xl:h-[700px] w-full">
          <Image
            src="/agumentation/banner.jpg"
            alt="Team Augmentation Banner"
            fill
            className="object-contain md:object-cover lg:object-bottom rounded-[16px]"
          />
        </div>
      </div>

      {/* Decorative bottom-right shape */}
      <Image
        src="/agumentation/shape.png"
        alt="shape"
        width={180}
        height={180}
        className="absolute -bottom-10 -right-10"
      />
    </div>
  );
};

export default TeamAugmentation;
