'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

import { CSSProperties, useContext } from "react";

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

  const languageContext = useContext(LanguageSelectorContext)

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
  margin: 'var(--small-margin)',
  textDecoration: 'line-through',
  color: 'var(--black)'
}
const styleNewPrice: CSSProperties = {
  margin: 'var(--small-margin)',
  backgroundColor: 'var(--primary-color)',
  padding: 'var(--medium-padding)',
  borderRadius: '50px',
  color: 'var(--white)'
}
const price: CSSProperties = {
  margin: 'var(--small-margin)',
  padding: 'var(--medium-padding)',
  borderRadius: '50px',
  color: 'var(--black)'
}


  
    return (
        <div style={stylePriceDiv}>
          {product.discount ? (
            <div style={stylediscountPricesDiv}>
              <h5 style={styleoldPrice}>{product.discount.oldPrice+ ' ' +product.currencyType|| "N/A"}</h5>
              <h4 style={styleNewPrice}>{product.discount.newPrice+ ' ' +product.currencyType|| "N/A"}</h4>
            </div>
          ) : (
            <h4 style={price}>{product.price+ ' ' +product.currencyType || "N/A"}</h4>
          )}
        </div>
      );
}
export default Price;