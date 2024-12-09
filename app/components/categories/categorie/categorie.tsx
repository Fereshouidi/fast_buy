'use client';

import { CSSProperties } from "react";
import Slider from "./slider/slider";

type categoriesSectionParams = {
    categoriesList: { categorie: categorieParams, products: productParams[] }[];
}

type categorieParams = {
    _id: string;
    name: string;
    parentCategorie: string;
    childrenCategories: categorieParams[];
    childOpen: boolean;
    margin: number;
}

type productParams = {
    name: string;
    imagePrincipal: string;
    price: number;
    discount: discountParams;
    totalRating: number;
    currencyType: string;
}

type discountParams = {
    createdAt: Date;
    discountSticker: string;
    newPrice: number;
    oldPrice: number;
    percentage: number;
    startOfDiscount: Date;
    endOfDiscount: Date;
};

const Categorie = ({ categorie, products }: { categorie: categorieParams, products: productParams[] }) => {

    if(typeof window == 'undefined'){
        throw 'window.innerWidth == "undefind"'
    }

    const style: CSSProperties = {
        backgroundColor: 'var(--white)',
        margin: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    const styleH2: CSSProperties = {
        margin: window.innerWidth > 800 ? 'var(--large-margin)' : 'var(--extra-small-margin)' ,
        color: 'var(--black)'
    }
    return (
        <div style={style}>
            <h2 style={styleH2}>{categorie.name}</h2>
            {<Slider products={products}/> }
        </div>
    );
};

export default Categorie;
