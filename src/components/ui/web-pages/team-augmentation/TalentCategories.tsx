
import ComponentTitle from '@/components/shared/ComponentTitle';
import React from 'react';
import TalentSubCategories from './TalentSubCategories';

const TalentCategories = () => {

    return (
        <div className='container mx-auto my-20'>
            <ComponentTitle className='flex-center pb-4 text-[#535353]'> Talent <span className=' text-primary'>Categories</span></ComponentTitle>

            <div>
                <TalentSubCategories />
            </div>
        </div>
    );
};

export default TalentCategories;