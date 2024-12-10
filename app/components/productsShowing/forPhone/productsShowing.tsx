'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
//import { getAllProducts_SortedByRating } from "@/app/crud";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";


type productsShowing = {
    pageNumber: number,
    setPageNumber: (showMore: number) => void;
    allProducts: productParams[]
}
type productParams = {
    name: nameParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string
}

type nameParams = {
    english: string,
    arabic: string
}


type discountParams = {
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date
};

const ProductsShowing = ({allProducts, pageNumber, setPageNumber}: productsShowing) => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const [showMore_btn_Hover, setShowMor_btn_eHover] = useState(false);

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
    }, [languageContext.activeLanguage])



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

    const styleSpan: CSSProperties = {
        color: 'var(--white)',
        backgroundColor: 'var(--primary-color)',
        padding: 'calc(var(--medium-padding) *1.2)',
        borderRadius: '20px',
        margin: 'calc(var(--large-margin) *2) 0',
        cursor: 'pointer'
    }
    const styleSpanHover: CSSProperties = {
        ...styleSpan,
        backgroundColor: 'var(--primary-color-clicked)'
    }
    return (
        <section style={Style}>

            <h2 style={StyleH2}>{activeLanguage.highestRatedW +' :'}</h2>
            <div style={styleContainer}>
                {allProducts && allProducts.map((product, index) => {
                    return <div key={index}>
                        <Card product={product}/>
                    </div>
                })}
            </div>
            
            <span style={showMore_btn_Hover? styleSpanHover: styleSpan}
                onClick={() => setPageNumber(pageNumber + 1)} 
                onMouseEnter={() => setShowMor_btn_eHover(true)} 
                onMouseLeave={() => setShowMor_btn_eHover(false)}
            >{activeLanguage.showMoreW}</span>

        </section>
    )
}
export default ProductsShowing;