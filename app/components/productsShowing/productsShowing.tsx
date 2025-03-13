'use client';

import { getAllProducts_SortedByRating } from "@/app/crud";
import ProductsShowingForComputer from '@/app/components/productsShowing/forComputer/productsShowing';
import ProductsShowingForPhone from '@/app/components/productsShowing/forPhone/productsShowing';
import { useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";


const ProductsShowing = () => {

    const languageContext = useContext(LanguageSelectorContext);

    if(!languageContext){
        throw 'error languageContext';
    }


    const [allProducts, setAllProducts] = useState<productParams[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);
    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllProducts_SortedByRating(pageNumber, 12);
            setAllProducts((prev) => [...(prev || []), ...data.products]);
        }
        fetchData()
    }, [pageNumber])

    
    if (typeof window == 'undefined') {
        return ;
      }

      
    // if (allProducts.some(product => product.name.english == "AirBuds Max ")) {
    //     console.log("yes");
    // } else {
    //     console.log("no");
    // }

    return (
        
        window.innerWidth > 800 ?
        <ProductsShowingForComputer allProducts={allProducts} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        : <ProductsShowingForPhone allProducts={allProducts} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    )
}
export default ProductsShowing;