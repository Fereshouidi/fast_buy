'use client';

import { CSSProperties, useContext } from "react";
import Slider from "./slider/slider";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";



type categorieParams = {
    _id: string;
    name: LanguageParams;
    parentCategorie: string;
    childrenCategories: categorieParams[];
    childOpen: boolean;
    margin: number;
}

type LanguageParams = {
    english: string,
    arabic: string
}

const Categorie = ({ categorie, products }: { categorie: categorieParams, products: productParams[] }) => {

    if(typeof window == 'undefined'){
        throw 'window.innerWidth == "undefind"'
    }

    const languageContext = useContext(LanguageSelectorContext);
    if(!languageContext){
        throw 'error languageContext !';
    }

    const style: CSSProperties = {
        // backgroundColor: 'var(--white)',
        // backgroundColor: 'var(--white-almost-transparnt)',
        margin: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    const styleH2: CSSProperties = {
        margin: window.innerWidth > 800 ? 'var(--large-margin)' : 'var(--extra-small-margin)' ,
        color: 'var(--black)'
    }
    return (
        <div style={style}>
            <h2 style={styleH2}>{
                languageContext.activeLanguage == "arabic" ?
                categorie.name.arabic
                :languageContext.activeLanguage == "english" ?
                categorie.name?.english?? ''
                :categorie.name?.english?? ''    
            }</h2>
            {<Slider products={products}/> }
        </div>
    );
};

export default Categorie;
