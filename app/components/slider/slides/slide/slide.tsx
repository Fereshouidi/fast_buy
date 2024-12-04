'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";
import TimeLeft from "./detail/timeLeft";

type SliseParams = {
    productTittle: string,
    productImage: string,
    products: productParams[]
}
type productParams = {
    name: string;
    images: string[];
    startOfDiscount: Date,
    endOfDiscount: Date,
    discount: number,
    discountSticker: string
}

const Slide = ({product} : {product: productParams}) => {

    const slideRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState<number>(0);


    const updateImageWidth = () => {

        if (slideRef.current && typeof window != 'undefined') {
            if(window.innerWidth >= 800){
                setImageWidth((slideRef.current.offsetWidth * 0.9) / 1.3);
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
        flexBasis: 'calc(90vw /3)',
    }
    const styleTittle: CSSProperties = {
        color: 'var(--black)',
        marginTop: 'var(--large-margin)'
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
        width: imageWidth /4 ,
        height: imageWidth/4 ,
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
        margin: 'var(--large-margin)'
    }
    const styleoldPrice: CSSProperties = {
        width: imageWidth /4 ,
        height: imageWidth/4 ,
        fontSize: imageWidth / 15,
        margin: 'var(--small-margin)'
    }
    const styleNewPrice: CSSProperties = {
        width: imageWidth /4 ,
        height: imageWidth/4 ,
        fontSize: imageWidth / 15,
        margin: 'var(--small-margin)'
    }



    return(
        <div ref={slideRef} style={style}>
            {product.discount && <TimeLeft product={product}/>}
            <div style={styleImgDiv}>
                <img style={styleImage} src={product.images[0]} alt="productImage" />
                {
                product.discount && product.discountSticker?
                 <img style={styleDiscount} src={product.discountSticker} alt="discount sticker"></img>
                 : product.discount && !product.discountSticker?
                 <span style={styleDiscount}>{`${product.discount}%`}</span>
                 : null
                
                } 
            
                 </div>
            <h4 style={styleTittle}>{product.name}</h4>
            <div style={stylePrices}>
                <span style={styleoldPrice}>90.000</span>
                <span style={styleNewPrice}>50.000</span>
            </div>
        </div>
    )
}
export default Slide;