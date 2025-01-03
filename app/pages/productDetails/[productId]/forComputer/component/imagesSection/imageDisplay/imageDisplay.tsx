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
import { CustomerDataContext } from "@/app/contexts/customerData";
import { updateLikeStatus } from "@/app/crud";

type Params = {
    product: productParams | undefined,
    setProduct?: (value: productParams) => void,
    purchase: purchaseParams | undefined
    setPurchase: (value: purchaseParams | undefined) => void    
    shoppingCart: shoppingCartParams | undefined,
}

const ImageDisplay = ({product, purchase, setPurchase}: Params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const activeImageContext = useContext(ActiveImageContext);
    const activeImageIndex = activeImageContext?.activeImageIndex || 0;
    const activeLanguag = useContext(ActiveLanguageContext)?.activeLanguage;
    const [inFavorite, setInFavorite] = useState<boolean | undefined>(false);


    useEffect(() => {
        setInFavorite(purchase?.like)
    }, [purchase])

    const handleHeartClick = async() => {

        if (purchase) {
            setPurchase({
                ...purchase,
                like: !inFavorite
            })
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
        backgroundColor: purchase?.like ? primaryColor : 'var(--ashen)',
        cursor: 'pointer'
    }

    return (
        <div style={style}>
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