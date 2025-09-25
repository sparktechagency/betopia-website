import PortfolioMain from '@/components/ui/web-pages/portfolio/PortfolioMain';
import React, { Suspense } from 'react';

const PortfolioPage = () => {
    return (
        <div>
            <Suspense>
                <PortfolioMain />
            </Suspense>
        </div>
    );
};

export default PortfolioPage;