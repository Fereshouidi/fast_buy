'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";


const Categorie = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '200',
        color: 'var(--black)'

    }
    const styleCategorieName: CSSProperties = {
        margin: 'var(--medium-margin)',
    }
    
    return (
        <div style={style} id="categorie-div">
            <h4>{
                languageSelectorContext?.activeLanguage == "english" ?
                englist.categorieW + ' :'
                : languageSelectorContext?.activeLanguage == "arabic" ?
                arabic.categorieW + ' :'
                : englist.categorieW + ' :'
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