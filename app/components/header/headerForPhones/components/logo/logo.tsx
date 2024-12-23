'use client';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

const Logo = () => {

    const companyInformation = useContext(CompanyInformationContext)


    const style: CSSProperties = {
        cursor: 'pointer',
        color: 'var(--black)'
    }
    return (
        <div style={style} className='logo'>
            <img 
                src={companyInformation?.logo}
                alt="Logo"   
            />
            <h3 >{companyInformation?.name?.english}</h3>
        </div>
    )
}
export default Logo;
