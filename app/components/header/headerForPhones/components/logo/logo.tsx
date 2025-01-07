'use client';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';
import { useRouter } from 'next/navigation';

const Logo = () => {

    const companyInformations = useContext(CompanyInformationContext);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage.activeLanguage;
    const router = useRouter();

    const goToHomePage = () => {
        router.push('/')
    }

    if(!companyInformations){
        throw 'error companyInformation !'
    }

    const style: CSSProperties = {
        cursor: 'pointer',
        color: 'var(--black)',
        fontSize: 'var(--half-size)'
    }
    return (
        <div style={style} className='logo' onClick={goToHomePage}>
            <img 
                src={companyInformations?.logo}
                alt="Logo"   
            />
            <h1>{activeLanguage == 'arabic' ? companyInformations.name?.arabic : companyInformations.name?.english }</h1>
        </div>
    )
}
export default Logo;