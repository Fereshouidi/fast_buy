'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";


const Categorie = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const style: CSSProperties = {
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--medium-size)/1.2)',
        fontWeight: '400'
    }
    const styleCategorieName: CSSProperties = {
        margin: 'var(--medium-margin)',
    }
    
    return (
        <div style={style} id="categorie-div">
            <h4>{
                languageSelectorContext?.activeLanguage == "english" ?
                english.categorieW + ' :'
                : languageSelectorContext?.activeLanguage == "arabic" ?
                arabic.categorieW + ' :'
                : english.categorieW + ' :'
            }</h4>
            <span style={styleCategorieName}>{
                languageSelectorContext?.activeLanguage == "english" ?
                    product?.categorie.name.english
                : languageSelectorContext?.activeLanguage == "arabic" ?
                    product?.categorie.name.arabic 
                :   product?.categorie.name.english
            }</span>
        </div>
    )
}
export default Categorie;