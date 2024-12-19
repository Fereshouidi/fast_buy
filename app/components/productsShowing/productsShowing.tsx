'use client';

import { getAllProducts_SortedByRating } from "@/app/crud";
import ProductsShowingForComputer from '@/app/components/productsShowing/forComputer/productsShowing';
import ProductsShowingForPhone from '@/app/components/productsShowing/forPhone/productsShowing';
import { useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";


const ProductsShowing = () => {

    const languageContext = useContext(LanguageSelectorContext);

    if(!languageContext){
        throw 'error languageContext';
    }

    type productParams = {
        _id: string,
        name: LanguageParams,
        imagePrincipal: string,
        price: number,
        discount: discountParams,
        totalRating: number,
        currencyType: string
    
    }

    type LanguageParams = {
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

    const [allProducts, setAllProducts] = useState<productParams[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);
    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllProducts_SortedByRating(pageNumber, 12);
            setAllProducts((prev) => [...(prev || []), ...data]);
            console.log(allProducts)
        }
        fetchData()
    }, [pageNumber])

    
    if (typeof window == 'undefined') {
        return ;
      }


    return (
        
        window.innerWidth > 800 ?
        <ProductsShowingForComputer allProducts={allProducts} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        : <ProductsShowingForPhone allProducts={allProducts} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    )
}
export default ProductsShowing;