'use client';
import { CSSProperties, useEffect, useState } from "react";
import Categorie from "./categorie/categorie";
import { getCategoriesSection } from "@/app/crud";
import { productParams } from "@/app/contexts/productSelectForShowing";

const CategoriesSection = () => {

    if(typeof window == 'undefined'){
        throw 'window.innerWidth == "undefind"'
    }

    type categoriesSectionParams = {
        catgorie: categorieParams;
        products: productParams[];
    }[];

    type categorieParams = {
        _id: string;
        name: nameParams;
        parentCategorie: string;
        childrenCategories: categorieParams[];
        childOpen: boolean;
        margin: number;
    };

    type nameParams = {
        english: string,
        arabic: string
    }


    const [categoriesSection, setCategoriesSection] = useState<categoriesSectionParams>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCategoriesSection();
            setCategoriesSection(data);
        };
        fetchData();
    }, []);

    const style: CSSProperties = {
        width: '100%',
        height: 'auto',
        backgroundColor: 'var(--white)',
        padding: window.innerWidth > 800 ? 'calc(var(--large-margin)*5) 0' : 'var(--large-margin) 0'
    };

    return (
        <section style={style}> 
            {categoriesSection && categoriesSection.map(({ catgorie, products }) => {
                return <Categorie key={catgorie._id} categorie={catgorie} products={products} />;
            })}
        </section>
    );
};

export default CategoriesSection;
