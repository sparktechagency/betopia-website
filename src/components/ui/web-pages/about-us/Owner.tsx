import React from 'react';
import Image from "next/image";


const owners = [
    {
        name: "Muhammad Monir Hossain",
        role: "CEO",
        imageUrl: "/owners/ceo.png",
        slogan: "Driving Global Business Growth Through Innovation and Partnerships",
        bio: "At the heart of our journey is a simple belief that technology should empower, not complicate. Our mission is to bridge innovation with real world business needs, delivering solutions that help our partners grow faster and smarter. At Betopia, we’re committed to building products and services that create measurable value, foster trust, and inspire lasting partnerships. The future of business is digital, and together, we will shape it.",
    },
    {
        name: "Sabina Akter",
        role: "Chairperson",
        imageUrl: "/owners/chairperson.png",
        bio: "Our strength lies not only in what we build, but in why we build it. Softvence was founded on the principle that meaningful technology is created when vision, expertise, and ethics work together. As Chairperson, I’m proud to lead a team that believes in delivering excellence, fostering collaboration, and making an impact across industries. With every product we launch and every service we deliver, our aim is to redefine how businesses connect, operate, and grow.",
        slogan: "True prosperity begins when we unlock potential and grow limitless, together.",
    },
    {
        name: "Rakibul Islam Shiku",
        role: "Chief Technology Officer",
        imageUrl: "/owners/cto.png",
        bio: "At the heart of our journey is a simple belief that technology should empower, not complicate. Our mission is to bridge innovation with real world business needs, delivering solutions that help our partners grow faster and smarter. At Betopia, we’re committed to building products and services that create measurable value, foster trust, and inspire lasting partnerships. The future of business is digital, and together, we will shape it.",
        slogan: "Creating Scalable, Secure, and Future-Ready Digital Ecosystems for B2B Success",
    },
    {
        name: "MD NAIMUL HASAN DURJAY",
        role: "Head of Department",
        imageUrl: "/owners/head.png",
        bio: "My vision is to scale businesses worldwide by leveraging the power of Artificial Intelligence, Cloud Solutions, and Cybersecurity. AI enables smarter decision-making, process automation, and innovation that drives competitive advantage. Cloud services empower organizations to modernize their operations, increase flexibility, and reduce costs while ensuring global scalability. Cybersecurity strengthens digital resilience and builds trust in an increasingly connected world. By combining these three pillars, I aim to help companies unlock new opportunities, protect their assets, and grow faster in the global market. This is not just about providing technology solutions, it is about shaping the future of business growth and digital transformation across industries.",
        slogan: "Scaling Global Businesses with AI, Cloud, and Cybersecurity",
    },
]
// 

const Owner: React.FC = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-10'>
                {owners.map((owner, index) => (
                    <div key={index} className={`h-[400px]  
                        ${(index + 1) % 2 === 0 ? 'bg-gradient-to-r from-white to-[#f99b4e]' : ' bg-gradient-to-r from-transparent to-[#f99b4e]'}
                        `}
                    >

                        <div className={` container flex
                        ${(index + 1) % 2 === 0 ? ' flex-row' : ' flex-row-reverse '}
                        p-8 rounded-[12px] mb-10 items-center
                        `}>
                            <div className={` ${(index + 1) % 2 === 0 ? 'w-[50%]' : 'w-[50%]'}`}>
                                <Image src={owner.imageUrl} alt="Dubai" width={466} height={664} />
                            </div>

                            <div>
                                <h1>{owner.slogan}</h1>
                                <p>{owner.bio}</p>
                                <h2 className="text-[18px] leading-[26%] text-[#2A2A2A]">{owner.name}</h2>
                                <h3 className="text-[18px] leading-[26%] text-[#2A2A2A]">{owner.role}</h3>
                                <p className="text-[22px] leading-[28%] text-[#2A2A2A]">Betopia Limited</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Owner;