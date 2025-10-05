"use client"
import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServiceDetails from './ServiceDetails';
// import FeaturedProducts from './FeaturedProducts'; 
import { useSearchParams } from 'next/navigation';
import { AISolutionsData, CloudInfrastructureData, CyberSecuritySolutionsData, CyberServicesData, DataSolutionsData, DigitalInnovationData, EndpointManagementData, EnterpriseInfrastructureSolutionsData, EnterpriseNetworkingSolutionsData } from '@/datas/pages/services';
import HighEffective from './HighEffective';

const Data: Record<string, typeof EndpointManagementData> = {
    "endpoint-management-security": EndpointManagementData,
    "identity-management-security": EndpointManagementData,
    "secure-business-productivity": EndpointManagementData,
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
            <HighEffective serviceData={serviceData} />
        </div>
    );
};

export default ServicesMain;