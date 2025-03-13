'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CSSProperties, useContext } from "react";

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
    purchaseData: purchaseParams | undefined,
    setPurchaseData: (value: purchaseParams) => void,
    discountCodeAmount: {discount?: number | null, discountPercent?: number | null},
    setDiscountCodeAmount:  (value: {discount?: number | null, discountPercent?: number | null}) => void,
    price: number | undefined, 
    setPrice: (value: number | undefined) => void,
    isPriceChange: boolean,
    setIspriceChange: (value: boolean) => void
}
const DiscountCode = ({product, purchaseData, setDiscountCodeAmount, isPriceChange, setIspriceChange, price, setPrice}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage
    const companyInformation = useContext(CompanyInformationContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value == product?.discountCode?.code && !purchaseData?.discountCode){
            setDiscountCodeAmount({
                discount: product.discountCode.discount,
                discountPercent: product.discountCode.discountPercent
            })
        }
    };
    


    const style :CSSProperties = {
        width: 'var(--extra-long-width)',
        height: 'var(--primary-height)',
        borderRadius: '20px',
        paddingTop: '5px',
        position: 'relative',
        color: 'var(--black)'

    }
    const styleH6 :CSSProperties = {
        top: 0,
        position: 'absolute',
        margin: '0 var(--medium-margin)',
        padding: '0 var(--medium-padding)',
        backgroundColor: 'var(--almost-white)',
        borderRadius: '20px'
    }
    const styleInput :CSSProperties = {
        width: '100%',
        height: '100%',
        outline: 'none',
        border: `1px solid ${companyInformation?.primaryColor}`,
        borderRadius: '20px',
        backgroundColor: '#c2c2c236',
        padding: '0 var(--large-padding)',
        color: 'var(--black)'
    }
    return (
        <div className="item" style={style}>
            <h6 style={styleH6}>{activeLanguage?.discountCodeW}</h6>
            <input type="text" style={styleInput} placeholder={purchaseData?.discountCode?.code?? "..."} onChange={(event) => handleChange(event)}/>
        </div>
    )
}
export default DiscountCode;