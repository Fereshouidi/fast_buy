'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { CSSProperties, useContext, useState } from "react";
import tinycolor from "tinycolor2";

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

  const companyInformation = useContext(CompanyInformationContext)
  if(typeof window == 'undefined'){
    throw 'window.innerWidth == "undefind"'
}

  const languageContext = useContext(LanguageSelectorContext);
  const [price_Hover, setPrice_Hover] = useState(false);


  if(!languageContext){
    throw 'error languageContext'
  }
  
  const darkenedColor = tinycolor(companyInformation?.primaryColor || '#111111').darken(10).toString();  


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
  backgroundColor: `${companyInformation?.primaryColor}`,
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
//   backgroundColor: `${companyInformation?.primaryColor}`,
  
// }
const newPriceHover: CSSProperties = {
  ...styleNewPrice,
  backgroundColor: darkenedColor
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