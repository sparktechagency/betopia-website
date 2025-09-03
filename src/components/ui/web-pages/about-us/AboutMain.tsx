import React from 'react';
import AboutBanner from './AboutBanner';
import Owner from './Owner';
import Map from './Map';

const AboutMain: React.FC = () => {
    return (
        <div>
            <AboutBanner />
            <Owner />
            <Map />
        </div>
    );
};

export default AboutMain;