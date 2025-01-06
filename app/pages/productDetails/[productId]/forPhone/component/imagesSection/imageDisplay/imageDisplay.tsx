'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import HeartIcon from "@/app/svg/icons/heart";
import LeftArrow from "@/app/svg/icons/leftArowForImageDiplay";
import RightArrow from "@/app/svg/icons/rightArowForImageDiplay";
import noAvailableImage from '@/app/images/OIP.jpg'
import { productParams } from "@/app/contexts/productSelectForShowing";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { updateLikeStatus } from "@/app/crud";
import { CustomerDataContext } from "@/app/contexts/customerData";

type Params = {
    product: productParams | undefined,
    setProduct?: (value: productParams) => void,
    purchase: purchaseParams | undefined
    setPurchase: (value: purchaseParams | undefined) => void    
    shoppingCart: shoppingCartParams | undefined,
}

const ImageDisplay = ({product, purchase, setPurchase}: Params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const customer = useContext(CustomerDataContext);
    const activeImageContext = useContext(ActiveImageContext);
    const activeImageIndex = activeImageContext?.activeImageIndex || 0;
    const activeLanguag = useContext(ActiveLanguageContext)?.activeLanguage;
    const [inFavorite, setInFavorite] = useState<boolean | undefined>(false);


    let ref = 0;
    useEffect(() => {
        if (ref == 0) {
            if (customer?.favorite) {
                for (let i = 0; i < customer.favorite.length; i++) {
                    if (customer.favorite[i]._id === product?._id) {
                        setInFavorite(true);
                        
                        if (purchase && purchase.like !== true) {
                            setPurchase({
                                ...purchase,
                                like: true,
                            });
    
                        }
                        break; 
                    }
                }
            }
            ref = 1
        }
        
    }, [purchase && ref])



    const handleHeartClick = async() => {

        if (purchase) {
            setPurchase({
                ...purchase,
                like: !inFavorite
            })

            setInFavorite(!inFavorite)
        }

        updateLikeStatus(purchase?._id, !inFavorite)

        
    }
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
    const styleHeart: CSSProperties = {
        width: 'calc(var(--double-size) * 1.2)',
        height: 'calc(var(--double-size) * 1.2)',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '50%',
        position: 'absolute',
        right: activeLanguag?.activeLanguage != 'arabic' ? 'var(--large-margin)' : '',
        left: activeLanguag?.activeLanguage != 'arabic' ? '' : 'var(--large-margin)',
        top: 'var(--large-margin)',
        backgroundColor: inFavorite ? primaryColor : 'var(--ashen)',
        cursor: 'pointer'
    }
    return (
        <div style={style}>
            {/* {product?.name && product.images.length > 0 ? <div style={styleHeart} onClick={handleHeartClick}><HeartIcon /></div> : null} */}
            <div style={styleHeart} onClick={handleHeartClick}><HeartIcon /></div>
            <LeftArrow/>
            <img 
                style={styleImg}
                src={product?.name && product.images.length > 0 ? product?.images[activeImageIndex] : noAvailableImage.src}/>
            <RightArrow/>
        </div>
    )
}
export default ImageDisplay;