'use client';

import { CSSProperties, useContext } from "react";
import { ActiveImageContext } from "@/app/contexts/activeImage";
import HeartIcon from "@/app/svg/icons/heart";
import LeftArrow from "@/app/svg/icons/leftArowForImageDiplay";
import RightArrow from "@/app/svg/icons/rightArowForImageDiplay";


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

const ImageDisplay = ({product}: {product: productParams | undefined}) => {

    const activeImageContext = useContext(ActiveImageContext);
    const activeImageIndex = activeImageContext?.activeImageIndex || 0;

    const style: CSSProperties = {
        maxWidth: '70vh',
        height: '70vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        margin: 'var(--extra-large-margin) var(--large-margin) var(--large-margin) var(--large-margin)',
        padding: 0,
        boxSizing: 'border-box',
        borderRadius: '20px',
        position: 'relative',
    }

    const styleImg: CSSProperties = {
        backgroundColor: 'var(--ashen-almost-white)',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: '20px',
    }

    return (
        <div style={style}>
            <HeartIcon/>
            <LeftArrow/>
            <img 
                style={styleImg}
                src={product?.images[activeImageIndex]}/>
            <RightArrow/>
        </div>
    )
}
export default ImageDisplay;