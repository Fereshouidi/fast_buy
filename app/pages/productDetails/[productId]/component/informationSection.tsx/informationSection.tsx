'use client';

import { CSSProperties } from "react";

type productParams = {
    _id: string,
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


const InformationSection = ({product}: {product: productParams | undefined}) => {

    const style: CSSProperties = {
        width: '50%',
        display: 'flex',
        justifyContent: "center"
    }
    
    return (
        <div style={style}>InformationSection</div>
    )
}
export default InformationSection;