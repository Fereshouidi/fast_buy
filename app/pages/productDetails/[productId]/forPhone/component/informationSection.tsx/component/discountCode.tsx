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
}
const DiscountCode = ({product, setDiscountCodeAmount}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage
    const companyInformation = useContext(CompanyInformationContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value == product?.discountCode?.code){
            setDiscountCodeAmount({
                discount: product.discountCode.discount,
                discountPercent: product.discountCode.discountPercent
            })
        }
    };
    


    const style :CSSProperties = {
        width: 'var(--long-width)',
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

    }
    const styleInput :CSSProperties = {
        width: '100%',
        height: '100%',
        outline: 'none',
        border: `1px solid ${companyInformation?.primaryColor}`,
        borderRadius: '20px',
        backgroundColor: 'var(--almost-white)',
        padding: '0 var(--large-padding)',

    }
    return (
        <div className="item" style={style}>
            <h6 style={styleH6}>{activeLanguage?.discountCodeW}</h6>
            <input type="text" style={styleInput} placeholder="..." onChange={(event) => handleChange(event)}/>
        </div>
    )
}
export default DiscountCode;