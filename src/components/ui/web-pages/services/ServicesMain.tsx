"use client"
import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServiceDetails from './ServiceDetails';
// import FeaturedProducts from './FeaturedProducts'; 
import { useSearchParams } from 'next/navigation';
import { AISolutionsData, CloudInfrastructureData, CyberSecuritySolutionsData, CyberServicesData, DataSolutionsData, DigitalInnovationData, EndpointManagementData, EnterpriseInfrastructureSolutionsData, EnterpriseNetworkingSolutionsData, IdentityManagementData, SecureBusinessData } from '@/datas/pages/services';
import HighEffective from './HighEffective';
import TrustedBy from '../home/TrustedBy';
import FAQ from '../products/FAQ';
import LetsWorkTogether from '@/components/shared/LetsWorkTogether';
import EndpointManagement from './ExtraComponents/endpoint-management/EndpointManagement';
import IdentityManagement from './ExtraComponents/identity-management/IdentityManagement';
import SecureBusiness from './ExtraComponents/secure-business/SecureBusiness';

const Data: Record<string, typeof EndpointManagementData> = {
    "endpoint-management-security": EndpointManagementData,
    "identity-management-security": IdentityManagementData,
    "secure-business-productivity": SecureBusinessData,
    "enterprise-infrastructure": EnterpriseInfrastructureSolutionsData,
    "enterprise-networking": EnterpriseNetworkingSolutionsData,
    "cloud-infrastructure-networking": CloudInfrastructureData,
    "cyber-security-solutions": CyberSecuritySolutionsData,
    "cyber-security-services": CyberServicesData,
    "digital-app-innovation": DigitalInnovationData,
    "data-solutions": DataSolutionsData,
    "ai-solutions": AISolutionsData,
};

const ServicesMain = () => {
    const params = useSearchParams();
    const service = params.get('service')

    const serviceData = Data[service ?? "endpoint-management-security"];
    return (
        <div>
            <ServicesBanner serviceData={serviceData} />
            <ServiceDetails serviceData={serviceData} />
            {/* <FeaturedProducts />  */}
            <div>
                {
                    service === "endpoint-management-security" ? <EndpointManagement /> : service === "identity-management-security" ? <IdentityManagement /> : service === "secure-business-productivity" ? <SecureBusiness /> : null
                }
            </div>
            <HighEffective serviceData={serviceData} />
            <TrustedBy />
            <FAQ />
            <div className='mt-20'>
                <LetsWorkTogether />
            </div>
        </div>
    );
};

export default ServicesMain;