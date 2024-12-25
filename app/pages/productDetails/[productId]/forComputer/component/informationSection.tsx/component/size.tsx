'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams,  } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext } from "react";



const Size = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);


    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'var(--big-size)',
        fontWeight: '200',
        color: 'var(--black)'

    }
    const styleSizeSpan: CSSProperties = {
        margin: '0 var(--medium-margin)',
        fontSize: 'var(--primary-size)',
    }

    return (
        <div style={style} id="size-div">
            <span>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    englist.sizeW + ' : '
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.sizeW + ' : '
                : englist.sizeW + ' : '
            }</span>
            <span style={styleSizeSpan}>{product?.size}</span>
        </div>
    )
}
export default Size;