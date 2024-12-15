'use client';

import { CSSProperties, useContext } from "react";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import HeartIcon from "@/app/svg/icons/heart";
import LeftArrow from "@/app/svg/icons/leftArowForImageDiplay";
import RightArrow from "@/app/svg/icons/rightArowForImageDiplay";
import noAvailableImage from '@/app/images/OIP.jpg'
import { productParams } from "@/app/contexts/productSelectForShowing";


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
            {product?.name && product.images.length > 0 ? <HeartIcon/> : null}
            <LeftArrow/>
            <img 
                style={styleImg}
                src={product?.name && product.images.length > 0 ? product?.images[activeImageIndex] : noAvailableImage.src}/>
            <RightArrow/>
        </div>
    )
}
export default ImageDisplay;