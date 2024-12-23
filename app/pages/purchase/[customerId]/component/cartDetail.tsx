'use client';

import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import PaymentMethod from "./inputElement/paymentMethod";
import DiscountCode from "./inputElement/discountCode";
import OrderNow from "./inputElement/orderNow";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

const CartDetail = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    console.log(shoppingCart);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);
    
    if(typeof window == 'undefined'){
        return;
    }
    if (shoppingCart?.totalPrice === undefined || typeof shoppingCart?.shippingCost === 'undefined') {
        return;
    }
    

    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '50%' : '100%',
    }
    const styleContainer: CSSProperties = {
        width: '100%',
        position: 'sticky',
        zIndex: 0,
        top: 'var(--header-height)',
        paddingTop: window.innerWidth > 800 ? 'calc(var(--extra-large-padding) * 2)' : 'var(--small-padding)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    const styleH4: CSSProperties = {
        marginBottom: 'var(--large-margin)'
    }
    const styleCart: CSSProperties = {
        maxWidth: '90%',
        width:  window.innerWidth > 900  ? '' : '90%',
        margin: window.innerWidth > 1200 ? 'var(--extra-large-margin)' : 'var(--extra-large-margin)',
        padding: window.innerWidth > 900  ? 'calc(var(--extra-large-padding) * 2)' : 'var(--extra-large-padding)',
        backgroundColor: 'var(--white)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'var(--black)'
    }
    return (
        <div style={style}>
            <div className="container" style={styleContainer}>
                <div className="cart" style={styleCart}>
                    <h4 style={styleH4}>{activeLanguage?.CompleteYourPurchaseW}</h4>
                    <div className="item">
                        <h5>{activeLanguage?.purchasesPriceW + " : _______ ( "}</h5>
                        <span>{shoppingCart?.totalPrice + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <div className="item">
                        <h5>{activeLanguage?.shippingCostW + " : __________ ("}</h5>
                        <span>{shoppingCart?.shippingCost + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <div className="item">
                        <h5>{activeLanguage?.totalPriceW + " : ____________ ("}</h5>
                        <span>{shoppingCart?.totalPrice + shoppingCart?.shippingCost + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <PaymentMethod/>
                    <DiscountCode/>
                    <OrderNow/>
                </div>
            </div>
        </div>
    )
}
export default CartDetail;