'use client';

import { CSSProperties, useContext } from "react";
import Slider from "./slider/slider";
import ImageDisplay from "./imageDisplay/imageDisplay";
import RightArrow from "@/app/svg/icons/rightArrowForSlider";
import LeftArrow from "@/app/svg/icons/leftArrowForSlider";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import { productParams } from "@/app/contexts/productSelectForShowing";


const ImagesSection = ({product}: {product: productParams | undefined}) => {

    const activeImageContext = useContext(ActiveImageContext);
   

    const style: CSSProperties = {
        width: '50%',
        height: 'auto',
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