'use client';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';

const Logo = () => {

    const companyInformations = useContext(CompanyInformationContext);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage.activeLanguage;
    
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
                src={companyInformations?.logo}
                alt="Logo"   
            />
            <h1>{activeLanguage == 'arabic' ? companyInformations.name?.arabic : companyInformations.name?.english }</h1>
        </div>
    )
}
export default Logo;