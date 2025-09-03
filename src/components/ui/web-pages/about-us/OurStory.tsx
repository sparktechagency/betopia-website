import ComponentTitle from '@/components/shared/ComponentTitle';
import React from 'react';

const OurStory = () => {
    return (
        <div className='container relative text-white '>
            <ComponentTitle className=' !text-start pb-2'> <span className=' text-[#000000]'> Our </span> <span className='text-primary'>Story</span> </ComponentTitle>
            <div className=' grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 gap-20 pb-10  '> 
               
                <div className=' col-span-3 flex flex-col text-[#818181] text-lg tracking-wide '>
                    <span>
                        Every great journey begins with a vision. For Betopia Limited, that vision started in 2014 with a simple goal: to build technology that truly empowers businesses. From our humble beginnings, we grew steadily in 2015, earning the trust of early clients who believed in our mission. By 2019, our expansion carried us beyond borders, connecting us with global partners and new opportunities.
                        The challenges of 2020 became a defining moment. While the world faced uncertainty, we scaled our operations and stood beside businesses as they transitioned into digital-first models. In 2022, we introduced new initiatives in AI, cloud, cybersecurity, and SaaS, creating solutions for tomorrow while solving today’s problems.
                    </span>

                    <span className=' pb-4'>
                        Today, our story is one of scale, innovation, and trust. With 40,000+ clients, 50,000+ projects delivered, a team of 750+ dedicated professionals, and operations in 47+ countries, Betopia stands as a global partner in transformation. Our footprint stretches far and wide, with 30,000+ clients across Europe, 600+ in the USA, and 400+ in Australia.
                    </span>
                    <span>

                        But numbers only tell part of the story. At its heart, Betopia is about people—our clients, our partners, and our team. Together, we are writing a story of growth and possibilities, building solutions that turn challenges into opportunities, and shaping a future where technology serves humanity.
                    </span>
                </div>
                <div className=" col-span-2 w-full h-full rounded-lg overflow-hidden relative ">
                    <video
                        className="absolute  object-cover w-full h-full "
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
            </div> 
            <button className=' bg-primary text-white text-lg  font-bold py-2.5 px-[50px] '>Get Started </button>
        </div>
    );
};

export default OurStory;