'use clent';
import { createContext } from "react";

type productParams = {
    _id: string,
    name: nameParams,
    imagePrincipal: string,
    images: string[],
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

type productSelect = {
    product: productParams | undefined ,
}

export const  ProductSelectContext = createContext<productSelect | undefined>(undefined)