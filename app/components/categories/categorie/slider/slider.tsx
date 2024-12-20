'use client';
import CardForComputer from "@/app/components/categories/categorie/slider/card_forComputer/card";
import CardForPhone from "@/app/components/categories/categorie/slider/card_forPhone/card";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import { CSSProperties } from "react";
import { productParams } from "@/app/contexts/productSelectForShowing";


const Slider = ({ products }: {products: productParams[] }) => {
    
    if(typeof window == 'undefined'){
        throw "typeof window == 'undefined' !"
    }

    const StyleSlide: CSSProperties = {
        width: '100%',
        height: 'auto',
        display: 'flex',
        transition: '0.5s',
        padding: window.innerWidth > 800 ? '10px' : "5px",
        margin: window.innerWidth > 800 ? '10px' : "5px",
        borderRadius: "20px",
        backgroundColor: 'var(--white-almost-transparnt)',        
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    }
    return (
            <div id="slide" style={StyleSlide}>
                {products ? products.map((product, index) => {
                        return window.innerWidth > 1000? <CardForComputer key={index} product={product}/> : <CardForPhone key={index} product={product}/>
                    })
                    : <LoadingIcon/>
                }
            </div>
    )
}
export default Slider;