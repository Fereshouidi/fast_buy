'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



type params = {
    products: productParams[] 
  }
  const ProductsShowing = ({ products }: params) => {

    const [activeLanguage, setActiveLanguage] = useState(english);

    const languageContext = useContext(LanguageSelectorContext);
    if(!languageContext){
        throw 'error languageContext !';
    }

    useEffect(() => {
        if(languageContext.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(languageContext.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }
    }, [languageContext.activeLanguage]);


    const Style: CSSProperties = {
        width: '100%',
        backgroundColor: 'var(--almost-white)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        padding: 'var(--medium-padding)'
    }

    const styleContainer: CSSProperties = {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap'
    }
    const styleNoFavoriteDiv: CSSProperties = {
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: 0.7
      }
      const styleIcon: CSSProperties = {
        width: 'var(--double-width)',
        height: 'auto',
        margin: 'var(--medium-margin)'
      }

    return (
        <section style={Style}>
            <div style={styleContainer}>
                {products.length > 0 ? products.map((product, index) => {
                        return <div key={index}>
                            <Card product={product}/>
                        </div>
                    })
                    
                :<div style={styleNoFavoriteDiv}>
                    <FontAwesomeIcon icon={faSearch} style={styleIcon}/>
                    <p>{activeLanguage?.noFavoriteP}</p>
                </div>
                }
            </div>
            

        </section>
    )
}

export default ProductsShowing;
