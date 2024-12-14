'use client';

import { CSSProperties, useContext } from "react";
import Slider from "./slider/slider";
import ImageDisplay from "./imageDisplay/imageDisplay";
import RightArrow from "@/app/svg/icons/rightArrowForSlider";
import LeftArrow from "@/app/svg/icons/leftArrowForSlider";

import { ActiveImageContext_ForPhone } from "@/app/contexts/activeImageForPhone";

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


const ImagesSection = ({product}: {product: productParams | undefined}) => {

    const activeImageContext = useContext(ActiveImageContext_ForPhone);
   

    const style: CSSProperties = {
        width: '100%',
        height: 'calc(100vh - var(--header-height)',
        margin: 0,
        display: 'flex',
        justifyContent: "start",
        alignItems: "center",
        flexDirection: 'column',
        //padding: 'var(--extra-large-padding)'
    }
    
    const style_divSlider: CSSProperties = {
        minWidth: activeImageContext?.imageWidth ? activeImageContext?.imageWidth * 5 : 'auto',
        height: activeImageContext?.imageWidth,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
    }

    return (
        <div style={style}>
            <ImageDisplay product={product}/>
            <div style={style_divSlider}>
                <LeftArrow/>
                <Slider product={product}/>
                <RightArrow/>
            </div>
        </div>
    )
}
export default ImagesSection;