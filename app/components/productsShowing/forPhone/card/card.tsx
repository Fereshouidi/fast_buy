'use client';

import { CSSProperties, useContext, useState } from "react";
import Price from "./price/price";
import BoxIcon from "@/app/svg/icons/boxSmall";
import StarRating from "./startingRating/StartRating";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { useRouter } from "next/navigation";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";

type productParams = {
    _id: string,
    name: LanguageParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type LanguageParams = {
    english: string,
    arabic: string
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

const Card = ({product}: {product : productParams}) => {

    const router = useRouter();

    const languageContext = useContext(LanguageSelectorContext);
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;

    const [cardHover, setCardHover] = useState<boolean>(false)

    if(!languageContext){
        throw 'error languageContext'
    }
    if(!setLoadingIcon){
        return;
    }

    const setHover = () => {
        setCardHover(true)
    }
    const unsetHover = () => {
        setCardHover(false)
    }

    const goToCardShow = (product: productParams) => {
        setLoadingIcon(true);
        router.push(`/pages/productDetails/${product._id}`);
    };
    

    const Style: CSSProperties = {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        width: '160px',
        height: '200px',
       // backgroundColor: 'var(--white)',
        borderRadius: '10px',
        margin: 'var(--extra-small-margin)',
        padding: 'calc(var(--small-padding)/2)',
       // boxShadow: '0 5px 15px var(--black-almost-transparnt)',
        cursor: "pointer",
        transition: '0.5s ease',
        flexShrink: '0',
        flexGrow: '0',
        flexBasis: window.innerWidth > 800 ? 'calc(90vw /6)' : window.innerWidth <= 800 && window.innerWidth >= 600 ? 'calc(90vw /4)' : 'calc(90vw /3)',
        position: 'relative',
    }
    const StyleWithHover: CSSProperties = {
        ...Style,
        // transform: 'scale(1.05)',
       backgroundColor: 'var(--white)',
       transition: '0s',
    }
    const StyleImage: CSSProperties = {
        width: '100%',
        height: '75%',
        objectFit: 'cover',
        borderRadius: '20px',
        backgroundColor: 'var(--almost-white)',
    }
    const styleH4: CSSProperties = {
        padding: 'var(--small-padding) calc(var(--small-padding)/2) calc(var(--small-padding)/2) calc(var(--small-padding)/2)',
        color: 'var(--black)',
        fontSize: 'calc(var(--extra-small-size)/1.5)'
    }
    const StyleCartInformation: CSSProperties = {
        width: '100%',
        height: '29%',
        borderRadius: '20px',
        position: 'relative'
    }
    const styleBoxAndPricesDiv: CSSProperties = {
        marginBottom: 'var(--extra-small-margin)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        //backgroundColor: 'red',
        //position: 'absolute',
        //padding: '0 0 0 5px',
         //left: '10px',
        bottom: '15px',
        width: '100%',
        direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr'
    }
    return(
        <div style={cardHover? StyleWithHover : Style} onMouseEnter={setHover} onMouseLeave={unsetHover} onClick={() => goToCardShow(product)}>
            <img src={product.imagePrincipal} alt="" style={StyleImage} />
            <div style={StyleCartInformation}>
                <h4 style={styleH4}>{
                    languageContext.activeLanguage == "english" ?
                    product.name.english
                    : product.name.arabic    
                }</h4>
                <StarRating product={product}/>
                <div style={styleBoxAndPricesDiv}>
                    <BoxIcon  />
                    <Price product={product}/>
                </div>
            </div>
        </div>
    )
}
export default Card;