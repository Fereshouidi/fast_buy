'use client';
import { CSSProperties, useContext } from 'react';
import './loading.css';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

const LoadingIcon = () => {

    
    const companyInformation = useContext(CompanyInformationContext);

    const styleLoadingIcon: CSSProperties = {
        borderTop: `0.5vw solid ${companyInformation?.primaryColor}`,
        borderRight: `0.5vw solid ${companyInformation?.primaryColor}`,
    }
    return (
        <div id='container'>
            <div id='loadingIcon' style={styleLoadingIcon}></div>
        </div>
    )
}
export default LoadingIcon;