'use client';

import { CSSProperties } from "react";

type categorieParams = {
    _id: number,
    name: string,
    parentCategorie: string,
    childrenCategories: categorieParams[],
}
const CategoriesList = ({categorie}: {categorie: categorieParams}) => {

    const style: CSSProperties = {
        opacity: '0'
    }

    return (
        <li style={style}>
            {categorie.name}
        </li>
    )
}
export default CategoriesList;