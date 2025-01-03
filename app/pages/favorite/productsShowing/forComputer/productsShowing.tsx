'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import { productParams } from "@/app/contexts/productSelectForShowing";


const ProductsShowing = (products: {products: productParams[]}) => {


    const [activeLanguage, setActiveLanguage] = useState(english);

    const languageContext = useContext(LanguageSelectorContext);
    if(!languageContext){
        throw 'error languageContext !';
    }

    useEffect(() => {
        if(languageContext.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(languageContext.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }
    }, [languageContext.activeLanguage]);


    const Style: CSSProperties = {
        width: '100%',
        backgroundColor: 'var(--almost-white)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }

    const StyleH2: CSSProperties = {
        margin: 'calc(var(--large-margin)*3) 0',
        color: 'var(--black)'
    }

    const styleContainer: CSSProperties = {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap'
    }
    

    return (
        <section style={Style}>
            <h2 style={StyleH2}>{activeLanguage.favoriteW + ' :'}</h2>
            <div style={styleContainer}>
                {products ? products.products.map((product, index) => {
                    return <div key={index}>
                        <Card product={product}/>
                    </div>
                })
                : <LoadingIcon/>
                }
            </div>
        </section>
    )
}

export default ProductsShowing;
