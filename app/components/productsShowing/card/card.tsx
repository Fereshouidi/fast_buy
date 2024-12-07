'use client';

import { CSSProperties, useContext, useState } from "react";
import Price from "./price/price";
import BoxIcon from "@/app/svg/icons/box";
import StarRating from "./startingRating/StartRating";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

type productParams = {
    name: string,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
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
const Card = ({product}: {product : productParams}) => {

    
const languageContext = useContext(LanguageSelectorContext)

if(!languageContext){
  throw 'error languageContext'
}

const [cardHover, setCardHover] = useState<boolean>(false)

const setHover = () => {
    setCardHover(true)
}
const unsetHover = () => {
    setCardHover(false)
}

    const Style: CSSProperties = {
        width: '250px',
        height: '350px',
        backgroundColor: 'var(--white)',
        borderRadius: '20px',
        margin: 'var(--medium-margin)',
        padding: 'var(--small-padding)',
        boxShadow: '0 5px 15px var(--black-almost-transparnt)',
        cursor: "pointer",
        transition: '0.5s ease'
    }
    const StyleWithHover: CSSProperties = {
        ...Style,
        transform: 'scale(1.05)',
    }
    const StyleImage: CSSProperties = {
        width: '100%',
        height: '70%',
        objectFit: 'cover',
        borderRadius: '20px',
        backgroundColor: 'var(--almost-white)',
    }
    const styleH4: CSSProperties = {
        padding: 'calc(var(--small-padding)/1.5)',
        color: 'var(--black)'
    }
    const StyleCartInformation: CSSProperties = {
        width: '100%',
        height: '29%',
        borderRadius: '20px',
        position: 'relative'
    }
    const styleBoxAndPricesDiv: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr'
    }
    return(
        <div style={cardHover? StyleWithHover : Style} onMouseEnter={setHover} onMouseLeave={unsetHover}>
            <img src={product.imagePrincipal} alt="" style={StyleImage} />
            <div style={StyleCartInformation}>
                <h4 style={styleH4}>{product.name}</h4>
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