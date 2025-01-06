'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import Card from "./card/card";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import SearchBar from "@/app/components/header/headerForComputer/components/searchBar/searchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


type params = {
    Query?: string | undefined,
    products: productParams[] 
  }
  const ProductsShowing = ({ products, Query }: params) => {

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
        flexDirection: 'column'
    }

    const styleContainer: CSSProperties = {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
    }

    const styleSearchBar:CSSProperties = {
        backgroundColor: 'transparent',
        width: '80%',
        height: 'var(--primary-height)',
        position: 'relative',
        padding: '0',
        direction: activeLanguage.activeLanguage == "arabic"? 'rtl': 'ltr',
        transition: '0.7s ease',
        margin: 'var(--medium-margin) 0'
    }
    const styleNoFavoriteDiv: CSSProperties = {
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: 0.7,
        color: 'var(--black)',

      }
      const styleIcon: CSSProperties = {
        width: 'var(--double-width)',
        height: 'auto',
        margin: 'var(--medium-margin)',
        color: 'var(--black)',
        opacity: '0.7'
      }
    return (
        <section style={Style}>
            {window.innerWidth < 800 ? <SearchBar style={styleSearchBar} Query={Query}/> : null}
            <div style={styleContainer}>
                {products.length > 0 ? products.map((product, index) => {
                        return <div key={index}>
                            <Card product={product}/>
                        </div>
                    })
                    
                :<div style={styleNoFavoriteDiv}>
                    <FontAwesomeIcon icon={faSearch} style={styleIcon}/>
                    <p>{activeLanguage?.noResultP}</p>
                </div>
                }
            </div>
            

        </section>
    )
}
export default ProductsShowing;