'use client';

import { CSSProperties, useContext } from "react";
import Slide from "./slide/slide";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";



const Slides = ({product}: {product: productParams | undefined}) => {


    const activeImageContext = useContext(ActiveImageContext);
    const languageContext = useContext(LanguageSelectorContext)

    if(!activeImageContext?.imageWidth){
        return
    }
    
const currentIndex = activeImageContext.currentIndex || 0;
    
    const style: CSSProperties = {
        width: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: "start",
        alignItems: "start",
        padding: 0,
        margin: 0,
        transform: languageContext?.activeLanguage != 'arabic' ? `translateX(${-activeImageContext?.imageWidth * currentIndex}px)` : `translateX(${activeImageContext?.imageWidth * currentIndex}px)`,
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