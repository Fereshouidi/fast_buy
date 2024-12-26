'use client';

import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties, useContext, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import PaymentMethod from "./inputElement/paymentMethod";
import DiscountCode from "./inputElement/discountCode";
import OrderNow from "./inputElement/orderNow";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

type Params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
}
const CartDetail = ({shoppingCart, setShoppingCart}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);
    const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'masterCart' | 'cash' | undefined>('cash')
    
    if(typeof window == 'undefined'){
        return;
    }
    if (shoppingCart?.totalPrice === undefined || typeof shoppingCart?.shippingCost === 'undefined') {
        return;
    }
    

    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '40%' : '100%',
       // borderLeft: activeLanguage?.activeLanguage == 'arabic' ? '' :` 1px solid ${companyInformation?.primaryColor}`,
      // boxShadow: `0 5px 25px var(--ashen-almost-white)`
    }
    const styleContainer: CSSProperties = {
        width: '100%',
        position: 'sticky',
        zIndex: 0,
        top: 'var(--header-height)',
        paddingTop: window.innerWidth > 1000 ? 'calc(var(--extra-large-padding) * 2)' : 'var(--small-padding)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
    const styleH4: CSSProperties = {
        marginBottom: window.innerWidth > 500 ? 'var(--large-margin)' : 'var(--medium-margin)',
        fontSize: window.innerWidth > 500 ? 'var(--primary-size)' : 'var(--small-size)',

    }
    const styleCart: CSSProperties = {
        maxWidth: '90%',
        width:  window.innerWidth > 900  ? '' : '90%',
        margin: window.innerWidth > 1500 ? 'var(--extra-large-margin)' : 'var(--extra-large-margin)',
        padding: window.innerWidth > 1500  ? 'calc(var(--extra-large-padding) * 2)' : window.innerWidth > 800 && window.innerWidth < 1500  ?  'calc(var(--large-padding) * 1.2)' : 'var(--extra-large-padding)',
        backgroundColor: 'var(--white)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'var(--black)'
    }
    return (
        <div style={style} className="cart-details">
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
                    <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                    <DiscountCode/>
                    <OrderNow
                        shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                    />
                </div>
            </div>
        </div>
    )
}
export default CartDetail;