import React from 'react';
import Services from './Services';
import Products from './Products';
import Banner from './Banner';
import BannerDetails from './BannerDetails';
import BoostYourBusiness from './BoostYourBusiness';
import Facilities from './Facilities';
import TrustedBy from './TrustedBy';
import Testimonial from './Testimonial';

const HomeMain = () => {
    return (
        <div className="">
            <Banner />   
            <BannerDetails />
            <Products />
            <Services /> 
            <BoostYourBusiness /> 
            <Facilities /> 
            <TrustedBy /> 
            <Testimonial />
        </div>
    );
};

export default HomeMain;