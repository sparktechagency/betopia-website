import React from 'react';

const FooterContent: React.FC = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div>
                <p>Empowering businesses with smart, scalable software solutions.</p>
                <button className='bg-[#F69348] w-[170px] h-[48px] text-black '></button>
            </div>
            <div>
                <p>SERVICES</p>
                <ul>
                    <li>Enterprise Cloud Management</li>
                    <li>Hybrid/Multi-Cloud Platform Management</li>
                    <li>Cloud Security, Compliance & Governance</li>
                    <li>Cloud-Native infrastructure management</li>
                    <li>Cybersecurity Advisory & Consulting</li>
                    <li>Managed Security Operations</li>
                    <li>Enterprise Cyber Resilience & Governance</li>
                    <li>Cyber risk Management</li>
                </ul>
            </div>
        </div>
    );
};

export default FooterContent;