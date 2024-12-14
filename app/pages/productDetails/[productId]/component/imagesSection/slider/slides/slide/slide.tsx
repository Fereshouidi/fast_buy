'use client';

import { ActiveImageContext } from "@/app/contexts/activeImage";
import { CSSProperties, useContext } from "react";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { ProductSelectContext } from "@/app/contexts/productSelectForShowing";

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

const Slide = ({image}: {image: string}) => {

    const companyInformationContext = useContext(CompanyInformationContext);
    const activeImageContext = useContext(ActiveImageContext);
    const product = useContext(ProductSelectContext)?.product;

    
    const handleImageClicked = () => {
        activeImageContext?.setActiveImageIndex(product?.images ? product?.images.indexOf(image) : 0);
    }

    const style: CSSProperties = {
        width: activeImageContext?.imageWidth,
        height: activeImageContext?.imageWidth,
        maxHeight: '100%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        padding: ' var(--small-margin)',
        flexGrow: '0',
        cursor: "pointer",
        // flexBasis: imageWidth
    }
    const styleImg: CSSProperties = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: "cover",
        border: activeImageContext?.activeImageIndex == product?.images.indexOf(image) ? `2px solid ${companyInformationContext?.primaryColor}`: ""
    }
    return (
        <div id="slide" style={style}>
            <img src={image} style={styleImg} onClick={handleImageClicked} />
            <div id=""></div>
        </div>
    )
}
export default Slide;