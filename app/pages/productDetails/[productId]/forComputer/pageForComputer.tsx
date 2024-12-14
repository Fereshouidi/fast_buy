'use client';
import { CSSProperties } from "react";
import ImagesSection from "../component/imagesSection/imagesSection";
import InformationSection from "../component/informationSection.tsx/informationSection";

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

const PageForComputer = ({product}: {product: productParams | undefined}) => {

    const style: CSSProperties = {
        backgroundColor: "var(--almost-white)",
        width: '100%',
        display: 'flex',
        justifyContent: "center"
    }
    return (
        <div id="the-product-detail-page-of-computer" style={style}>
            <ImagesSection product={product}/>
            <InformationSection product={product}/>
        </div>
    )
}
export default PageForComputer;