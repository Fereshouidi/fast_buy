'use client';

import { CSSProperties, useContext } from "react";
import Slide from "./slide/slide";
import { ActiveImageContext } from "@/app/contexts/activeImage";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

type productParams = {
    _id: string,
    name: nameParams,
    imagePrincipal: string,
    images: string[],
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


const Slides = ({product}: {product: productParams | undefined}) => {


    const activeImageContext = useContext(ActiveImageContext);
    const languageContext = useContext(LanguageSelectorContext)

    if(!activeImageContext?.imageWidth){
        return
    }
    

    
    const style: CSSProperties = {
        width: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: "start",
        alignItems: "start",
        padding: 0,
        margin: 0,
        transform: languageContext?.activeLanguage != 'arabic' ? `translateX(${-activeImageContext?.imageWidth * activeImageContext.currentIndex}px)` : `translateX(${activeImageContext?.imageWidth * activeImageContext.currentIndex}px)`,
        transition: '0.5s ease'
    }

    return (
        <div id="slides" style={style}>
            {product && product.images.map((image, index) => {
                return <Slide key={index} image={image}/>
            })}
        </div>
    )
}
export default Slides;