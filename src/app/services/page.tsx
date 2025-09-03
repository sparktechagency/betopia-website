import ServicesMain from '@/components/ui/web-pages/services/ServicesMain';
import React, { Suspense } from 'react';

const ServicesPage = () => {
    return (
        <div> 
            <Suspense> 

           <ServicesMain />
            </Suspense>
        </div>
    );
};

export default ServicesPage;