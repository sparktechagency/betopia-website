import ProductsMain from '@/components/ui/web-pages/products/ProductsMain';
import React, { Suspense } from 'react';

const ProductsPage = () => {
    return (
        <div> 
            <Suspense> 
                <ProductsMain/>
            </Suspense>
        </div>
    );
};

export default ProductsPage;