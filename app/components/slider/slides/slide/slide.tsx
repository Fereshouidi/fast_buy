'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";

type SliseParams = {
    productTittle: string,
    productImage: string
}
const Slide = ({productTittle, productImage} :SliseParams) => {

    const slideRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState<number>(0);

    if(typeof window == 'undefined'){
        throw 'type of window is undefined'
    }

    const updateImageWidth = () => {

        if (slideRef.current) {
            setImageWidth((slideRef.current.offsetWidth * 0.9) / 1.5);
        }
    };

    useEffect(() => {

        updateImageWidth();

    }, [window.innerWidth])

    const style:CSSProperties = {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        flexShrink: '0',
        flexGrow: '0',
        flexBasis: 'calc(90vw /3)',
        padding: '15px',
    }
    const styleTittle:CSSProperties = {
        color: 'var(--black)'
    }
    const styleImage:CSSProperties = {
        width: imageWidth ,
        height: imageWidth ,
        borderRadius: '50%',
        margin: '15px',
        boxShadow: '0 5px 15px var(--black-almost-transparnt)'
    }
    
    return(
        <div ref={slideRef} style={style}>
            <img style={styleImage} src={productImage} alt="productImage" />
            <h4 style={styleTittle}>{productTittle}</h4>
        </div>
    )
}
export default Slide;