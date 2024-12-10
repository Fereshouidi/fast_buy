'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

import { CSSProperties, useContext, useState } from "react";

type productParams = {
  name: nameParams,
  imagePrincipal: string,
  price: number,
  discount: discountParams,
  totalRating: number,
  currencyType: string

}

type nameParams = {
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
const Price = ({product}: {product : productParams}) => {

  if(typeof window == 'undefined'){
    throw 'window.innerWidth == "undefind"'
}

  const languageContext = useContext(LanguageSelectorContext);
  const [price_Hover, setPrice_Hover] = useState(false);


  if(!languageContext){
    throw 'error languageContext'
  }
  
const stylePriceDiv: CSSProperties = {
  direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 0,
  height: 'auto',
  marginBottom: '70px',
}
const stylediscountPricesDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr',
  width: '100%',

}
// const styleoldPrice: CSSProperties = {
//   margin: 'var(--small-margin)',
//   textDecoration: 'line-through',
//   color: 'var(--black)'
// }
const styleNewPrice: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'var(--small-margin)',
  backgroundColor: 'var(--primary-color)',
  padding: 'var(--medium-padding)',
  borderRadius: '50px',
  color: 'white',
  width: '90%'

}
// const price: CSSProperties = {
//   padding: 'var(--medium-padding) 5%',
//   borderRadius: '50px',
//   color: 'var(--black)',
//   width: '100%,',
//   backgroundColor: 'var(--primary-color)',
  
// }
const newPriceHover: CSSProperties = {
  ...styleNewPrice,
  backgroundColor: 'var(--primary-color-clicked)'
}
  
    return (
        <div style={stylePriceDiv}>
          {product.discount ? (
            <div style={stylediscountPricesDiv}>
              <h4 style={price_Hover? newPriceHover: styleNewPrice}
                onMouseEnter={() => setPrice_Hover(true)} 
                onMouseLeave={() => setPrice_Hover(false)}
              >{product.discount.newPrice+ ' ' +product.currencyType|| "N/A"}</h4>
            </div>
          ) : (
            <h4 style={styleNewPrice} >{product.price+ ' ' +product.currencyType || "N/A"}</h4>
          )}
        </div>
      );
}
export default Price;