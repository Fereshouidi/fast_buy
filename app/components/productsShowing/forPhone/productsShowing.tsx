'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
//import { getAllProducts_SortedByRating } from "@/app/crud";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import tinycolor from "tinycolor2";
import LoadingIcon from "@/app/svg/icons/loading/loading";


type productsShowing = {
    pageNumber: number,
    setPageNumber: (showMore: number) => void;
    allProducts: productParams[]
}

type productParams = {
    _id: string,
    name: LanguageParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type LanguageParams = {
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

    const companyInformation = useContext(CompanyInformationContext)

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


    const darkenedColor = tinycolor(companyInformation?.primaryColor || '#111111').darken(10).toString();  


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

    const styleSpan: CSSProperties = {
        color: 'var(--white)',
        backgroundColor: `${companyInformation?.primaryColor}`,
        padding: 'calc(var(--small-padding) *1.2)',
        fontSize: 'var(--small-size)',
        borderRadius: '20px',
        margin: 'var(--large-margin) 0',
        cursor: 'pointer'
    }
    const styleSpanHover: CSSProperties = {
        ...styleSpan,
        backgroundColor: darkenedColor
    }
    return (
        <section style={Style}>

            <h2 style={StyleH2}>{activeLanguage.highestRatedW +' :'}</h2>
            <div style={styleContainer}>
                {allProducts.length > 0 ? allProducts.map((product, index) => {
                        return <div key={index}>
                            <Card product={product}/>
                        </div>
                    })
                    : <LoadingIcon/>
                }
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