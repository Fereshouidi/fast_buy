'use client';

import ProductsShowingForComputer from './forComputer/productsShowing';
import ProductsShowingForPhone from './forPhone/productsShowing';
import { useContext} from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";

type params = {
  Query?: string | undefined,
  products: productParams[]
}
const ProductsShowing = ({ products, Query }: params) => {

    const languageContext = useContext(LanguageSelectorContext);


    if(!languageContext){
        throw 'error languageContext';
    }

    
    if (typeof window == 'undefined') {
        return ;
      }



    return (

        products.length > 0 && window.innerWidth > 800 ?
            <ProductsShowingForComputer products={products}/> 
            : <ProductsShowingForPhone products={products} Query={Query}/>
    )
}
export default ProductsShowing;