import React from 'react';
import Services from './Services';
import Products from './Products';
import Banner from './Banner';
import BannerDetails from './BannerDetails';

const HomeMain = () => {
    return (
        <div className="">
            <Banner />   
            <BannerDetails />
            <Products />
            <Services />
        </div>
    );
};

export default HomeMain;