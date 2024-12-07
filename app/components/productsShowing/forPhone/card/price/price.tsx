'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

import { CSSProperties, useContext, useState } from "react";

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
const Price = ({product}: {product : productParams}) => {

  const languageContext = useContext(LanguageSelectorContext);
  const [price_Hover, setPrice_Hover] = useState(false);


  if(!languageContext){
    throw 'error languageContext'
  }
  
  const stylePriceDiv: CSSProperties = {
    direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr'
}
const stylediscountPricesDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr'
}
const styleoldPrice: CSSProperties = {
  margin: 'var(--extra-small-margin)',
  fontSize: 'calc(var(--extra-small-size)/1.5)',
  textDecoration: 'line-through',
  color: 'var(--black)'
}
const styleNewPrice: CSSProperties = {
  margin: 'var(--extra-small-margin)',
  backgroundColor: 'var(--primary-color)',
  fontSize: 'calc(var(--primary-size)/1.3)',
  padding: 'var(--small-padding)',
  borderRadius: '50px',
  color: 'var(--white)'
}
const price: CSSProperties = {
  fontSize: 'calc(var(--small-size)/1.5)',
  margin: 'var(--small-margin)',
  padding: 'var(--medium-padding)',
  borderRadius: '50px',
  color: 'var(--black)'
}
const newPriceHover: CSSProperties = {
  ...styleNewPrice,
  backgroundColor: 'var(--primary-color-clicked)'
}
  
    return (
        <div style={stylePriceDiv}>
          {product.discount ? (
            <div style={stylediscountPricesDiv}>
              <h5 style={styleoldPrice}>{product.discount.oldPrice+ ' ' +product.currencyType|| "N/A"}</h5>
              <h4 style={price_Hover? newPriceHover: styleNewPrice}
                onMouseEnter={() => setPrice_Hover(true)} 
                onMouseLeave={() => setPrice_Hover(false)}
              >{product.discount.newPrice+ ' ' +product.currencyType|| "N/A"}</h4>
            </div>
          ) : (
            <h4 style={price} >{product.price+ ' ' +product.currencyType || "N/A"}</h4>
          )}
        </div>
      );
}
export default Price;