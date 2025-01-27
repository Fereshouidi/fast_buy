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
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist
    const languageContext = useContext(LanguageSelectorContext);
    const [cardHover, setCardHover] = useState<boolean>(false)

if(!languageContext){
  throw 'error languageContext'
}
if(!setLoadingIcon){
    return;
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
        //border: `0.1px solid ${companyInformation?.primaryColor}`,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        width: '120px',
        height: 'auto',
        minHeight: '180px',
        //backgroundColor: 'var(--white)',
        borderRadius: '10px',
        margin: 'var(--extra-small-margin)',
        padding: 'calc(var(--small-padding)/2)',
        cursor: "pointer",
        transition: '0.5s ease',
        flexShrink: '0',
        flexGrow: '0',
        flexBasis: window.innerWidth > 800 ? 'calc(90vw /6)' : window.innerWidth <= 800 && window.innerWidth >= 600 ? 'calc(90vw /4)' : 'calc(90vw /3)',
        position: 'relative',
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
        padding: 'calc(var(--small-padding)/2)',
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
        marginTop: 'var(--extra-small-margin)',
        width: '100%',
        display: 'flex',
        left: '0',
        bottom: '0',
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