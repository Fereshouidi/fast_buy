'use client';

import { getAllProducts_SortedByRating } from "@/app/crud";
import ProductsShowingForComputer from '@/app/components/productsShowing/forComputer/productsShowing';
import ProductsShowingForPhone from '@/app/components/productsShowing/forPhone/productsShowing';
import { useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
// import english from '@/app/languages/english.json';
// import arabic from '@/app/languages/arabic.json';

const ProductsShowing = () => {

    // const [activeLanguage, setActiveLanguage] = useState(english);
    const languageContext = useContext(LanguageSelectorContext);

    if(!languageContext){
        throw 'error languageContext';
    }

    // useEffect(() => {

    //     if(languageContext.activeLanguage == 'english'){
    //         setActiveLanguage(english);
    //     }else if(languageContext.activeLanguage == 'arabic'){
    //         setActiveLanguage(arabic);
    //     }

    // }, [languageContext.activeLanguage])




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

    // const handleShowMore = () => {
    //     setPageNumber((prev) => prev + 1)
    // }
    
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