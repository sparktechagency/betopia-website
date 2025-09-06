import React from 'react';
import ProductsBanner from './ProductsBanner';
import InCaseYouMissedIt from './InCaseYouMissedIt';
import ProductsDetails from './ProductsDetails';

const ProductsMain = () => {
    return (
        <div>
            <ProductsBanner /> 
            <ProductsDetails />
            <InCaseYouMissedIt />
        </div>
    );
};

export default ProductsMain;