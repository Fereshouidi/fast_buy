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
  //margin: '5px',
  height: 'auto',
  marginBottom: '5px',
  //backgroundColor: 'red'
  //position: 'absolute',
  //bottom: 0,
}
const stylediscountPricesDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  direction: languageContext.activeLanguage == 'arabic'? 'rtl' : 'ltr',
  width: '100%',

}
// const styleoldPrice: CSSProperties = {
//   margin: '0 var(--extra-small-margin)',
//   fontSize: 'calc(var(--extra-small-size)/1.7)',
//   textDecoration: 'line-through',
//   color: 'var(--black)'
// }
const styleNewPrice: CSSProperties = {
  margin: '0 var(--extra-small-margin)',
  backgroundColor: `${companyInformation?.primaryColor}`,
  fontSize: 'calc(var(--primary-size)/1.5)',
  //padding: 'var(--small-padding)',
  borderRadius: '50px',
  color: 'white',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: '20px'
}
// const price: CSSProperties = {
//   fontSize: 'calc(var(--small-size)/1.2)',
//   //margin: 'calc(var(--extra-small-margin)/1.2)',
//   padding: 'var(--small-padding)',
//   borderRadius: '50px',
//   color: 'var(--black)',
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
// }
const newPriceHover: CSSProperties = {
  ...styleNewPrice,
  backgroundColor: darkenedColor
}
  
    return (
        <div style={stylePriceDiv}>
          {product.discount ? (
            <div style={stylediscountPricesDiv}>
              {/* <h5 style={styleoldPrice}>{product.discount.oldPrice+ ' ' +product.currencyType|| "N/A"}</h5> */}
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