'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBill, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useContext } from "react";
import faMastercard from '@/app/images/mastercard-logo-mastercard-logo-png-vector-download-19.png';

type params = {
    paymentMethod: 'paypal' | 'masterCard' | 'cash' | undefined,
    setPaymentMethod: (value: 'paypal' | 'masterCard' | 'cash' | undefined) => void,
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
}

const PaymentMethod = ({paymentMethod, setPaymentMethod, setShoppingCart}: params) => {

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
       //margin: 'var(--small-margin)'
    }
    const styleTruck = {
        color: 'green',
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
                    onClick={() => setPaymentMethod('paypal')}
                >
                    <FontAwesomeIcon icon={faPaypal} />
                </div> 
                <div style={paymentMethod === 'masterCard' ? {...styleMasterCart, ...stylePaymentSelected} : styleMasterCart} 
                    onClick={() => setPaymentMethod('masterCard')}
                >
                    <img src={faMastercard.src} className="master-cart "/>
                </div>
                <div style={paymentMethod === 'cash' ? {...styleTruck, ...stylePaymentSelected} : styleTruck} 
                    onClick={() => setPaymentMethod('cash')}
                >
                    <FontAwesomeIcon icon={faMoneyBill} />
                </div>
            </div>

        </div>
    )
}
export default PaymentMethod;