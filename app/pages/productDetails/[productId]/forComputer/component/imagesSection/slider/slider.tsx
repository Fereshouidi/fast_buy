'use client';

import { CSSProperties, useContext } from "react";
import Slides from "./slides/slides";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import { productParams } from "@/app/contexts/productSelectForShowing";



const Slider = ({product}: {product: productParams | undefined}) => {

    const activeImageContext = useContext(ActiveImageContext);

    
    const style: CSSProperties = {
        width: activeImageContext?.imageWidth? activeImageContext?.imageWidth *3 : '',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        height: activeImageContext?.imageWidth,
        display: 'flex',
        justifyContent: "start",
        alignItems: "start",
        flexDirection: 'column'
    }
    return (
        <div style={style}>
            <Slides product={product}/>
        </div>
    )
}
export default Slider;