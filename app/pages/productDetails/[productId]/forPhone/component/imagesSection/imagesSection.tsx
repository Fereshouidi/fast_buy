'use client';

import { CSSProperties, useContext } from "react";
import Slider from "./slider/slider";
import ImageDisplay from "./imageDisplay/imageDisplay"
import RightArrow from "@/app/svg/icons/rightArrowForSlider";
import LeftArrow from "@/app/svg/icons/leftArrowForSlider";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";

type Params = {
    product: productParams | undefined,
    setProduct?: (value: productParams) => void,
    purchase: purchaseParams | undefined,
    shoppingCart: shoppingCartParams | undefined,
}

const ImagesSection = ({product, purchase, shoppingCart}: Params) => {

    const activeImageContext = useContext(ActiveImageContext);
   

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
            <ImageDisplay product={product} purchase={purchase} shoppingCart={shoppingCart}/>
            {
                product?.images && product.images.length > 0 ? 
            
                <div style={style_divSlider}>
                    <LeftArrow/>
                    <Slider product={product}/>
                    <RightArrow/>
                </div>

                : null
            }
        </div>
    )
}
export default ImagesSection;