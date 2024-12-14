'use client';

import { CSSProperties, useContext } from "react";
import Slides from "./slides/slides";
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


const Slider = ({product}: {product: productParams | undefined}) => {

    const activeImageContext = useContext(ActiveImageContext_ForPhone);

    
    const style: CSSProperties = {
        width: activeImageContext?.imageWidth? activeImageContext?.imageWidth *3 : '',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        height: activeImageContext?.imageWidth,
        display: 'flex',
        justifyContent: "start",
        alignItems: "start",
        flexDirection: 'column',
    }
    return (
        <div style={style}>
            <Slides product={product}/>
        </div>
    )
}
export default Slider;