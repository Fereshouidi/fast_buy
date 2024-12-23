'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { border, borderColor } from "polished";
import { CSSProperties, useContext } from "react";

const PaymentMethod = () => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);



    const style:CSSProperties = {
        marginTop: 'var(--large-margin)',
        display: 'flex',
        alignItems: 'center',
    }
    const styleContainer:CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const stylePaypal:CSSProperties = {
        color: 'rgb(0, 48, 135)',
        margin: 'var(--small-margin)',
        border: `1px solid ${companyInformation?.primaryColor}`

    }
    const styleMasterCart:CSSProperties = {
       color: 'rgb(147, 71, 5)',
       margin: 'var(--small-margin)'
    }
    const styleTruck = {
        color: companyInformation?.primaryColor,
        borderColor: 'red',
        margin: 'var(--medium-margin)',
    }
    return (
        <div className="payment-method item" style={style}>
            <h5>{activeLanguage?.paymentMethodW + " : "}</h5>
            <div style={styleContainer}>
                <div style={stylePaypal}>
                    <FontAwesomeIcon icon={faPaypal} />
                </div> 
                <div style={styleMasterCart} >
                    <FontAwesomeIcon icon={faCcMastercard} className="master-cart"/>
                </div>
                <div style={styleTruck}>
                    <FontAwesomeIcon icon={faTruck} />
                </div>
            </div>
        </div>
    )
}
export default PaymentMethod;