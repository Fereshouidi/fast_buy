'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";

type SliseParams = {
    productTittle: string,
    productImage: string
}
const Slide = ({productTittle, productImage} :SliseParams) => {

    const slideRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState<number>(0);


    const updateImageWidth = () => {

        if (slideRef.current && typeof window != 'undefined') {
            if(window.innerWidth >= 800){
                setImageWidth((slideRef.current.offsetWidth * 0.9) / 1.5);
            }else{
                setImageWidth((slideRef.current.offsetWidth * 0.9));
            }
        }
    };

    
    useEffect(() => {

        if (typeof window !== 'undefined') {

            const handleResize = () => {
                updateImageWidth(); 
            };

            window.addEventListener('resize', handleResize);

            handleResize();

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const style:CSSProperties = {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        flexShrink: '0',
        flexGrow: '0',
        flexBasis: 'calc(90vw /3)',
        // backgroundColor: 'red',
        // margin: '1px',
        // padding: '15px',
        
    }
    const styleTittle:CSSProperties = {
        color: 'var(--black)'
    }
    const styleImage:CSSProperties = {
        width: imageWidth ,
        height: imageWidth ,
        borderRadius: '50%',
        marginBottom: '15px',
        // margin: '15px',
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