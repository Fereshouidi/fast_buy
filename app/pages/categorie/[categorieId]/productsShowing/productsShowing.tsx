'use client';

import ProductsShowingForComputer from './forComputer/productsShowing';
import ProductsShowingForPhone from './forPhone/productsShowing';
import { CSSProperties, useContext} from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { CategorieParams } from '@/app/contexts/categories';
import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';

type params = {
  categorie: CategorieParams 
  products: productParams[]
}
const ProductsShowing = ({ categorie, products}: params) => {

    const languageContext = useContext(LanguageSelectorContext);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    if(!languageContext){
        throw 'error languageContext';
    }

    
    if (typeof window == 'undefined') {
        return ;
      }

      const styleNoFavoriteDiv: CSSProperties = {
        width: '100%',
        height: '90vh',
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

        products.length > 0 ? 
        window.innerWidth > 800 ?
            <ProductsShowingForComputer categorie={categorie} products={products}/> 
            : <ProductsShowingForPhone categorie={categorie} products={products}/>
        :<div style={styleNoFavoriteDiv}>
            <FontAwesomeIcon icon={faHeartBroken} style={styleIcon}/>
            <p>{activeLanguage?.noFavoriteP}</p>
        </div>
    )
}
export default ProductsShowing;