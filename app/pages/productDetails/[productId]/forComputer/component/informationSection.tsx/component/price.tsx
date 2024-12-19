'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext } from "react";

const Price = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    

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
        <div style={style} id="price" >
            <span style={stylePriceW}>{
                languageSelectorContext?.activeLanguage ==  'english' ?
                    english.priceW + ' : '
                : languageSelectorContext?.activeLanguage ==  'arabic' ?
                    arabic.priceW + ' : '
                :   english.priceW + ' : '
            }</span>

                <span style={stylePrice}>{product?.discount ? product.discount.newPrice : product?.price}</span>
                <span>{product?.currencyType}</span>
            </div>
    )
}
export default Price;