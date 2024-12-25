'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { purchaseParams } from '@/app/contexts/purchaseData';

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
    discountCodeAmount: {discount?: number | null, discountPercent?: number | null},
    price: number | undefined, 
    setPrice: (value: number | undefined) => void,
    purchaseData: purchaseParams | undefined,
    setPurchaseData: (value: purchaseParams) => void
}
const Price = ({product, setPrice, discountCodeAmount, purchaseData}: Params) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    useEffect(() => {
        setPrice( handlePrice())
    }, [discountCodeAmount])

    const handlePrice = () => {
        const discount = product?.discount?.newPrice ;
        const discountValue = discountCodeAmount.discount || 0;
        const discountPercent = discountCodeAmount.discountPercent || 0;
        let finalPrice = 0;

        if(typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof product?.price == 'undefined'){
            
            return ;
        }

        if (discount && discountValue) {
            finalPrice = discount - discountValue;
            return finalPrice;
        }
        if (!discount && discountValue) {
            finalPrice = product?.price - discountValue;
            return finalPrice;
        }
        if (discount && discountPercent) {
            finalPrice = discount - discount * (discountPercent / 100);
            return finalPrice;
        }
        if (!discount && discountPercent) {
            finalPrice = product?.price - product?.price * (discountPercent / 100);
            return finalPrice;
        }else{
            finalPrice = product?.discount ? product.discount.newPrice : product?.price;
            return finalPrice;
        }

    }
    

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)*1.5)',
        fontWeight: '700',
        color: 'var(--black)',
    }
    const stylePriceW: CSSProperties = {
        fontWeight: '200'
    }
    const stylePrice: CSSProperties = {
        margin: 'var(--large-margin)',
    }


   return (
    <div style={style} id="price">
        <span style={stylePriceW}>
            {languageSelectorContext?.activeLanguage === 'english' 
                ? english.priceW + ' : ' 
                : arabic.priceW + ' : '}
        </span>

        <span style={stylePrice}>{purchaseData?.totalPrice}</span>
        <span>{product?.currencyType}</span>
    </div>
);

}
export default Price;