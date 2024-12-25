'use clent';
import { createContext } from "react";
import { discountCodeParams } from "./discountCode";
import { CategorieParams } from "./categories";

export type productParams = {
    _id: string,
    name: LanguageParams,
    description: LanguageParams,
    color: string,
    size: string,
    imagePrincipal: string,
    images: string[],
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string,
    categorie: CategorieParams,
    quantity: number,
    discountCode?: discountCodeParams | undefined,
}

type LanguageParams = {
    english: string,
    arabic: string
}

type discountParams = {
    _id: string,
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date
};

// type CategorieParams = {
//     name: LanguageParams,
// };

type productSelect = {
    product: productParams | undefined ,
}

export const  ProductSelectContext = createContext<productSelect | undefined>(undefined)