'use client';

import { CSSProperties, useContext, useState } from "react";
import Price from "./price/price";
import StarRating from "./startingRating/StartRating";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { useRouter } from "next/navigation";
import { productParams } from "@/app/contexts/productSelectForShowing";


const Card = ({product}: {product : productParams}) => {

    const router = useRouter();
    const companyInformation = useContext(CompanyInformationContext);
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const languageContext = useContext(LanguageSelectorContext)

    const [cardHover, setCardHover] = useState<boolean>(false)

    
    if(typeof window == 'undefined'){
        throw 'window.innerWidth == "undefind"'
    }
    if(!setLoadingIcon){
        return;
    }
    
if(!languageContext){
  throw 'error languageContext'
}

const goToDetailPage = (product: productParams) => {
    setLoadingIcon(true);
    router.push(`/pages/productDetails/${product._id}`);
};


const setHover = () => {
    setCardHover(true)
}
const unsetHover = () => {
    setCardHover(false)
}

    const Style: CSSProperties = {
     //   border: `0.1px solid ${companyInformation?.primaryColor}`,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        width: '250px',
        height: '350px',
       // backgroundColor: 'var(--white)',
        borderRadius: '20px',
        margin: 'var(--medium-margin)',
        padding: 'var(--small-padding)',
        cursor: "pointer",
        flexShrink: '0',
        flexGrow: '0',
        flexBasis: window.innerWidth > 1500 ? 'calc(90vw /6)' : window.innerWidth <= 1500 && window.innerWidth >= 1100 ? 'calc(90vw /5)' : 'calc(90vw /4)',
    }
    const StyleWithHover: CSSProperties = {
        ...Style,
        transition: '0s',
        border: `0.1px solid ${companyInformation?.primaryColor}`,
        backgroundColor: 'var(--white)'
    }
    const StyleImage: CSSProperties = {
        width: '100%',
        height: '70%',
        objectFit: 'cover',
        borderRadius: '10px',
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
        width: '100%',
        margin: 'var(--extra-small-margin) 0',
        direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr'
    }
    return(
        <div style={cardHover? StyleWithHover : Style} onMouseEnter={setHover} onMouseLeave={unsetHover} onClick={() => goToDetailPage(product)}>
            <img src={product.imagePrincipal} alt="" style={StyleImage} />
            <div style={StyleCartInformation}>
                <h4 style={styleH4}>{
                    languageContext.activeLanguage == "english" ?
                    product.name?.english.length > 15 ? 
                        product.name?.english.slice(0, 15) + '...'
                        : product.name?.english ?? ''
                    : product.name?.arabic.length > 15 ?
                        product.name?.arabic.slice(0, 15) + '...'
                        : product.name?.arabic ?? ''   
                }</h4>
                <StarRating product={product}/>
                <div style={styleBoxAndPricesDiv}>
                    <Price product={product}/>
                </div>
            </div>
        </div>
    )
}
export default Card;