'use client';

import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import PaymentMethod from "./inputElement/paymentMethod";
import DiscountCode from "./inputElement/discountCode";
import OrderNow from "./inputElement/orderNow";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import InputAdress from "./inputElement/inputAdress";
import InputPhoneNumber from "./inputElement/inputPhoneNumber";
import { CustomerDataParams } from "@/app/contexts/customerData";
import { discountCodeParams } from "@/app/contexts/discountCode";
import { getAllDiscountCodesForShoppingCarts } from "@/app/crud";

type Params = {
    customer: CustomerDataParams | undefined,
    setCustomer: (value: CustomerDataParams) => void;
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    totalPriceChange: 'byDiscount' | 'byDiscountPercent' | undefined, 
    setTotalPriceChange: (value: 'byDiscount' | 'byDiscountPercent' | undefined) => void
}
const CartDetail = ({customer, setCustomer, shoppingCart, setShoppingCart, totalPriceChange, setTotalPriceChange}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);
    const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'masterCard' | 'cash' | undefined>('cash');
    const [discountCodesForShoppingCarts, setDiscountCodesForShoppingCarts] = useState<discountCodeParams[] | []>([]);


    useEffect(() => {
        const fetchData = async () => {
            const allDiscountCodes = await getAllDiscountCodesForShoppingCarts();
            setDiscountCodesForShoppingCarts(allDiscountCodes)            
        }
        fetchData()
    }, [])

    useEffect(() => {    
    }, [shoppingCart])

    useEffect(() => {
        setShoppingCart({
            ...shoppingCart,
            paymentMethod: paymentMethod
        })        
    }, [paymentMethod])
    
    
    if(typeof window == 'undefined'){
        return;
    }

    if (shoppingCart && (shoppingCart?.totalPrice === undefined || typeof shoppingCart?.shippingCost === 'undefined')) {
        return;
    }

    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '40%' : '100%',
    }
    const styleContainer: CSSProperties = {
        width: '100%',
        position: 'sticky',
        zIndex: 0,
        top: '0',
        paddingTop: window.innerWidth > 1000 ? 'calc(var(--extra-large-padding) * 1.5)' : 'var(--small-padding)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
    const styleH4: CSSProperties = {
        marginBottom: window.innerWidth > 500 ? 'var(--large-margin)' : 'var(--medium-margin)',
        fontSize: window.innerWidth < 500 ? 'var(--small-size)' : 
            window.innerWidth > 500 && window.innerWidth < 800?  'var(--medium-size)' :
            window.innerWidth > 800 && window.innerWidth < 1000?  'var(--small-size)' :
            'var(--medium-size)'
    }
    const styleCart: CSSProperties = {
        maxWidth: '90%',
        width:  window.innerWidth > 900  ? '' : '90%',
        margin: window.innerWidth > 1500 ? 'var(--extra-large-margin)' : 'var(--extra-large-margin)',
        padding: window.innerWidth > 1500  ? 'calc(var(--extra-large-padding) * 1.5)' : window.innerWidth > 800 && window.innerWidth < 1500  ?  'calc(var(--large-padding) * 1.2)' : 'var(--extra-large-padding)',
        backgroundColor: 'var(--white)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'var(--black)'
    }
    const styleWarningMessage: CSSProperties = {
        fontSize: 'var(--small-size)',
        opacity: '0.7',
        margin: 'var(--medium-margin)',
        color: 'var(--ashen)'    
    }

    return (
        <div style={style} className="cart-details">
            <div className="container" style={styleContainer}>
                <div className="cart" style={styleCart}>
                    <h4 style={styleH4}>{activeLanguage?.CompleteYourPurchaseW}</h4>
                    <div className="item">
                        <h5>{activeLanguage?.purchasesPriceW + " : ________ ( "}</h5>
                        <span>{(shoppingCart?.totalPrice || 0) + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <div className="item">
                        <h5>{activeLanguage?.shippingCostW + " : __________ ("}</h5>
                        <span>{(shoppingCart?.shippingCost || 0) + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <div className="item">
                        <h5>{activeLanguage?.totalPriceW + " : ____________ ("}</h5>
                        <span>{(shoppingCart?.totalPrice || 0) + (shoppingCart?.shippingCost || 0) + ' ' + companyInformation?.currencyType + ')'}</span>
                    </div>
                    <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                    {shoppingCart?.customer?.phone || !shoppingCart ? null : <InputPhoneNumber customer={customer} setCustomer={setCustomer} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>}
                    {shoppingCart?.customer?.adress || !shoppingCart ? null : <InputAdress customer={customer} setCustomer={setCustomer} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>}
                    {discountCodesForShoppingCarts.length > 0 ? <DiscountCode shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} allDiscountCodes={discountCodesForShoppingCarts} setAllDiscountCodes={setDiscountCodesForShoppingCarts} totalPriceChange={totalPriceChange} setTotalPriceChange={setTotalPriceChange}/> : null} 
                    <OrderNow
                        shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                        customer={customer}
                        setCustomer={setCustomer}
                    />
                    {!shoppingCart?.customer?.adress && !shoppingCart?.customer?.phone ? <p style={styleWarningMessage}>{activeLanguage?.warningForWrongDataP}</p> : null}
                </div>
            </div>
        </div>
    )
}
export default CartDetail;