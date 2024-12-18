'use client';
import { CSSProperties, useContext } from 'react';
import './loading.css';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { LoadingIconContext } from '@/app/contexts/loadingIcon';

const LoadingIcon = () => {

    
    const companyInformation = useContext(CompanyInformationContext);
    const exist = useContext(LoadingIconContext)?.exist;

    const styleLoadingIcon: CSSProperties = {
        borderTop: `1px solid ${companyInformation?.primaryColor}`,
        borderRight: `1px solid ${companyInformation?.primaryColor}`,
    }
    return (
        <div id='container' >
            <div id='loadingIcon' style={styleLoadingIcon}></div>
        </div>
    )
}
export default LoadingIcon;