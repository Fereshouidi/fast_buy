'use client';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

const Logo = () => {

    const companyInformations = useContext(CompanyInformationContext);
    
    if(!companyInformations){
        throw 'error companyInformation !'
    }

 
    const style: CSSProperties = {
        cursor: 'pointer',
        color: 'var(--black)'
    }
    return (
        <div style={style} className='logo'>
            <img 
                src={companyInformations.logo}
                alt="Logo"   
            />
            <h1>{companyInformations && companyInformations.name.english}</h1>
        </div>
    )
}
export default Logo;
