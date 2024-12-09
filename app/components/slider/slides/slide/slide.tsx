'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";
import TimeLeft from "./detail/timeLeft";


type productParams = {
    name: string,
    images: string[],
    imagePrincipal: string,
    startOfDiscount: Date,
    endOfDiscount: Date,
    discount: discountParams,
    discountSticker: string,
    currencyType: string
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

const Slide = ({product} : {product: productParams}) => {

    if(typeof window == 'undefined'){
        throw 'window is undefined !'
    }

    const slideRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState<number>(0);


    const updateImageWidth = () => {

        if (slideRef.current && typeof window != 'undefined') {
            if(window.innerWidth >= 800){
                setImageWidth((slideRef.current.offsetWidth * 0.8) / 1.3);
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

    const style: CSSProperties = {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        flexShrink: '0',
        flexGrow: '0',
        cursor: "pointer",
        flexBasis: window.innerWidth > 800 ? 'calc(90vw /3)' : window.innerWidth <= 800 && window.innerWidth >= 500 ? 'calc(90vw /2)' : 'calc(90vw /2)',
    }
    const styleTittle: CSSProperties = {
        color: 'var(--black)',
        marginTop: window.innerWidth > 800 ? 'var(--large-margin)' : 'var(--medium-margin)',
        fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    const styleImgDiv: CSSProperties = {
        width: imageWidth ,
        height: imageWidth ,
        position: 'relative',
        borderRadius: '50%',
    }
    const styleImage: CSSProperties = {
        width: imageWidth ,
        height: imageWidth ,
        borderRadius: '50%',
        marginBottom: '15px',
        backgroundColor: 'var(--ashen)'
        // objectFit: 'cover'
    }
    const styleDiscount: CSSProperties = {
        width: imageWidth /3.5 ,
        height: imageWidth/3.5 ,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--white)',
        borderRadius: '50%',
        boxShadow: '1px 1px 10px var(--almost-black)',
        fontSize: imageWidth / 15,
        position: "absolute",
        bottom: imageWidth / 22,
        right: imageWidth / 22,
        
    }
    const stylePrices: CSSProperties = {
        margin: 'var(--large-margin) 0',
        direction: 'ltr'

    }
    const styleoldPrice: CSSProperties = {
        width: imageWidth /2 ,
        height: imageWidth/2 ,
        fontSize: imageWidth / 15,
        margin: 'var(--small-margin)',
        textDecoration: 'line-through',
        color: 'var(--black)'
    }
    const styleNewPrice: CSSProperties = {
        width: imageWidth /2 ,
        height: imageWidth/2 ,
        fontSize: window.innerWidth > 800 ? imageWidth / 15 : imageWidth / 15,
        borderRadius: '50px',
        margin: 'var(--small-margin)',
        padding: 'var(--medium-padding)',
        backgroundColor: 'var(--primary-color)',
        color: 'white'
    }



    return(
        <div ref={slideRef} style={style}>
            {product.discount && <TimeLeft product={product.discount}/>}
            <div style={styleImgDiv}>
                <img style={styleImage} src={product.imagePrincipal} alt="productImage" />
                {
                product.discount && product.discount.discountSticker?
                 <img style={styleDiscount} src={product.discount.discountSticker} alt="discount sticker"></img>
                 : product.discount && !product.discount.discountSticker?
                 <span style={styleDiscount}>{`${product.discount.percentage}%`}</span>
                 : null
                
                } 
            
                 </div>
            <h4 style={styleTittle}>{product.name}</h4>
            <div style={stylePrices}>
                {product.discount && product.discount.oldPrice && <span style={styleoldPrice}>{product.discount.oldPrice + product.currencyType}</span>} 
                {product.discount && product.discount.oldPrice && <span style={styleNewPrice}>{product.discount.newPrice + product.currencyType}</span>}
            </div>
        </div>
    )
}
export default Slide;