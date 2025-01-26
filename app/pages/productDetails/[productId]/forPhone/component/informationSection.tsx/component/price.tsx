'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { purchaseParams } from '@/app/contexts/purchaseData';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
    discountCodeAmount: {discount?: number | null, discountPercent?: number | null},
    price: number , 
    setPrice: (value: number ) => void,
    purchaseData: purchaseParams | undefined,
    setPurchaseData: (value: purchaseParams) => void
    isPriceChange: boolean,
    setIspriceChange: (value: boolean) => void
}
const Price = ({product, price, setPrice, discountCodeAmount, purchaseData, isPriceChange, setIspriceChange}: Params) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);
    const companyInformation = useContext(CompanyInformationContext);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [price_, setPrice_] = useState<number>(product?.discount?.newPrice || product?.price);


    console.log(price);


    // useEffect(() => {
    //     setPrice( handlePrice())
    // }, [discountCodeAmount])

    

    const handlePrice = () => {
        const discount = product?.discount?.newPrice || product?.price;
        const discountValue = discountCodeAmount.discount || 0;
        const discountPercent = discountCodeAmount.discountPercent || 0;
        //let finalPrice = 0;

        if(typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof product?.price == 'undefined'){
            
            return ;
        }

        if (discount && discountValue) {
            return  discount - discountValue;
        }
        if (!discount && discountValue) {
            return  product?.price - discountValue;
        }
        if (discount && discountPercent) {
            return discount - discount * (discountPercent / 100);
        }
        if (!discount && discountPercent) {
            return product?.price - product?.price * (discountPercent / 100);
        }else{
            return 0;
        }

    }
    


    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)*1.1)',
        fontWeight: '600',
        color: 'var(--black)'

    }
    const stylePriceW: CSSProperties = {
        fontWeight: '400'
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

            <span style={stylePrice}>{price}</span>
            <span>{companyInformation?.currencyType}</span>
        </div>
    )
}
export default Price;