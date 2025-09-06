import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServiceDetails from './ServiceDetails';
import FeaturedProducts from './FeaturedProducts';

const ServicesMain = () => {
    return (
        <div>
            <ServicesBanner /> 
            <ServiceDetails /> 
            <FeaturedProducts />
        </div>
    );
};

export default ServicesMain;