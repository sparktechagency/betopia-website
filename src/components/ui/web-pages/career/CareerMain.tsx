import React from 'react';
import CareerBanner from './CareerBanner';
import JoinTeam from './JoinTeam';
import BetopiaVision from './BetopiaVision';

const CareerMain: React.FC = () => {
    return (
        <div>
            <CareerBanner/>
            <JoinTeam/>
            <BetopiaVision/>
        </div>
    );
};

export default CareerMain;