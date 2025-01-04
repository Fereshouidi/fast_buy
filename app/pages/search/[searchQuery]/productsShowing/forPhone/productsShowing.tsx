'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import { productParams } from "@/app/contexts/productSelectForShowing";
import SearchBar from "@/app/components/header/headerForComputer/components/searchBar/searchBar";


type params = {
    Query?: string | undefined,
    products: productParams[] 
  }
  const ProductsShowing = ({ products, Query }: params) => {

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
        margin: window.innerWidth > 800 ? 'calc(var(--large-margin)*3) 0' : 'calc(var(--large-margin)*2) 0',
        color: 'var(--black)'
    }

    const styleContainer: CSSProperties = {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap'
    }

    const styleSearchBar:CSSProperties = {
        backgroundColor: 'transparent',
        width: '80%',
        height: 'var(--primary-height)',
        position: 'relative',
        padding: '0',
        direction: activeLanguage.activeLanguage == "arabic"? 'rtl': 'ltr',
        transition: '0.7s ease',
        margin: 'var(--medium-margin) 0'
    }

    return (
        <section style={Style}>
            <SearchBar style={styleSearchBar} Query={Query}/>
            <div style={styleContainer}>
                {products.length > 0 ? products.map((product, index) => {
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