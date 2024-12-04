'use client';

import { CSSProperties, useEffect, useState } from "react";
import { getAllProducts_SortedByRating } from "@/app/crud";
import Card from "./card/card";

const ProductsShowing = () => {

    type allProductsParams = {
        allProducts: productParams[]
    }
    type productParams = {
        name: string
    }
    const [allProducts, setAllProducts] = useState<productParams[]>()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllProducts_SortedByRating();
            setAllProducts(data);
        }
        fetchData()
    }, [])

    

    const Style: CSSProperties = {
        width: '100vw',
        backgroundColor: 'var(--almost-white)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }
    
    const StyleH2: CSSProperties = {
        margin: 'calc(var(--large-margin)*3)',
        color: 'var(--black)'
    }

    const styleContainer: CSSProperties = {
        width: '100vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap'
    }

    return (
        <section style={Style}>
            <h2 style={StyleH2}>{'Highest rated'}</h2>
            <div style={styleContainer}>
                {allProducts && allProducts.map((product, index) => {
                    return <div key={index}>
                        <Card product={product}/>
                    </div>
                })}
            </div>
            
        </section>
    )
}
export default ProductsShowing;