'use client';

import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

type params = {
    activeSection: 'failseSection' | 'successSection',
    setActiveSection: (value: 'failseSection' | 'successSection') => void
}
const SwitchSections = ({activeSection, setActiveSection}: params)=> {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;


    const style: CSSProperties = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'var(--large-padding)'
    }
    const styleFailed: CSSProperties = {
        width: 'calc(var(--double-width) /1.2)',
        textAlign: 'center',
        margin: 'var(--small-margin)',
        backgroundColor: activeSection == 'failseSection' ? primaryColor : 'var(--ashen-semi-transparent)',
        color: 'var(--white)',
        padding: 'var(--medium-padding) 0',
        borderRadius: '50px',
        cursor: 'pointer'
    }
    const styleSuccess: CSSProperties = {
        width: 'calc(var(--double-width) /1.2)',
        textAlign: 'center',
        margin: 'var(--small-margin)',
        backgroundColor: activeSection == 'successSection' ? primaryColor : 'var(--ashen-semi-transparent)',
        color: 'var(--white)',
        padding: 'var(--medium-padding) 0',
        borderRadius: '50px',
        cursor: 'pointer'
    }
    return (
        <div style={style}>
            <h5 style={styleFailed} onClick={() => setActiveSection('failseSection')}>{activeLanguage?.orderStatus.failedW}</h5>
            <h5 style={styleSuccess} onClick={() => setActiveSection('successSection')}>{activeLanguage?.orderStatus.deliveredW}</h5>
        </div>
    )
}
export default SwitchSections