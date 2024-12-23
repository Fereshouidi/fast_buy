'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { CSSProperties, useContext } from "react";

const DiscountCode = () => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);

    const style :CSSProperties = {
        height: 'var(--primary-height)',
        borderRadius: '20px',
        paddingTop: '5px',
        position: 'relative'
    }
    const styleH6 :CSSProperties = {
        top: 0,
        position: 'absolute',
        margin: '0 var(--medium-margin)',
        padding: '0 var(--medium-padding)',
        backgroundColor: 'var(--white)',

    }
    const styleInput :CSSProperties = {
        width: '100%',
        height: '100%',
        outline: 'none',
        border: `1px solid ${companyInformation?.primaryColor}`,
        borderRadius: '20px',
        backgroundColor: 'var(--white)',
        padding: '0 var(--large-padding)',

    }
    return (
        <div className="item" style={style}>
            <h6 style={styleH6}>{activeLanguage?.discountCodeW}</h6>
            <input type="text" style={styleInput} placeholder="..."/>
        </div>
    )
}
export default DiscountCode;