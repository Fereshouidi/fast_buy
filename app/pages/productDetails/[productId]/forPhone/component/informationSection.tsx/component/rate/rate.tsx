'use client';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext } from "react";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = () => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'calc(var(--large-margin) * 1.5) var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '200',
        color: primaryColor,
        cursor: 'pointer'
    }
    const styleIcon: CSSProperties = {
        margin: '0 var(--small-margin)',
    }

    return (
        <div style={style}>
            <FontAwesomeIcon icon={faStar} style={styleIcon}/>
            {activeLanguage?.rateProductW }
        </div>
    )
}
export default Rate;