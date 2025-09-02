import React from 'react';
import Services from './Services';
import Products from './Products';

const HomeMain = () => {
    return (
        <div className="container">
            <h1>Welcome to the Home Page</h1>
            <Services />
            <Products />
        </div>
    );
};

export default HomeMain;