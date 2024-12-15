'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";


const Quantity = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const style: CSSProperties = {
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '200'
    }
    const styleColorDiv: CSSProperties = {
        width: 'var(--long-width)',
        height: '30px',
        border: '1px solid var(--ashen)',
        backgroundColor: 'var(--almost-white)',
        color: 'var(--almost-black)',
        margin: '0 var(--large-margin)',
    }
    
    return (
        <div style={style} id="selectQuantitue-div">

            <span>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    englist.quantity + ' : '
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.quantity + ' : '
                : englist.quantity + ' : '
            }</span>

            <select style={styleColorDiv} id="selectQuantitue">
                {Array.from({ length: product?.quantity? product?.quantity : 0 }, (_, count) => (
                    <option key={count} value={count + 1}>{count + 1}</option>
                ))}
            </select>

        </div>
    )
}
export default Quantity;