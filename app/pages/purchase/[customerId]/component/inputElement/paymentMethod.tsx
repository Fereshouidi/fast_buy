'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useContext } from "react";

type params = {
    paymentMethod: 'paypal' | 'masterCart' | 'cash' | undefined,
    setPaymentMethod: (value: 'paypal' | 'masterCart' | 'cash' | undefined) => void
}

const PaymentMethod = ({paymentMethod, setPaymentMethod}: params) => {

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

    }
    const styleMasterCart:CSSProperties = {
       color: 'rgb(147, 71, 5)',
       margin: 'var(--small-margin)'
    }
    const styleTruck = {
        margin: 'var(--medium-margin)',
    }
    const stylePaymentSelected: CSSProperties = {
        border: `1px solid ${companyInformation?.primaryColor}`
     }

    return (
        <div className="payment-method item" style={style}>

            <h5>{activeLanguage?.paymentMethodW + " : "}</h5>

            <div style={styleContainer}>
                <div style={paymentMethod === 'paypal' ? {...stylePaypal, ...stylePaymentSelected} : stylePaypal} 
                    // className={paymentMethod == 'paypal' ? 'payment-selected' : ''}
                    onClick={() => setPaymentMethod('paypal')}
                >
                    <FontAwesomeIcon icon={faPaypal} />
                </div> 
                <div style={paymentMethod === 'masterCart' ? {...styleMasterCart, ...stylePaymentSelected} : styleMasterCart} 
                    // className={paymentMethod == 'masterCart' ? 'payment-selected' : ''}
                    onClick={() => setPaymentMethod('masterCart')}
                >
                    <FontAwesomeIcon icon={faCcMastercard} className="master-cart "/>
                </div>
                <div style={paymentMethod === 'cash' ? {...styleTruck, ...stylePaymentSelected} : styleTruck} 
                    // className={paymentMethod == 'cash' ? 'payment-selected' : ''}
                    onClick={() => setPaymentMethod('cash')}
                >
                    <FontAwesomeIcon icon={faTruck} />
                </div>
            </div>

        </div>
    )
}
export default PaymentMethod;