import React from 'react';
import ApplicationBanner from './ApplicationBanner';
import HowToApply from './HowToApply';
import FormDetails from './FormDetails';
import ApplicationForm from './ApplicationForm';

const ApplicationMain: React.FC = () => {
    return (
        <React.Fragment>
            <ApplicationBanner />
            <HowToApply />
            <FormDetails/>
            <ApplicationForm/>
        </React.Fragment>
    );
};

export default ApplicationMain;